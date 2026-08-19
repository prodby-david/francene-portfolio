'use client';

import { Menu, ChevronDown } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { NAV_ITEMS, BRAND_NAME, BOOK_NOW_LINK } from '../constants/navData';
import { WorkDropdown } from './WorkDropdown';
import { MobileMenu } from './MobileMenu';

interface TopNavBarProps {
  onSelectCategory?: (categoryId?: string) => void;
}

export function TopNavBar({ onSelectCategory }: TopNavBarProps) {
  const {
    isScrolled,
    isMobileMenuOpen,
    isWorkDropdownOpen,
    toggleMobileMenu,
    closeMobileMenu,
    setIsWorkDropdownOpen,
  } = useNavigation();

  const handleCategorySelect = (categoryId?: string) => {
    setIsWorkDropdownOpen(false);
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf9f6]/95 backdrop-blur-md shadow-sm border-b border-[#c5b3a6]/30'
            : 'bg-[#faf9f6]/80 backdrop-blur-sm border-b border-[#c5b3a6]/20'
        }`}
      >
        <nav className="flex justify-between items-center h-20 px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto">
          <a
            href="#"
            className="font-editorial text-2xl tracking-[0.2em] text-[#1a1c1a] hover:opacity-75 transition-opacity duration-300"
          >
            {BRAND_NAME}
          </a>

          <ul className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => {
              if (item.subItems) {
                return (
                  <li
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setIsWorkDropdownOpen(true)}
                    onMouseLeave={() => setIsWorkDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                      className="flex items-center gap-1.5 text-[#484740] text-xs font-medium uppercase tracking-[0.18em] hover:text-[#1a1c1a] transition-colors duration-300"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200" />
                    </button>
                    <WorkDropdown
                      items={item.subItems}
                      isOpen={isWorkDropdownOpen}
                      onItemClick={handleCategorySelect}
                    />
                  </li>
                );
              }

              return (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-[#484740] text-xs font-medium uppercase tracking-[0.18em] hover:text-[#1a1c1a] transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center">
            <a
              href={BOOK_NOW_LINK.href}
              className="bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] px-5 py-2.5 transition-all duration-300 shadow-sm hover:shadow"
            >
              {BOOK_NOW_LINK.title}
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            aria-label="Open navigation menu"
            className="md:hidden p-2 text-[#484740] hover:text-[#1a1c1a] transition-colors"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        items={NAV_ITEMS}
        onSelectCategory={handleCategorySelect}
      />
    </>
  );
}
