'use client';

import { useState, useMemo, useCallback } from 'react';
import { SERVICE_PACKAGES } from '../constants/servicePackages';
import { pricingService } from '../services/pricingService';
import { SelectedServiceConfig } from '../types/services.types';

export function useServiceCalculator(initialPackageId: string = SERVICE_PACKAGES[0].id) {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(initialPackageId);
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const currentPackage = useMemo(() => {
    return SERVICE_PACKAGES.find((p) => p.id === selectedPackageId) || SERVICE_PACKAGES[0];
  }, [selectedPackageId]);

  const selectPackage = useCallback((packageId: string) => {
    setSelectedPackageId(packageId);
    setSelectedTierIndex(0);
    setSelectedAddOns([]);
  }, []);

  const selectTier = useCallback((tierIndex: number) => {
    setSelectedTierIndex(tierIndex);
  }, []);

  const toggleAddOn = useCallback((addOnId: string) => {
    setSelectedAddOns((prev) => {
      if (prev.includes(addOnId)) {
        return prev.filter((id) => id !== addOnId);
      }
      return [...prev, addOnId];
    });
  }, []);

  const calculation = useMemo(() => {
    const config: SelectedServiceConfig = {
      packageId: selectedPackageId,
      tierIndex: selectedTierIndex,
      selectedAddOns,
    };
    return pricingService.calculateTotal(config);
  }, [selectedPackageId, selectedTierIndex, selectedAddOns]);

  return {
    selectedPackageId,
    currentPackage,
    selectedTierIndex,
    selectedAddOns,
    calculation,
    selectPackage,
    selectTier,
    toggleAddOn,
  };
}
