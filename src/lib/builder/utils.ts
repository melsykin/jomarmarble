import { TableConfiguration, TableShape } from './types';
import { customSizeDimensions, shapesData, sizesByShape } from '../../data/fallbacks/builder';

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

export function getSizeDisplay(config: TableConfiguration): string {
  if (!config.size) return 'Not selected';
  
  if (config.size === 'custom') {
    if (config.shape === 'rectangular') {
      if (!config.customWidth || !config.customLength) return 'Not selected';
      return `${config.customWidth / 12}ft × ${config.customLength / 12}ft`;
    } else if (config.shape === 'round' || config.shape === 'octagon') {
      if (!config.customDiameter) return 'Not selected';
      return `${config.customDiameter / 12}ft diameter`;
    }
    return 'Not selected';
  }

  const sizeOptions = config.shape ? sizesByShape[config.shape] : [];
  const selectedSize = sizeOptions.find(s => s.id === config.size);
  return selectedSize?.dimensions || 'Not selected';
}