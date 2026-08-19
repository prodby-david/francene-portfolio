export type ServiceCategory = 'hair-makeup' | 'nails' | 'digital' | 'bespoke';

export interface ServiceTier {
  name: string;
  price: string;
  priceNumeric: number;
  duration: string;
  features: string[];
}

export interface ServicePackage {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  subtitle: string;
  description: string;
  startingPrice: string;
  basePriceNumeric: number;
  deliverables: string[];
  idealFor: string;
  tiers: ServiceTier[];
  addOns: {
    id: string;
    label: string;
    price: number;
    priceFormatted: string;
  }[];
}

export interface SelectedServiceConfig {
  packageId: string;
  tierIndex: number;
  selectedAddOns: string[];
  customNotes?: string;
}

export interface CalculatedInvestment {
  baseTotal: number;
  addOnsTotal: number;
  estimatedTotal: number;
  currency: string;
  summaryDescription: string;
}

