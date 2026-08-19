'use client';

import { Check, Plus, Minus, Send } from 'lucide-react';
import { useServiceCalculator } from '../hooks/useServiceCalculator';
import { SERVICE_PACKAGES } from '../constants/servicePackages';

interface CustomPackageCalculatorProps {
  selectedServiceId?: string;
  onProceedToBooking: (serviceSummary: string, estimatedCost: number) => void;
}

export function CustomPackageCalculator({
  selectedServiceId,
  onProceedToBooking,
}: CustomPackageCalculatorProps) {
  const {
    selectedPackageId,
    currentPackage,
    selectedTierIndex,
    selectedAddOns,
    calculation,
    selectPackage,
    selectTier,
    toggleAddOn,
  } = useServiceCalculator(selectedServiceId || SERVICE_PACKAGES[0].id);

  const handleBookingTransfer = () => {
    onProceedToBooking(calculation.summaryDescription, calculation.estimatedTotal);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#ffffff] border border-[#c5b3a6]/30 ambient-shadow p-6 sm:p-10 lg:p-12">
      <div className="max-w-2xl mb-8">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-medium block mb-2">
          Service Estimator
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl text-[#1a1c1a] font-medium">
          Estimate Your Service Package
        </h3>
        <p className="text-xs sm:text-sm text-[#484740] mt-2">
          Select your service category, session tier, and optional add-ons for an instant estimate.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
        {SERVICE_PACKAGES.map((pkg) => {
          const isActive = pkg.id === selectedPackageId;
          return (
            <button
              key={pkg.id}
              onClick={() => selectPackage(pkg.id)}
              className={`p-3 sm:p-4 text-left transition-all border ${
                isActive
                  ? 'bg-[#2c2c2c] text-[#faf9f6] border-[#2c2c2c]'
                  : 'bg-[#faf9f6] text-[#484740] border-[#c5b3a6]/30 hover:border-[#1a1c1a]'
              }`}
            >
              <div className="text-[10px] uppercase tracking-widest opacity-80 mb-1">
                {pkg.categoryLabel}
              </div>
              <div className="text-xs sm:text-sm font-medium line-clamp-1">
                {pkg.title}
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-[#1a1c1a] font-semibold block mb-3">
              1. Select Package &amp; Scope
            </label>
            <div className="space-y-3">
              {currentPackage.tiers.map((tier, idx) => {
                const isSelected = selectedTierIndex === idx;
                return (
                  <div
                    key={tier.name}
                    onClick={() => selectTier(idx)}
                    className={`p-5 cursor-pointer border transition-all ${
                      isSelected
                        ? 'bg-[#f7f3f0] border-[#1a1c1a] shadow-sm'
                        : 'bg-[#faf9f6] border-[#c5b3a6]/30 hover:border-[#c5b3a6]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-[#1a1c1a] bg-[#1a1c1a]'
                                : 'border-[#797770]'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#faf9f6]" />}
                          </span>
                          <span className="text-sm font-semibold text-[#1a1c1a]">
                            {tier.name}
                          </span>
                        </div>
                        <span className="text-xs text-[#797770] ml-5 block mt-0.5">
                          {tier.duration}
                        </span>
                      </div>
                      <span className="font-mono text-sm font-medium text-[#1a1c1a] shrink-0">
                        {tier.price}
                      </span>
                    </div>

                    <ul className="mt-4 pl-5 space-y-1.5 border-t border-[#c5b3a6]/20 pt-3">
                      {tier.features.map((feat) => (
                        <li key={feat} className="text-xs text-[#484740] flex items-center gap-2">
                          <Check className="w-3 h-3 text-[#6a5c51]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-[#1a1c1a] font-semibold block mb-3">
              2. Optional Add-Ons &amp; Enhancements
            </label>
            <div className="space-y-2.5">
              {currentPackage.addOns.map((addOn) => {
                const isChecked = selectedAddOns.includes(addOn.id);
                return (
                  <div
                    key={addOn.id}
                    onClick={() => toggleAddOn(addOn.id)}
                    className={`flex items-center justify-between p-4 cursor-pointer border text-xs sm:text-sm transition-all ${
                      isChecked
                        ? 'bg-[#f7f3f0] border-[#1a1c1a]'
                        : 'bg-[#faf9f6] border-[#c5b3a6]/30 hover:border-[#c5b3a6]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-4 h-4 flex items-center justify-center border ${
                          isChecked
                            ? 'bg-[#1a1c1a] border-[#1a1c1a] text-[#faf9f6]'
                            : 'border-[#797770] bg-transparent'
                        }`}
                      >
                        {isChecked ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3 text-[#797770]" />}
                      </span>
                      <span className="text-[#1a1c1a]">{addOn.label}</span>
                    </div>
                    <span className="font-mono text-xs text-[#6a5c51] font-medium">
                      +{addOn.priceFormatted}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#f7f3f0] p-6 sm:p-8 border border-[#c5b3a6]/40 sticky top-28">
          <div className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold mb-4">
            Estimate Summary
          </div>

          <div className="space-y-3 pb-6 border-b border-[#c5b3a6]/30 text-xs sm:text-sm">
            <div className="flex justify-between text-[#484740]">
              <span>Base Package</span>
              <span className="font-mono text-[#1a1c1a]">₱{calculation.baseTotal.toLocaleString()}</span>
            </div>
            {calculation.addOnsTotal > 0 && (
              <div className="flex justify-between text-[#484740]">
                <span>Selected Add-Ons ({selectedAddOns.length})</span>
                <span className="font-mono text-[#1a1c1a]">+₱{calculation.addOnsTotal.toLocaleString()}</span>
              </div>
            )}
            <div className="text-[11px] text-[#797770] pt-2">
              Includes initial consultation, prep, and high-quality materials.
            </div>
          </div>

          <div className="py-6 border-b border-[#c5b3a6]/30">
            <div className="text-xs uppercase tracking-widest text-[#797770]">
              Estimated Investment Total
            </div>
            <div className="font-editorial text-3xl sm:text-4xl text-[#1a1c1a] font-medium mt-1">
              ₱{calculation.estimatedTotal.toLocaleString()}{' '}
              <span className="text-xs font-sans text-[#6a5c51] uppercase font-normal tracking-widest">
                PHP
              </span>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={handleBookingTransfer}
              className="w-full py-4 bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Transfer Quote to Booking Form</span>
              <Send className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-center text-[#797770]">
              No advance payment required. Quotes are subject to date availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

