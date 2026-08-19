'use client';

import { useState, useCallback } from 'react';
import { PortfolioItem } from '../types/work.types';

export function useProjectModal() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((project: PortfolioItem) => {
    setSelectedProject(project);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  }, []);

  return {
    selectedProject,
    isOpen,
    openModal,
    closeModal,
  };
}
