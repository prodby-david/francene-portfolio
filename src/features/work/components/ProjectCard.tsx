'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types/work.types';

interface ProjectCardProps {
  project: PortfolioItem;
  onSelect: (project: PortfolioItem) => void;
  index: number;
}

export function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  const isLarge = index === 0 || index === 3;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className={`group cursor-pointer bg-[#faf9f6] border border-[#c5b3a6]/20 ambient-shadow hover-lift flex flex-col justify-between overflow-hidden transition-all duration-300 ${
        isLarge ? 'md:col-span-2' : 'col-span-1'
      }`}
    >
      <div
        className={`relative w-full overflow-hidden bg-[#f7f3f0] img-zoom ${
          isLarge ? 'h-[260px] sm:h-[380px] md:h-[440px]' : 'h-[220px] sm:h-[280px] md:h-[340px]'
        }`}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
          <span className="text-[#faf9f6] text-xs uppercase tracking-widest flex items-center gap-1.5 font-medium">
            View Project Details <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-[#ffffff]">
        <div>
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#6a5c51] font-medium mb-3">
            <span>{project.categoryLabel}</span>
            <span className="font-mono text-[#797770]">{project.year}</span>
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl text-[#1a1c1a] font-medium mb-2 group-hover:text-[#6a5c51] transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#484740] line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="pt-6 mt-6 border-t border-[#c5b3a6]/20 flex items-center justify-between text-xs">
          <span className="text-[#797770] uppercase tracking-wider">
            {project.client}
          </span>
          <span className="text-[#1a1c1a] font-medium uppercase tracking-widest group-hover:underline">
            View Project &rarr;
          </span>
        </div>
      </div>
    </motion.article>
  );
}


