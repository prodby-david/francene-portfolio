'use client';

import { useState, useEffect, useCallback } from 'react';

export function useNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleWorkDropdown = useCallback(() => {
    setIsWorkDropdownOpen((prev) => !prev);
  }, []);

  const closeWorkDropdown = useCallback(() => {
    setIsWorkDropdownOpen(false);
  }, []);

  return {
    isScrolled,
    isMobileMenuOpen,
    isWorkDropdownOpen,
    activeSection,
    setActiveSection,
    toggleMobileMenu,
    closeMobileMenu,
    toggleWorkDropdown,
    closeWorkDropdown,
    setIsWorkDropdownOpen,
  };
}
