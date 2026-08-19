'use client';

import { useState, useCallback } from 'react';
import { BookingFormData, BookingFormErrors, InquirySubmissionReceipt } from '../types/contact.types';
import { inquiryService } from '../services/inquiryService';

const initialFormData: BookingFormData = {
  fullName: '',
  email: '',
  phoneOrHandle: '',
  serviceCategory: 'Hair & Makeup Services',
  projectScope: '',
  estimatedBudget: '₱5,000 - ₱15,000 PHP',
  targetDate: '',
  location: 'Metro Manila, Philippines',
  message: '',
};

export function useBookingForm(initialPrefill?: Partial<BookingFormData>) {
  const [formData, setFormData] = useState<BookingFormData>({
    ...initialFormData,
    ...initialPrefill,
  });
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<InquirySubmissionReceipt | null>(null);

  const updateField = useCallback((field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const prefillService = useCallback((serviceName: string, estimatedCost?: number) => {
    setFormData((prev) => ({
      ...prev,
      serviceCategory: serviceName,
      estimatedBudget: estimatedCost
        ? `₱${estimatedCost.toLocaleString()} PHP (Calculated Estimate)`
        : prev.estimatedBudget,
      projectScope: `Service Request: ${serviceName}`,
    }));
  }, []);

  const validate = (): boolean => {
    const newErrors: BookingFormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.serviceCategory) {
      newErrors.serviceCategory = 'Please select a service category.';
    }
    if (!formData.message.trim() && !formData.projectScope.trim()) {
      newErrors.message = 'Please provide a brief description of your request or event date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const receipt = await inquiryService.submitInquiry(formData);
      setSubmissionReceipt(receipt);
    } catch {
      setErrors({ message: 'Unable to send inquiry. Please try again or email directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmissionReceipt(null);
  };

  return {
    formData,
    errors,
    isSubmitting,
    submissionReceipt,
    updateField,
    prefillService,
    handleSubmit,
    resetForm,
  };
}

