'use client';

import Image from 'next/image';
import { Camera, Video, Check, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import {
  CREATOR_METRICS,
  MODEL_PORTFOLIO_ITEMS,
  CREATOR_COLLAB_FORMATS,
  CREATOR_CAPABILITIES,
} from '../constants/creatorData';

interface CreatorModelSectionProps {
  onBookCollab: (serviceTitle: string, estimatedCost?: number) => void;
}

export function CreatorModelSection({ onBookCollab }: CreatorModelSectionProps) {
  return (
    <section id="creator-model" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-20 max-w-[1440px] mx-auto border-t border-[#c5b3a6]/20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold block mb-3">
          On-Camera Presence &bull; Creator Portfolio
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#1a1c1a] font-medium tracking-tight">
          UGC Creator &amp; Model
        </h2>
        <p className="mt-4 text-[#484740] font-body text-sm sm:text-base leading-relaxed">
          Authentic on-camera beauty modeling, product demonstrations, and high-converting UGC reels for modern beauty, skincare, and lifestyle brands.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {CREATOR_METRICS.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 bg-[#f7f3f0] border border-[#c5b3a6]/30 text-center"
          >
            <div className="font-editorial text-3xl sm:text-4xl text-[#1a1c1a] font-medium mb-1">
              {metric.value}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1a1c1a] mb-1">
              {metric.label}
            </div>
            <div className="text-[11px] text-[#797770] leading-snug">
              {metric.sublabel}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-[#6a5c51] font-semibold block mb-1">
              Featured Work
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#1a1c1a] font-medium">
              Past Works &amp; Modeling Showcase
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#797770]">
            <Star className="w-4 h-4 text-[#6a5c51]" />
            <span>Brand Collaborations</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODEL_PORTFOLIO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-[#faf9f6] border border-[#c5b3a6]/30 overflow-hidden flex flex-col hover-lift ambient-shadow-sm"
            >
              <div className="relative aspect-[9/14] w-full overflow-hidden bg-[#f7f3f0]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1a]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {item.videoBadge && (
                  <div className="absolute top-3 left-3 bg-[#faf9f6]/90 backdrop-blur-sm text-[#1a1c1a] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 border border-[#c5b3a6]/30 flex items-center gap-1.5">
                    <Video className="w-3 h-3 text-[#6a5c51]" />
                    <span>{item.videoBadge}</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-[#faf9f6]">
                  <span className="text-[10px] uppercase tracking-wider text-[#faf9f6]/80 block">
                    {item.brandOrClient} &bull; {item.year}
                  </span>
                  <h4 className="font-editorial text-lg font-medium leading-snug mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#484740] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pt-12 border-t border-[#c5b3a6]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold mb-2">
              <span>Collaboration Menu</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#1a1c1a] font-medium">
              Deliverables &amp; Formats
            </h3>
            <p className="text-xs sm:text-sm text-[#484740] mt-2">
              Tailored video deliverables, raw footage, and on-camera model booking for beauty &amp; lifestyle campaigns.
            </p>
          </div>

          <button
            onClick={() => onBookCollab('UGC & Modeling Collaboration')}
            className="py-3 px-6 bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] transition-all shadow-sm shrink-0 flex items-center gap-2"
          >
            <span>Inquire for Collaboration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CREATOR_COLLAB_FORMATS.map((format, idx) => (
            <motion.div
              key={format.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-[#f7f3f0]/80 border border-[#c5b3a6]/30 p-6 sm:p-8 flex flex-col justify-between hover-lift ambient-shadow-sm"
            >
              <div>
                <div className="mb-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#6a5c51] font-semibold block mb-1">
                    {format.badge}
                  </span>
                  <h4 className="font-editorial text-xl text-[#1a1c1a] font-medium leading-snug">
                    {format.name}
                  </h4>
                  <p className="text-xs text-[#484740] mt-2 leading-relaxed">
                    {format.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#c5b3a6]/20">
                  {format.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-[#484740]">
                      <Check className="w-3.5 h-3.5 text-[#6a5c51] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#c5b3a6]/20">
                <button
                  onClick={() => onBookCollab(`UGC & Model: ${format.name}`)}
                  className="w-full py-3 bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Inquire for Format</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 bg-[#faf9f6] border border-[#c5b3a6]/30">
          <span className="text-xs uppercase tracking-[0.18em] text-[#6a5c51] font-semibold block mb-3">
            Available Scope &amp; Add-On Capabilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CREATOR_CAPABILITIES.map((cap) => (
              <div key={cap.id} className="p-4 bg-[#f7f3f0]/60 border border-[#c5b3a6]/20 flex flex-col justify-between gap-1">
                <span className="text-xs font-semibold text-[#1a1c1a]">{cap.label}</span>
                <span className="text-[11px] text-[#484740] leading-snug">{cap.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
