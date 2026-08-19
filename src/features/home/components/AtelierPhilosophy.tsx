'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { ATELIER_PILLARS, ATELIER_STATS, PRESS_MENTIONS } from '../constants/atelierData';

export function AtelierPhilosophy() {
  return (
    <section id="atelier" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto border-t border-[#c5b3a6]/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-medium block mb-4">
            About the Studio
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1a1c1a] leading-tight font-medium">
            Where beauty meets thoughtful design.
          </h2>
          <p className="mt-6 text-[#484740] font-body text-base leading-relaxed">
            FRANCENE brings together professional hair and makeup artistry, custom nail styling, and digital templates under one creative roof. Every makeup look, nail service, and digital asset is crafted with precision, care, and attention to detail.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-[#c5b3a6]/20">
            {ATELIER_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-editorial text-3xl sm:text-4xl text-[#1a1c1a] font-medium">
                  {stat.value}
                </div>
                <div className="text-xs text-[#797770] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-7 space-y-6">
          {ATELIER_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#f7f3f0]/60 p-8 border border-[#c5b3a6]/30 hover-lift"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-editorial text-xl sm:text-2xl text-[#1a1c1a] font-medium">
                  {pillar.title}
                </h3>
                <span className="font-editorial text-sm text-[#6a5c51]">
                  {pillar.number}
                </span>
              </div>
              <p className="text-[#484740] text-sm sm:text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pt-20 mt-20 border-t border-[#c5b3a6]/25 w-full"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold mb-3">
              <Star className="w-4 h-4 text-[#6a5c51]" />
              <span>Client Words &amp; Recognition</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#1a1c1a] font-medium">
              Trusted by Brides, Clients &amp; Brands
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#484740] max-w-md">
            Read firsthand experiences from bridal bookings, nail clients, and brand collaborations across the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRESS_MENTIONS.map((mention, idx) => (
            <motion.div
              key={mention.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#ffffff] p-8 border border-[#c5b3a6]/30 ambient-shadow-sm flex flex-col justify-between hover-lift relative"
            >
              <div>
                <Quote className="w-7 h-7 text-[#6a5c51]/30 mb-4" />
                <p className="font-body text-sm sm:text-base text-[#1a1c1a] italic leading-relaxed mb-6">
                  &ldquo;{mention.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#c5b3a6]/20 flex items-center justify-between">
                <span className="font-editorial text-base font-semibold text-[#1a1c1a]">
                  {mention.name}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#6a5c51]">
                  {mention.issue}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
