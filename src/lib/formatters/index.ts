/**
 * Formatting utilities for consistent data display
 */

// Currency formatter
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Date formatter
export function formatDate(timestamp: string): string {
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
}

// Dimension formatter
export function formatDimensions(
  value: number,
  unit: 'feet' | 'inches' = 'feet',
  precision: number = 1
): string {
  const formatted = value.toFixed(precision);
  return `${formatted} ${unit}`;
}

// Title case formatter
export function titleCase(str: string): string {
  return str.toLowerCase().split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}