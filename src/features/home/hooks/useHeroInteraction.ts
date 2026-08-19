'use client';

import { useState } from 'react';

export function useHeroInteraction() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToPortfolio = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    isHovered,
    setIsHovered,
    scrollToPortfolio,
  };
}
