import { SelectedServiceConfig, CalculatedInvestment } from '../types/services.types';
import { SERVICE_PACKAGES } from '../constants/servicePackages';

export const pricingService = {
  calculateTotal(config: SelectedServiceConfig): CalculatedInvestment {
    const pkg = SERVICE_PACKAGES.find((p) => p.id === config.packageId);
    if (!pkg) {
      return {
        baseTotal: 0,
        addOnsTotal: 0,
        estimatedTotal: 0,
        currency: 'PHP',
        summaryDescription: 'No service package selected',
      };
    }

    const tier = pkg.tiers[config.tierIndex] || pkg.tiers[0];
    const baseTotal = tier ? tier.priceNumeric : pkg.basePriceNumeric;

    let addOnsTotal = 0;
    const addOnNames: string[] = [];

    config.selectedAddOns.forEach((addOnId) => {
      const foundAddOn = pkg.addOns.find((a) => a.id === addOnId);
      if (foundAddOn) {
        addOnsTotal += foundAddOn.price;
        addOnNames.push(foundAddOn.label);
      }
    });

    const estimatedTotal = baseTotal + addOnsTotal;

    const summaryDescription = `${pkg.title} (${tier?.name || 'Standard'}) ${
      addOnNames.length > 0 ? `with ${addOnNames.join(', ')}` : ''
    }`;

    return {
      baseTotal,
      addOnsTotal,
      estimatedTotal,
      currency: 'PHP',
      summaryDescription,
    };
  },
};

