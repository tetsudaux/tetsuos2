'use client';

import { useRef } from 'react';
import { PortfolioProject } from '@/app/types/chat';
import { Tag } from './Tag';
import { useModal } from '@/app/context/ModalContext';

interface PortfolioCardProps {
  project: PortfolioProject;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  
  const bgColor = project.category === 'product' 
    ? 'bg-[var(--v-800)]' 
    : 'bg-[var(--mg-700)]';

  const handleClick = () => {
    if (imageRef.current) {
      openModal(project, imageRef.current);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`card-hover flex w-full cursor-pointer flex-col gap-3 rounded-[12px] p-3 ${bgColor} lg:p-4`}
    >
      {/* Image - Reference for shared element transition */}
      <div 
        ref={imageRef}
        className="aspect-[4/3] w-full overflow-hidden rounded-[12px] lg:aspect-video"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full rounded-[12px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold leading-tight text-[var(--n-50)] lg:text-2xl">
        {project.title}
      </h3>
      
      {/* Company */}
      <p className="text-sm font-semibold text-[var(--n-100)] lg:text-base">
        {project.company}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <Tag key={index} type={tag.type} label={tag.label} size="sm" />
        ))}
      </div>
    </div>
  );
}
