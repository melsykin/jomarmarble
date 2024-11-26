/**
 * Configuration Validator for Table Builder
 * Validates table configurations and dimensions
 */

import { TableConfiguration } from './types';
import { shapesData, sizesByShape, customSizeDimensions } from '../../data/fallbacks/builder';
import { getMaterialById } from '../materials';
import { lightingData } from '../../data/fallbacks/builder';

export function validateConfiguration(config: TableConfiguration): boolean {
  return (
    validateShape(config.shape) &&
    validateSize(config) &&
    validateStoneType(config.stoneType) &&
    validateLighting(config.lighting)
  );
}

export function validateShape(shape: string): boolean {
  return shapesData.some(s => s.id === shape);
}

export function validateSize(config: TableConfiguration): boolean {
  if (!config.shape || !config.size) return false;

  const validSizes = sizesByShape[config.shape];
  if (!validSizes.some(s => s.id === config.size)) return false;

  if (config.size === 'custom') {
    return validateCustomDimensions(config);
  }

  return true;
}

export function validateCustomDimensions(config: TableConfiguration): boolean {
  if (config.shape === 'rectangular') {
    return validateRectangularDimensions(config.customWidth, config.customLength);
  }
  
  if (config.shape === 'round' || config.shape === 'octagon') {
    return validateCircularDimensions(config.customDiameter);
  }

  return false;
}

function validateRectangularDimensions(width?: number, length?: number): boolean {
  if (!width || !length) return false;
  
  const validWidths = customSizeDimensions.width.map(w => w * 12);
  const validLengths = customSizeDimensions.length.map(l => l * 12);
  
  return validWidths.includes(width) && validLengths.includes(length);
}

function validateCircularDimensions(diameter?: number): boolean {
  if (!diameter) return false;
  
  const validDiameters = customSizeDimensions.diameter.map(d => d * 12);
  return validDiameters.includes(diameter);
}

export function validateStoneType(stoneType: string): boolean {
  return !!getMaterialById(stoneType);
}

export function validateLighting(lighting: string): boolean {
  return lightingData.some(option => option.id === lighting);
}