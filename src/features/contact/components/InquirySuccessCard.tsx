'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { InquirySubmissionReceipt } from '../types/contact.types';

interface InquirySuccessCardProps {
  receipt: InquirySubmissionReceipt;
  onReset: () => void;
}

export function InquirySuccessCard({ receipt, onReset }: InquirySuccessCardProps) {
  return (
    <div className="bg-[#ffffff] border border-[#c5b3a6]/40 p-8 sm:p-12 ambient-shadow max-w-xl mx-auto text-center animate-in fade-in zoom-in-95 duration-300">
      <div className="w-12 h-12 rounded-full bg-[#f7f3f0] border border-[#c5b3a6]/40 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-6 h-6 text-[#6a5c51]" />
      </div>

      <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold block mb-2">
        Inquiry Received
      </span>
      <h3 className="font-editorial text-2xl sm:text-3xl text-[#1a1c1a] font-medium mb-3">
        Thank You, {receipt.clientName}
      </h3>
      <p className="text-xs sm:text-sm text-[#484740] leading-relaxed mb-8">
        Your inquiry has been received. We will review your details and get back to you at <span className="font-medium text-[#1a1c1a]">{receipt.clientEmail}</span> within 24 business hours.
      </p>

      <div className="bg-[#faf9f6] p-5 border border-[#c5b3a6]/25 text-left text-xs space-y-2.5 mb-8">
        <div className="flex justify-between border-b border-[#c5b3a6]/20 pb-2">
          <span className="text-[#797770] uppercase tracking-wider">Reference ID</span>
          <span className="font-mono font-medium text-[#1a1c1a]">{receipt.inquiryId}</span>
        </div>
        <div className="flex justify-between border-b border-[#c5b3a6]/20 pb-2">
          <span className="text-[#797770] uppercase tracking-wider">Service Category</span>
          <span className="text-[#1a1c1a] font-medium truncate max-w-[200px]">{receipt.serviceSelected}</span>
        </div>
        <div className="flex justify-between border-b border-[#c5b3a6]/20 pb-2">
          <span className="text-[#797770] uppercase tracking-wider">Target Date</span>
          <span className="text-[#1a1c1a]">{receipt.targetDate}</span>
        </div>
        {receipt.estimatedInvestment && (
          <div className="flex justify-between">
            <span className="text-[#797770] uppercase tracking-wider">Budget / Quote</span>
            <span className="text-[#1a1c1a] font-mono">{receipt.estimatedInvestment}</span>
          </div>
        )}
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1a1c1a] font-medium hover:text-[#6a5c51] transition-colors border-b border-[#1a1c1a] pb-1"
      >
        <span>Submit Another Inquiry</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

