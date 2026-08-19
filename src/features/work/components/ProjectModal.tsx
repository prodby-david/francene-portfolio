'use client';

import { X, Check } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../types/work.types';
import { ProjectCompare } from './ProjectCompare';

interface ProjectModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookInquiry?: (projectTitle: string) => void;
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
  onBookInquiry,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#1a1c1a]/70 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#faf9f6] border border-[#c5b3a6]/40 shadow-2xl my-8 overflow-hidden"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#c5b3a6]/30">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#6a5c51] font-medium block">
                  {project.categoryLabel} &bull; {project.year}
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#1a1c1a] font-medium">
                  {project.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="p-2.5 text-[#484740] hover:text-[#1a1c1a] hover:bg-[#f4f3f1] transition-colors"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            <div className="p-6 sm:p-10 space-y-10">
              {project.compare ? (
                <ProjectCompare compare={project.compare} />
              ) : (
                <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] overflow-hidden bg-[#f7f3f0] border border-[#c5b3a6]/20">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.18em] text-[#6a5c51] font-medium mb-3">
                      Project Concept &amp; Overview
                    </h3>
                    <p className="text-base text-[#484740] leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-sm text-[#484740] leading-relaxed mt-3">
                      {project.editorialDetails.concept}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.18em] text-[#6a5c51] font-medium mb-3">
                      Techniques &amp; Process
                    </h3>
                    <ul className="space-y-2.5">
                      {project.editorialDetails.techniques.map((tech) => (
                        <li key={tech} className="flex items-start gap-3 text-sm text-[#1a1c1a]">
                          <span className="text-[#6a5c51] mt-1 font-mono text-xs">&mdash;</span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-4 bg-[#f7f3f0]/70 p-6 border border-[#c5b3a6]/30 space-y-6">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-[#797770]">
                      Client / Project
                    </div>
                    <div className="text-sm font-medium text-[#1a1c1a] mt-1">
                      {project.client}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-[#797770]">
                      Service Role
                    </div>
                    <div className="text-sm font-medium text-[#1a1c1a] mt-1">
                      {project.role}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-[#797770]">
                      Deliverables
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {project.editorialDetails.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[#484740]">
                          <Check className="w-3 h-3 text-[#6a5c51]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#c5b3a6]/30">
                    <button
                      onClick={() => {
                        onClose();
                        if (onBookInquiry) {
                          onBookInquiry(project.title);
                        } else {
                          const contactSection = document.querySelector('#contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="w-full py-3.5 bg-[#2c2c2c] text-[#faf9f6] text-xs uppercase tracking-widest hover:bg-[#1a1c1a] shadow-sm hover:shadow transition-all text-center block font-medium"
                    >
                      Book Similar Service
                    </button>
                  </div>
                </div>
              </div>

              {project.galleryImages.length > 1 && (
                <div className="space-y-4 pt-6 border-t border-[#c5b3a6]/20">
                  <h3 className="text-xs uppercase tracking-[0.18em] text-[#6a5c51] font-medium">
                    Additional Project Photos
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.galleryImages.map((img, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-[#f7f3f0] border border-[#c5b3a6]/20">
                          <Image
                            src={img.url}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        {img.caption && (
                          <p className="text-[12px] text-[#797770] italic">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


