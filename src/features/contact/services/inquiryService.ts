import { BookingFormData, InquirySubmissionReceipt } from '../types/contact.types';

export const inquiryService = {
  async submitInquiry(data: BookingFormData): Promise<InquirySubmissionReceipt> {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const receipt: InquirySubmissionReceipt = {
      inquiryId: `FCN-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      clientName: data.fullName,
      clientEmail: data.email,
      serviceSelected: data.serviceCategory || 'Creative Studio Service',
      targetDate: data.targetDate || 'Flexible / To Be Coordinated',
      estimatedInvestment: data.estimatedBudget,
    };

    return receipt;
  },
};

