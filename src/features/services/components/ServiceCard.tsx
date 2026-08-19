'use client';

import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ServicePackage } from '../types/services.types';

interface ServiceCardProps {
  service: ServicePackage;
  onSelectForEstimate: (serviceId: string) => void;
  onDirectBook: (serviceTitle: string) => void;
}

export function ServiceCard({
  service,
  onSelectForEstimate,
  onDirectBook,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#faf9f6] border border-[#c5b3a6]/30 p-8 sm:p-10 flex flex-col justify-between hover-lift ambient-shadow-sm transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-medium mb-3">
          <span>{service.categoryLabel}</span>
          <span className="font-mono text-[#1a1c1a]">From {service.startingPrice}</span>
        </div>

        <h3 className="font-editorial text-2xl sm:text-3xl text-[#1a1c1a] font-medium mb-3">
          {service.title}
        </h3>

        <p className="text-xs uppercase tracking-wider text-[#797770] mb-4">
          {service.subtitle}
        </p>

        <p className="text-sm text-[#484740] leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="pt-6 border-t border-[#c5b3a6]/20">
          <div className="text-xs uppercase tracking-widest text-[#1a1c1a] font-semibold mb-4">
            What&apos;s Included
          </div>
          <ul className="space-y-2.5">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#484740]">
                <Check className="w-4 h-4 text-[#6a5c51] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8 mt-8 border-t border-[#c5b3a6]/20 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => onSelectForEstimate(service.id)}
          className="flex-1 py-3 px-4 bg-[#f7f3f0] hover:bg-[#efeeeb] text-[#1a1c1a] text-xs uppercase tracking-widest border border-[#c5b3a6]/30 transition-colors text-center font-medium"
        >
          Customize Package
        </button>
        <button
          onClick={() => onDirectBook(service.title)}
          className="py-3 px-6 bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2 font-medium"
        >
          <span>Book Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}


