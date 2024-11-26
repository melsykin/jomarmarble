/**
 * Common API types
 */

export interface ApiResponse<T = any> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

export interface ApiError {
  status: 'error';
  message: string;
  code?: string;
  details?: Record<string, any>;
}