'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { HERO_DATA } from '../constants/heroData';
import { useHeroInteraction } from '../hooks/useHeroInteraction';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const { isHovered, setIsHovered, scrollToPortfolio } = useHeroInteraction();

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      scrollToPortfolio();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 pt-20 overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 select-none"
      >
        <Image
          src={HERO_DATA.backgroundImage}
          alt={HERO_DATA.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 transition-transform duration-1000 ease-out scale-100 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6]/40 via-[#faf9f6]/20 to-[#faf9f6]" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto py-16 sm:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.08] text-[#1a1c1a] mb-6 sm:mb-8 tracking-tight font-medium"
        >
          {HERO_DATA.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base sm:text-lg md:text-[18px] leading-[1.65] text-[#484740] max-w-2xl mx-auto mb-10 sm:mb-12 font-normal"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <a
            href={HERO_DATA.ctaHref}
            onClick={handleCtaClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`inline-block bg-[#2c2c2c] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] py-4 transition-all duration-300 ${
              isHovered ? 'px-11 bg-[#1a1c1a] shadow-md' : 'px-8'
            }`}
          >
            {HERO_DATA.ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

