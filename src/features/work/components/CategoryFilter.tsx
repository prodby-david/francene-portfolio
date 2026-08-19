'use client';

import { WORK_CATEGORIES } from '../constants/workCategories';
import { WorkCategory } from '../types/work.types';

interface CategoryFilterProps {
  selectedCategory: WorkCategory;
  onSelectCategory: (category: WorkCategory) => void;
  itemCounts: Record<WorkCategory, number>;
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  itemCounts,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 my-8">
      {WORK_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const count = itemCounts[cat.id] ?? 0;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 sm:px-6 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium ${
              isSelected
                ? 'bg-[#2c2c2c] text-[#faf9f6] shadow-sm'
                : 'bg-[#faf9f6] text-[#484740] border border-[#c5b3a6]/40 hover:border-[#1a1c1a] hover:text-[#1a1c1a]'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`ml-2 text-[10px] ${isSelected ? 'text-[#c5b3a6]' : 'text-[#797770]'}`}>
              ({count})
            </span>
          </button>
        );
      })}
    </div>
  );
}
