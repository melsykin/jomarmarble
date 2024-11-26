/**
 * Shared formatting utilities
 * Used across multiple components for consistent formatting
 */

// Format currency values
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Format dimensions
export function formatDimensions(
  value: number,
  unit: 'feet' | 'inches' = 'feet',
  precision: number = 1
): string {
  const formatted = value.toFixed(precision);
  return `${formatted} ${unit}`;
}

// Format date strings
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

// Capitalize first letter of each word
export function titleCase(str: string): string {
  return str.toLowerCase().split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}