/**
 * Shared validation utilities
 * Common validation functions used across components
 */

// Validate email address
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

// Validate phone number
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s-+()]*$/;
  return phoneRegex.test(phone);
}

// Validate URL
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Validate numeric range
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

// Validate required fields
export function validateRequired(value: any): boolean {
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return value !== undefined && value !== null && value !== '';
}