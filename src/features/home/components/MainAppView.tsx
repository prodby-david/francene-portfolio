'use client';

import { useState } from 'react';
import { TopNavBar } from '@/features/navigation/components/TopNavBar';
import { HeroSection } from '@/features/home/components/HeroSection';
import { AtelierPhilosophy } from '@/features/home/components/AtelierPhilosophy';
import { WorkSection } from '@/features/work/components/WorkSection';
import { ServicesSection } from '@/features/services/components/ServicesSection';
import { CreatorModelSection } from '@/features/creator/components/CreatorModelSection';
import { ContactSection } from '@/features/contact/components/ContactSection';
import { Footer } from '@/features/footer/components/Footer';
import { WorkCategory } from '@/features/work/types/work.types';

export function MainAppView() {
  const [selectedWorkCategory, setSelectedWorkCategory] = useState<WorkCategory>('all');
  const [bookingServiceName, setBookingServiceName] = useState<string | undefined>(undefined);
  const [bookingEstimatedCost, setBookingEstimatedCost] = useState<number | undefined>(undefined);

  const handleSelectNavCategory = (categoryId?: string) => {
    if (categoryId) {
      setSelectedWorkCategory(categoryId as WorkCategory);
    }
  };

  const handleServiceSelectForBooking = (serviceTitle: string, estimatedCost?: number) => {
    setBookingServiceName(serviceTitle);
    setBookingEstimatedCost(estimatedCost);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectSelectForBooking = (projectTitle: string) => {
    setBookingServiceName(`Service Request: ${projectTitle}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-[#1a1c1a]">
      <TopNavBar onSelectCategory={handleSelectNavCategory} />

      <main className="flex-1">
        <HeroSection
          onExploreClick={() => {
            const workSection = document.querySelector('#work');
            if (workSection) {
              workSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        <AtelierPhilosophy />

        <ServicesSection onSelectServiceToBook={handleServiceSelectForBooking} />

        <CreatorModelSection onBookCollab={handleServiceSelectForBooking} />

        <WorkSection
          externalCategory={selectedWorkCategory}
          onSelectCategory={(cat) => setSelectedWorkCategory(cat)}
          onBookProject={handleProjectSelectForBooking}
        />

        <ContactSection
          prefilledServiceName={bookingServiceName}
          prefilledEstimatedCost={bookingEstimatedCost}
        />
      </main>

      <Footer />
    </div>
  );
}

