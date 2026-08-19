export interface BookingFormData {
  fullName: string;
  email: string;
  phoneOrHandle: string;
  serviceCategory: string;
  projectScope: string;
  estimatedBudget: string;
  targetDate: string;
  location: string;
  message: string;
}

export interface BookingFormErrors {
  fullName?: string;
  email?: string;
  serviceCategory?: string;
  targetDate?: string;
  message?: string;
}

export interface InquirySubmissionReceipt {
  inquiryId: string;
  submittedAt: string;
  clientName: string;
  clientEmail: string;
  serviceSelected: string;
  targetDate: string;
  estimatedInvestment?: string;
}
