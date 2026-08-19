'use client';

import { Check, ArrowRight, LayoutTemplate, Palette } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICE_PACKAGES } from '../constants/servicePackages';

interface DigitalServicesSectionProps {
  onBookService: (serviceTitle: string, estimatedCost?: number) => void;
  onCustomize: (serviceId: string) => void;
}

export function DigitalServicesSection({ onBookService, onCustomize }: DigitalServicesSectionProps) {
  const pkg = SERVICE_PACKAGES.find((p) => p.id === 'digital-services');
  if (!pkg) return null;

  return (
    <section id="digital-services" className="bg-[#e5d8c8] py-20 px-6 sm:px-10 lg:px-20 border-t border-[#c5b3a6]/25">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold mb-3">
              <span>Service 03 &bull; Digital &amp; Canva Templates</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1a1c1a] font-medium">
              Digital Services &amp; Templates
            </h3>
            <p className="text-sm sm:text-base text-[#484740] mt-4 leading-relaxed">
              Custom editable Canva templates, cohesive social media layout packs, client intake forms, and digital planners created to help creators and small businesses build a consistent visual presence.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onCustomize(pkg.id)}
              className="py-3 px-5 bg-[#ffffff] hover:bg-[#f7f3f0] text-[#1a1c1a] text-xs font-medium uppercase tracking-[0.18em] border border-[#c5b3a6]/30 transition-colors"
            >
              Customize Pack
            </button>
            <button
              onClick={() => onBookService(pkg.title, pkg.basePriceNumeric)}
              className="py-3 px-6 bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] transition-all shadow-sm hover:shadow flex items-center gap-2"
            >
              <span>Order Templates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-[#ffffff]/90 border border-[#c5b3a6]/30 flex items-start gap-4">
            <div className="p-3 bg-[#2c2c2c] text-[#faf9f6] shrink-0">
              <LayoutTemplate className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-editorial text-lg text-[#1a1c1a] font-medium mb-1">
                Editable Social Media Kits
              </h5>
              <p className="text-xs text-[#484740] leading-relaxed">
                Instagram post grids, carousel slide templates, story highlights, and banner designs built in Canva for easy editing.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#ffffff]/90 border border-[#c5b3a6]/30 flex items-start gap-4">
            <div className="p-3 bg-[#2c2c2c] text-[#faf9f6] shrink-0">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-editorial text-lg text-[#1a1c1a] font-medium mb-1">
                Digital Planners &amp; Client Documents
              </h5>
              <p className="text-xs text-[#484740] leading-relaxed">
                Price lists, booking forms, rate cards, and digital planners tailored for beauty salons, service providers, and influencers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 bg-[#ffffff]/90 p-8 border border-[#c5b3a6]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-[#6a5c51] font-semibold block mb-3">
                Digital Deliverables Standard
              </span>
              <h4 className="font-editorial text-2xl text-[#1a1c1a] font-medium mb-6">
                What You Receive
              </h4>
              <ul className="space-y-3.5">
                {pkg.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[#484740]">
                    <Check className="w-4 h-4 text-[#6a5c51] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-[#c5b3a6]/20">
              <div className="text-xs text-[#797770] uppercase tracking-wider">Starting Investment</div>
              <div className="font-editorial text-3xl text-[#1a1c1a] font-medium mt-1">
                {pkg.startingPrice}{' '}
                <span className="text-xs font-sans text-[#6a5c51] font-normal uppercase tracking-widest">PHP</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pkg.tiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#ffffff] border border-[#c5b3a6]/30 p-8 flex flex-col justify-between hover-lift ambient-shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <div>
                      <h5 className="font-editorial text-xl text-[#1a1c1a] font-medium">{tier.name}</h5>
                      <span className="text-xs text-[#797770] block mt-1">{tier.duration}</span>
                    </div>
                    <span className="font-mono text-base font-medium text-[#1a1c1a] shrink-0">{tier.price}</span>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-[#c5b3a6]/20">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#484740]">
                        <Check className="w-3.5 h-3.5 text-[#6a5c51] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#c5b3a6]/20">
                  <button
                    onClick={() => onBookService(`${pkg.title} (${tier.name})`, tier.priceNumeric)}
                    className="w-full py-3 bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>Order Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
