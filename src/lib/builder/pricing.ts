import { TableConfiguration } from './types';
import { pricingConfig } from '../../data/fallbacks/builder';
import { getMaterialById } from '../materials';

export interface PriceBreakdown {
  basePrice: number;
  sizeAdjustment: number;
  stonePremium: number;
  lightingCost: number;
  total: number;
}

// Map material price ranges to multipliers
const materialPriceMultipliers = {
  premium: 1.3,
  luxury: 1.6,
  exclusive: 2.0
};

export function calculatePrice(configuration: TableConfiguration): PriceBreakdown {
  let basePrice = 0;
  let sizeAdjustment = 0;
  let stonePremium = 0;
  let lightingCost = 0;

  // Calculate base price for shape
  if (configuration.shape) {
    basePrice = pricingConfig.shapePrices[configuration.shape];
  }

  // Calculate size adjustment
  if (configuration.size && basePrice > 0) {
    if (configuration.size === 'custom') {
      sizeAdjustment = calculateCustomSizeAdjustment(configuration, basePrice);
    } else {
      sizeAdjustment = basePrice * (pricingConfig.sizeMultiplier[configuration.size] - 1);
    }
  }

  // Calculate stone premium based on material price range
  if (configuration.stoneType && basePrice > 0) {
    const selectedMaterial = getMaterialById(configuration.stoneType);
    if (selectedMaterial) {
      const multiplier = materialPriceMultipliers[selectedMaterial.priceRange];
      stonePremium = (basePrice + sizeAdjustment) * (multiplier - 1);
    }
  }

  // Add lighting cost
  if (configuration.lighting) {
    lightingCost = pricingConfig.lightingAddon[configuration.lighting];
  }

  const total = basePrice + sizeAdjustment + stonePremium + lightingCost;

  return {
    basePrice,
    sizeAdjustment,
    stonePremium,
    lightingCost,
    total
  };
}

function calculateCustomSizeAdjustment(
  configuration: TableConfiguration,
  basePrice: number
): number {
  if (configuration.shape === 'rectangular' && configuration.customWidth && configuration.customLength) {
    const area = (configuration.customWidth * configuration.customLength) / 144;
    const standardArea = 21; // 6ft x 3.5ft (medium size) as baseline
    return basePrice * ((area / standardArea * pricingConfig.sizeMultiplier.medium) - 1);
  } 
  
  if ((configuration.shape === 'round' || configuration.shape === 'octagon') && configuration.customDiameter) {
    const area = Math.PI * Math.pow(configuration.customDiameter / 2, 2) / 144;
    const standardArea = Math.PI * Math.pow(48 / 2, 2) / 144; // 48" diameter (medium) as baseline
    return basePrice * ((area / standardArea * pricingConfig.sizeMultiplier.medium) - 1);
  }

  return 0;
}