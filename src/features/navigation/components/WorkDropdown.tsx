'use client';

import { SubMenuItem } from '../types/navigation.types';

interface WorkDropdownProps {
  items: SubMenuItem[];
  isOpen: boolean;
  onItemClick: (categoryId?: string) => void;
}

export function WorkDropdown({ items, isOpen, onItemClick }: WorkDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-[#faf9f6] border border-[#c5b3a6]/30 shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onItemClick(item.categoryId);
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="block px-5 py-2.5 text-xs uppercase tracking-widest text-[#484740] hover:bg-[#f4f3f1] hover:text-[#1a1c1a] transition-colors"
            >
              <div className="font-medium">{item.title}</div>
              {item.description && (
                <div className="text-[10px] text-[#797770] normal-case tracking-normal mt-0.5 font-normal">
                  {item.description}
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

