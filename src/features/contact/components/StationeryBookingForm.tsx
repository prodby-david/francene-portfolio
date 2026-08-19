'use client';

import { useBookingForm } from '../hooks/useBookingForm';
import { SERVICE_SELECT_OPTIONS, BUDGET_TIER_OPTIONS } from '../constants/contactOptions';
import { InquirySuccessCard } from './InquirySuccessCard';

interface StationeryBookingFormProps {
  initialServiceName?: string;
  initialEstimatedCost?: number;
}

export function StationeryBookingForm({
  initialServiceName,
  initialEstimatedCost,
}: StationeryBookingFormProps) {
  const {
    formData,
    errors,
    isSubmitting,
    submissionReceipt,
    updateField,
    handleSubmit,
    resetForm,
  } = useBookingForm({
    serviceCategory: initialServiceName || SERVICE_SELECT_OPTIONS[0],
    estimatedBudget: initialEstimatedCost
      ? `₱${initialEstimatedCost.toLocaleString()} PHP (Calculated Estimate)`
      : BUDGET_TIER_OPTIONS[1],
  });

  if (submissionReceipt) {
    return (
      <InquirySuccessCard
        receipt={submissionReceipt}
        onReset={resetForm}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#ffffff] border border-[#c5b3a6]/30 p-8 sm:p-12 ambient-shadow space-y-8"
    >
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-[#6a5c51] font-semibold block mb-2">
          Booking Form
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl text-[#1a1c1a] font-medium">
          Send a Service Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#484740] mt-2">
          Please fill out the form below with details regarding your event, desired nail styling, or design project.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-[0.15em] text-[#1a1c1a] font-medium">
            Full Name / Client *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="e.g. Maria Santos"
            className="w-full bg-transparent border-b border-[#c5b3a6] py-2.5 text-sm text-[#1a1c1a] placeholder-[#797770]/60 focus:outline-none focus:border-[#1a1c1a] transition-colors"
          />
          {errors.fullName && (
            <p className="text-[11px] text-[#ba1a1a] mt-1">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-[0.15em] text-[#1a1c1a] font-medium">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="e.g. maria@email.com"
            className="w-full bg-transparent border-b border-[#c5b3a6] py-2.5 text-sm text-[#1a1c1a] placeholder-[#797770]/60 focus:outline-none focus:border-[#1a1c1a] transition-colors"
          />
          {errors.email && (
            <p className="text-[11px] text-[#ba1a1a] mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-[0.15em] text-[#1a1c1a] font-medium">
            Phone / Instagram Handle
          </label>
          <input
            type="text"
            value={formData.phoneOrHandle}
            onChange={(e) => updateField('phoneOrHandle', e.target.value)}
            placeholder="e.g. 0917 123 4567 / @maria"
            className="w-full bg-transparent border-b border-[#c5b3a6] py-2.5 text-sm text-[#1a1c1a] placeholder-[#797770]/60 focus:outline-none focus:border-[#1a1c1a] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-[0.15em] text-[#1a1c1a] font-medium">
            Service Category *
          </label>
          <select
            value={formData.serviceCategory}
            onChange={(e) => updateField('serviceCategory', e.target.value)}
            className="w-full bg-transparent border-b border-[#c5b3a6] py-2.5 text-sm text-[#1a1c1a] focus:outline-none focus:border-[#1a1c1a] transition-colors cursor-pointer"
          >
            {SERVICE_SELECT_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#faf9f6] text-[#1a1c1a]">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-[0.15em] text-[#1a1c1a] font-medium">
            Target Event / Project Date
          </label>
          <input
            type="text"
            value={formData.targetDate}
            onChange={(e) => updateField('targetDate', e.target.value)}
            placeholder="e.g. October 24, 2026 or Flexible"
            className="w-full bg-transparent border-b border-[#c5b3a6] py-2.5 text-sm text-[#1a1c1a] placeholder-[#797770]/60 focus:outline-none focus:border-[#1a1c1a] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-[0.15em] text-[#1a1c1a] font-medium">
            Estimated Budget Range
          </label>
          <select
            value={formData.estimatedBudget}
            onChange={(e) => updateField('estimatedBudget', e.target.value)}
            className="w-full bg-transparent border-b border-[#c5b3a6] py-2.5 text-sm text-[#1a1c1a] focus:outline-none focus:border-[#1a1c1a] transition-colors cursor-pointer"
          >
            {BUDGET_TIER_OPTIONS.map((tier) => (
              <option key={tier} value={tier} className="bg-[#faf9f6] text-[#1a1c1a]">
                {tier}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-[0.15em] text-[#1a1c1a] font-medium">
          Project Notes &amp; Details *
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Please describe your preferred style, event location, number of pax for makeup, or design requirements..."
          className="w-full bg-transparent border-b border-[#c5b3a6] py-2.5 text-sm text-[#1a1c1a] placeholder-[#797770]/60 focus:outline-none focus:border-[#1a1c1a] transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-[11px] text-[#ba1a1a] mt-1">{errors.message}</p>
        )}
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-[#2c2c2c] hover:bg-[#1a1c1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.18em] px-10 py-4 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60"
        >
          {isSubmitting ? 'Sending Inquiry...' : 'Send Service Inquiry'}
        </button>

        <span className="text-[11px] text-[#797770]">
          * Required fields
        </span>
      </div>
    </form>
  );
}

