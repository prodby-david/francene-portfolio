'use client';

import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { NavItem } from '../types/navigation.types';
import { BRAND_NAME } from '../constants/navData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  onSelectCategory?: (categoryId?: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  items,
  onSelectCategory,
}: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md flex flex-col md:hidden animate-in fade-in duration-200">
      <div className="flex items-center justify-between h-20 px-6 border-b border-[#c5b3a6]/30">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-editorial text-2xl tracking-widest text-[#1a1c1a]"
        >
          {BRAND_NAME}
        </a>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-[#484740] hover:text-[#1a1c1a]"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <ul className="space-y-6">
          {items.map((item) => {
            if (item.subItems) {
              return (
                <li key={item.title} className="border-b border-[#c5b3a6]/20 pb-4">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="w-full flex items-center justify-between text-base uppercase tracking-widest text-[#1a1c1a] font-medium py-2"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {servicesExpanded && (
                    <ul className="mt-3 pl-4 space-y-3">
                      {item.subItems.map((sub) => (
                        <li key={sub.title}>
                          <a
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();
                              onClose();
                              if (onSelectCategory) {
                                onSelectCategory(sub.categoryId);
                              }
                              const target = document.querySelector(sub.href);
                              if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="block text-xs uppercase tracking-widest text-[#6a5c51] hover:text-[#1a1c1a] py-1 font-medium"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item.title} className="border-b border-[#c5b3a6]/20 pb-4">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-base uppercase tracking-widest text-[#1a1c1a] font-medium py-2"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="pt-8 space-y-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              const target = document.querySelector('#contact');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="block w-full py-4 text-center text-xs uppercase tracking-widest bg-[#2c2c2c] text-[#faf9f6] hover:bg-[#1a1c1a] transition-all font-medium shadow-sm"
          >
            Book Appointment
          </a>
          <p className="text-center text-xs text-[#797770]">
            Hair &amp; makeup, nail services &amp; graphic design
          </p>
        </div>
      </nav>
    </div>
  );
}

