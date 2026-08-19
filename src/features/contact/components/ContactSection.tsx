'use client';

import { StationeryBookingForm } from './StationeryBookingForm';
import { AtelierDirectInfo } from './AtelierDirectInfo';

interface ContactSectionProps {
  prefilledServiceName?: string;
  prefilledEstimatedCost?: number;
}

export function ContactSection({
  prefilledServiceName,
  prefilledEstimatedCost,
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto border-t border-[#c5b3a6]/20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-medium block mb-3">
          Appointments &amp; Inquiries
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#1a1c1a] font-medium tracking-tight">
          Get in Touch
        </h2>
        <p className="mt-4 text-[#484740] font-body text-sm sm:text-base leading-relaxed">
          Whether planning your wedding makeup, scheduling a custom nail session, or launching a new brand identity, let us know how we can help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <StationeryBookingForm
            key={`${prefilledServiceName}-${prefilledEstimatedCost}`}
            initialServiceName={prefilledServiceName}
            initialEstimatedCost={prefilledEstimatedCost}
          />
        </div>

        <div className="lg:col-span-4">
          <AtelierDirectInfo />
        </div>
      </div>
    </section>
  );
}
