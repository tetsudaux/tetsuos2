'use client';

import { useState, useRef } from 'react';
import { portfolioProjects } from '@/app/data/portfolio';
import { PortfolioCard } from '@/app/components/ui/PortfolioCard';
import { Icon } from '@/app/components/ui/Icons';
import { TagType } from '@/app/types/chat';

const filterOptions: { type: TagType; label: string }[] = [
  { type: 'video', label: 'Video' },
  { type: 'diseño', label: 'Diseño' },
  { type: 'social-media', label: 'Social Media' },
  { type: 'código', label: 'Código' },
  { type: 'marketing', label: 'Marketing' },
  { type: 'ai', label: 'AI' },
  { type: 'producto', label: 'Producto' },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<TagType | 'all' | null>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  const handleFilterClick = (filter: TagType | 'all') => {
    const newFilter = activeFilter === filter ? null : filter;
    setActiveFilter(newFilter);

    // Scroll to projects grid after selecting a filter
    if (newFilter !== null) {
      setTimeout(() => {
        projectsGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // No projects shown when no filter is selected
  const filteredProjects = activeFilter === null
    ? []
    : activeFilter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((project) =>
          project.tags.some((tag) => tag.type === activeFilter)
        );

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="space-y-2 text-base leading-relaxed lg:space-y-3 lg:text-lg lg:leading-relaxed">
        <p>
          <span className="font-bold text-[var(--v-500)]">
            ¡Perfecto, te comparto mi trabajo!
          </span>
        </p>
        <p className="text-[var(--ink)]">
          Aquí encontrarás experiencia real con proceso, prototipos y
          resultados.
        </p>
        <p className="text-[var(--ink)]">
          Para ir directo a lo que te importa, filtra por experiencia (Producto,
          Diseño, Código, Video, Social Media, Marketing, AI).
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-2 lg:gap-3">
        <p className="text-sm font-medium text-[var(--ink)] lg:text-base">Filtrar por experiencia:</p>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {/* All filter */}
          <button
            onClick={() => handleFilterClick('all')}
            className={`rounded-xl px-3 py-2 text-sm font-semibold transition-all lg:px-4 lg:py-2.5 lg:text-base ${
              activeFilter === 'all'
                ? 'bg-[var(--v-500)] text-white'
                : 'bg-[var(--n-50)] text-[var(--v-800)] hover:bg-[var(--v-100)]'
            }`}
          >
            Todos
          </button>
          {filterOptions.map((filter) => (
            <button
              key={filter.type}
              onClick={() => handleFilterClick(filter.type)}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all lg:px-4 lg:py-2.5 lg:text-base ${
                activeFilter === filter.type
                  ? 'bg-[var(--v-500)] text-white'
                  : 'bg-[var(--n-50)] text-[var(--v-800)] hover:bg-[var(--v-100)]'
              }`}
            >
              <Icon name={filter.type} size={18} />
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects - Only shown when a filter is selected */}
      {filteredProjects.length > 0 && (
        <div ref={projectsGridRef} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>
      )}

      {/* Message when no filter selected */}
      {activeFilter === null && (
        <p className="py-6 text-center text-base text-gray-500 lg:py-8 lg:text-lg">
          Selecciona un filtro para ver los proyectos
        </p>
      )}

      {/* Message when filter has no results */}
      {activeFilter !== null && filteredProjects.length === 0 && (
        <p className="py-6 text-center text-base text-gray-500 lg:py-8 lg:text-lg">
          No hay proyectos con este filtro.
        </p>
      )}
      
      {/* Project count - only show when projects are visible */}
      {filteredProjects.length > 0 && (
        <p className="text-center text-sm text-gray-400 lg:text-base">
          Mostrando {filteredProjects.length} de {portfolioProjects.length} proyectos
        </p>
      )}
    </div>
  );
}
