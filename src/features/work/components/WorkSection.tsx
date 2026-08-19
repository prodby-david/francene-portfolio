'use client';

import { useMemo } from 'react';
import { useWorkFilter } from '../hooks/useWorkFilter';
import { useProjectModal } from '../hooks/useProjectModal';
import { workService } from '../services/workService';
import { CategoryFilter } from './CategoryFilter';
import { PortfolioGrid } from './PortfolioGrid';
import { ProjectModal } from './ProjectModal';
import { WorkCategory } from '../types/work.types';

interface WorkSectionProps {
  externalCategory?: WorkCategory;
  onSelectCategory?: (category: WorkCategory) => void;
  onBookProject?: (projectTitle: string) => void;
}

export function WorkSection({
  externalCategory,
  onSelectCategory,
  onBookProject,
}: WorkSectionProps) {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProjects,
  } = useWorkFilter(externalCategory || 'all');

  const { selectedProject, isOpen, openModal, closeModal } = useProjectModal();

  const itemCounts = useMemo(() => {
    return {
      all: workService.getCategoryCount('all'),
      'hair-makeup': workService.getCategoryCount('hair-makeup'),
      nails: workService.getCategoryCount('nails'),
      design: workService.getCategoryCount('design'),
    };
  }, []);

  const activeCat = externalCategory || selectedCategory;

  const handleCategoryChange = (cat: WorkCategory) => {
    setSelectedCategory(cat);
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
  };

  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-medium block mb-3">
          Curated Portfolio
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#1a1c1a] font-medium tracking-tight">
          Featured Work
        </h2>
        <p className="mt-4 text-[#484740] font-body text-sm sm:text-base leading-relaxed">
          A showcase of professional hair and makeup styling, custom nail services, and creative graphic design projects.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-2">
        <CategoryFilter
          selectedCategory={activeCat}
          onSelectCategory={handleCategoryChange}
          itemCounts={itemCounts}
        />

        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Search projects, clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-b border-[#c5b3a6]/60 px-3 py-2 text-xs text-[#1a1c1a] placeholder-[#797770] focus:outline-none focus:border-[#1a1c1a] transition-colors"
          />
        </div>
      </div>

      <PortfolioGrid
        projects={filteredProjects}
        onSelectProject={openModal}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
        onBookInquiry={onBookProject}
      />
    </section>
  );
}
