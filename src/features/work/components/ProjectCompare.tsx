'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ProjectCompareItem } from '../types/work.types';

interface ProjectCompareProps {
  compare: ProjectCompareItem;
}

export function ProjectCompare({ compare }: ProjectCompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#797770]">
        <span>{compare.beforeLabel}</span>
        <span>Drag to compare</span>
        <span>{compare.afterLabel}</span>
      </div>

      <div
        className="relative w-full h-[360px] sm:h-[440px] overflow-hidden select-none cursor-ew-resize border border-[#c5b3a6]/30 bg-[#f7f3f0]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <div className="absolute inset-0">
          <Image
            src={compare.afterUrl}
            alt={compare.afterLabel}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[300px] sm:min-w-[700px]">
            <Image
              src={compare.beforeUrl}
              alt={compare.beforeLabel}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#ffffff] shadow-lg pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#2c2c2c] text-[#faf9f6] flex items-center justify-center text-[10px] uppercase font-bold tracking-widest shadow-md">
            &harr;
          </div>
        </div>
      </div>
    </div>
  );
}
