'use client';

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "max-w-4xl",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
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
            className={`relative w-full ${maxWidth} bg-[#faf9f6] border border-[#c5b3a6]/40 shadow-2xl my-8 overflow-hidden`}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#c5b3a6]/30">
              <div>
                {subtitle && (
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#6a5c51] font-medium block">
                    {subtitle}
                  </span>
                )}
                {title && (
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#1a1c1a] font-medium">
                    {title}
                  </h2>
                )}
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2.5 text-[#484740] hover:text-[#1a1c1a] hover:bg-[#f4f3f1] transition-colors"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            <div className="p-6 sm:p-10">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

