/**
 * API helper functions for making requests and handling responses
 */

export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export function buildApiUrl(endpoint: string, baseUrl?: string): string {
  const base = baseUrl || process.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
  return `${base}/${endpoint}`;
}

export function handleApiError(error: unknown): never {
  console.error('API Error:', error);
  throw new Error('An error occurred while fetching data');
}