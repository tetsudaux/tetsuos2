'use client';

import { useState, useRef } from 'react';
import { portfolioProjects } from '@/app/data/portfolio';
import { PortfolioCard } from '@/app/components/ui/PortfolioCard';
import { Icon } from '@/app/components/ui/Icons';
import { TagType } from '@/app/types/chat';

const STAGGER_DELAY_MS = 50;

const filterOptions: { type: TagType; label: string }[] = [
  { type: 'video', label: 'Video' },
  { type: 'design', label: 'Design' },
  { type: 'social-media', label: 'Social Media' },
  { type: 'code', label: 'Code' },
  { type: 'marketing', label: 'Marketing' },
  { type: 'ai', label: 'AI' },
  { type: 'product', label: 'Product' },
];

type SortOrder = 'newest' | 'oldest';

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<TagType | 'all' | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
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
  const filtered = activeFilter === null
    ? []
    : activeFilter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((project) =>
          project.tags.some((tag) => tag.type === activeFilter)
        );

  const filteredProjects = sortOrder === 'oldest' ? [...filtered].reverse() : filtered;

  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <div className="space-y-2 text-base leading-relaxed lg:space-y-3 lg:text-lg lg:leading-relaxed">
        <p>
          <span className="font-bold text-[var(--v-500)]">
            Here&apos;s my work!
          </span>
        </p>
        <p className="text-[var(--ink)]">
          Real experience with process, prototypes, and results.
        </p>
        <p className="text-[var(--ink)]">
          Filter by expertise to jump straight to what matters: Product,
          Design, Code, Video, Social Media, Marketing, AI.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-2 lg:gap-3">
        <p className="text-sm font-medium text-[var(--ink)] lg:text-base">Filter by expertise:</p>
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
            All
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

      {/* Sort - Only shown when projects are visible */}
      {filteredProjects.length > 0 && (
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-[var(--ink)] lg:text-base">Sort:</p>
          <div className="flex gap-1.5">
            {(['newest', 'oldest'] as SortOrder[]).map((order) => (
              <button
                key={order}
                onClick={() => setSortOrder(order)}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all lg:px-3 lg:py-2 lg:text-sm ${
                  sortOrder === order
                    ? 'bg-[var(--v-500)] text-white'
                    : 'bg-[var(--n-50)] text-[var(--v-800)] hover:bg-[var(--v-100)]'
                }`}
              >
                {order === 'newest' ? 'Newest' : 'Oldest'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Projects - Only shown when a filter is selected */}
      {filteredProjects.length > 0 && (
        <div ref={projectsGridRef} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * STAGGER_DELAY_MS}ms` }}
            >
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>
      )}

      {/* Message when no filter selected */}
      {activeFilter === null && (
        <p className="py-6 text-center text-base text-gray-500 lg:py-8 lg:text-lg">
          Select a filter to view projects
        </p>
      )}

      {/* Message when filter has no results */}
      {activeFilter !== null && filteredProjects.length === 0 && (
        <p className="py-6 text-center text-base text-gray-500 lg:py-8 lg:text-lg">
          No projects match this filter.
        </p>
      )}
      
      {/* Project count - only show when projects are visible */}
      {filteredProjects.length > 0 && (
        <p className="text-center text-sm text-gray-400 lg:text-base">
          Showing {filteredProjects.length} of {portfolioProjects.length} projects
        </p>
      )}
    </section>
  );
}
