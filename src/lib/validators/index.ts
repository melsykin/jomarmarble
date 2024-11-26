/**
 * Form and data validation utilities
 */

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

// Phone number validation
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s-+()]*$/;
  return phoneRegex.test(phone);
}

// Required field validation
export function validateRequired(value: any): boolean {
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return value !== undefined && value !== null && value !== '';
}

// Numeric range validation
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

// URL validation
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}