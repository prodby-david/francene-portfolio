'use client';

import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICE_PACKAGES } from '../constants/servicePackages';

interface NailServicesSectionProps {
  onBookService: (serviceTitle: string, estimatedCost?: number) => void;
  onCustomize: (serviceId: string) => void;
}

export function NailServicesSection({ onBookService, onCustomize }: NailServicesSectionProps) {
  const pkg = SERVICE_PACKAGES.find((p) => p.id === 'nail-services');
  if (!pkg) return null;

  return (
    <section id="nail-services" className="py-20 border-t border-[#c5b3a6]/20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Service 02 &bull; Hand &amp; Nail Artistry</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1a1c1a] font-medium">
              Custom Gel Nails &amp; Extensions
            </h3>
            <p className="text-sm sm:text-base text-[#484740] mt-4 leading-relaxed">
              Clean, durable structured gel overlays and soft gel extensions designed to protect natural nail health while providing refined nail art, chrome finishes, and 3D details.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onCustomize(pkg.id)}
              className="py-3 px-5 bg-[#f7f3f0] hover:bg-[#efeeeb] text-[#1a1c1a] text-xs font-medium uppercase tracking-[0.18em] border border-[#c5b3a6]/30 transition-colors"
            >
              Customize Package
            </button>
            <button
              onClick={() => onBookService(pkg.title, pkg.basePriceNumeric)}
              className="py-3 px-6 bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] transition-all shadow-sm hover:shadow flex items-center gap-2"
            >
              <span>Book Nail Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 bg-[#f7f3f0]/70 p-8 border border-[#c5b3a6]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-[#6a5c51] font-semibold block mb-3">
                Included in Every Session
              </span>
              <h4 className="font-editorial text-2xl text-[#1a1c1a] font-medium mb-6">
                Nail Care Standard
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
                className="bg-[#faf9f6] border border-[#c5b3a6]/30 p-8 flex flex-col justify-between hover-lift ambient-shadow-sm"
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
                    <span>Reserve Package</span>
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
