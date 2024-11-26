export type MaterialType = 'marble' | 'granite' | 'quartzite' | 'semi-precious';
export type PriceRange = 'premium' | 'luxury' | 'exclusive';

export interface Material {
  id: string;
  name: string;
  type: MaterialType;
  description: string;
  image: string;
  priceRange: PriceRange;
  origin?: string;
  applications: ('countertop' | 'floor' | 'backsplash' | 'table')[];
}

export interface MaterialCategory {
  id: MaterialType;
  label: string;
  description: string;
}

export interface MaterialFilters {
  type?: MaterialType;
  priceRange?: PriceRange;
  application?: Material['applications'][0];
}