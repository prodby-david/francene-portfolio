'use client';

import { useState } from 'react';
import { SERVICE_PACKAGES } from '../constants/servicePackages';
import { HairMakeupSection } from './HairMakeupSection';
import { NailServicesSection } from './NailServicesSection';
import { GraphicDesignSection } from './GraphicDesignSection';
import { CustomPackageCalculator } from './CustomPackageCalculator';
import { ProcessTimeline } from './ProcessTimeline';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceTitle: string, estimatedCost?: number) => void;
}

export function ServicesSection({ onSelectServiceToBook }: ServicesSectionProps) {
  const [selectedEstimatorServiceId, setSelectedEstimatorServiceId] = useState<string>(
    SERVICE_PACKAGES[0].id
  );

  const handleSelectForEstimate = (serviceId: string) => {
    setSelectedEstimatorServiceId(serviceId);
    const calcElement = document.querySelector('#atelier-calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectBook = (serviceTitle: string, estimatedCost?: number) => {
    onSelectServiceToBook(serviceTitle, estimatedCost);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto">
      <div className="pt-24 sm:pt-32 pb-12 text-center max-w-2xl mx-auto border-t border-[#c5b3a6]/20">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-medium block mb-3">
          Disciplines &amp; Offerings
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#1a1c1a] font-medium tracking-tight">
          Services &amp; Pricing
        </h2>
        <p className="mt-4 text-[#484740] font-body text-sm sm:text-base leading-relaxed">
          Comprehensive offerings tailored for hair and makeup styling, custom nail services, and creative brand design projects.
        </p>
      </div>

      <HairMakeupSection
        onBookService={handleDirectBook}
        onCustomize={handleSelectForEstimate}
      />

      <NailServicesSection
        onBookService={handleDirectBook}
        onCustomize={handleSelectForEstimate}
      />

      <GraphicDesignSection
        onBookService={handleDirectBook}
        onCustomize={handleSelectForEstimate}
      />

      <div id="atelier-calculator" className="py-20 border-t border-[#c5b3a6]/20">
        <CustomPackageCalculator
          selectedServiceId={selectedEstimatorServiceId}
          onProceedToBooking={onSelectServiceToBook}
        />
      </div>

      <ProcessTimeline />
    </div>
  );
}

