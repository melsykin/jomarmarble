/**
 * Helper functions for common operations across the application
 */

import { TableConfiguration } from '../types/builder';

/**
 * Format currency values consistently throughout the application
 * @param value - Number to format as currency
 * @returns Formatted string with currency symbol
 */
export const formatCurrency = (value: number): string => {
  return `$${value.toLocaleString()}`;
};

/**
 * Format date strings consistently
 * @param timestamp - Date string or timestamp
 * @returns Formatted date string
 */
export const formatDate = (timestamp: string): string => {
  // Handle Unix timestamp (seconds since epoch)
  if (/^\d+$/.test(timestamp)) {
    return new Date(parseInt(timestamp) * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  // Handle ISO date string
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Generate URL parameters for table configuration
 * @param config - Table configuration object
 * @param price - Calculated price
 * @returns URLSearchParams object
 */
export const generateTableConfigParams = (
  config: TableConfiguration,
  price: number
): URLSearchParams => {
  const params = new URLSearchParams({
    type: 'custom-table',
    shape: config.shape,
    size: config.size,
    stone: config.stoneType,
    lighting: config.lighting,
    price: price.toString()
  });

  if (config.customWidth) params.append('width', config.customWidth.toString());
  if (config.customLength) params.append('length', config.customLength.toString());
  if (config.customDiameter) params.append('diameter', config.customDiameter.toString());

  return params;
};

/**
 * Handle API responses consistently
 * @param response - Fetch API response
 * @returns Parsed response data
 * @throws Error with status code on failure
 */
export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}