'use client';

import { AnimatePresence, motion } from 'motion/react';
import { PortfolioItem } from '../types/work.types';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  projects: PortfolioItem[];
  onSelectProject: (project: PortfolioItem) => void;
}

export function PortfolioGrid({ projects, onSelectProject }: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20 bg-[#f7f3f0]/40 border border-[#c5b3a6]/20">
        <p className="text-sm uppercase tracking-widest text-[#797770]">
          No works found matching your filter criteria.
        </p>
      </div>
    );
  }

  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
            index={index}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

