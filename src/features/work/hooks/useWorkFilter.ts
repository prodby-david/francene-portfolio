'use client';

import { useState, useMemo, useCallback } from 'react';
import { WorkCategory, PortfolioItem } from '../types/work.types';
import { workService } from '../services/workService';

export function useWorkFilter(initialCategory: WorkCategory = 'all') {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    let list = workService.getProjectsByCategory(selectedCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  const setCategory = useCallback((category: WorkCategory) => {
    setSelectedCategory(category);
  }, []);

  return {
    selectedCategory,
    setSelectedCategory: setCategory,
    searchQuery,
    setSearchQuery,
    filteredProjects,
    totalCount: filteredProjects.length,
  };
}
