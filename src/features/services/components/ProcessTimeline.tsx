'use client';

import { motion } from 'motion/react';

export function ProcessTimeline() {
  const steps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description:
        'We discuss your vision, event dates, style preferences, or visual branding goals to ensure we are aligned.',
    },
    {
      step: '02',
      title: 'Planning & Design',
      description:
        'Skin prep plans, nail art sketches, or brand color palette and logo concepts are created and refined.',
    },
    {
      step: '03',
      title: 'Service & Execution',
      description:
        'Professional on-site makeup application, detailed nail styling, or finalized graphic design files.',
    },
    {
      step: '04',
      title: 'Final Delivery & Care',
      description:
        'Delivery of all print and digital files, touch-up guidance for events, and home care instructions.',
    },
  ];

  return (
    <div className="mt-24 pt-16 border-t border-[#c5b3a6]/20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-medium block mb-2">
          How We Work
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl text-[#1a1c1a] font-medium">
          Simple &amp; Clear Process
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#faf9f6] p-6 sm:p-8 border border-[#c5b3a6]/25 ambient-shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="font-editorial text-3xl text-[#6a5c51] font-medium mb-4">
                {item.step}
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1a1c1a] mb-3">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#484740] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


