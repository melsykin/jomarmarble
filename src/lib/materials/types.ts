import { GalleryImage } from '../shared/types';

export enum StoneType {
  MARBLE = 'marble',
  GRANITE = 'granite',
  QUARTZITE = 'quartzite',
  SEMI_PRECIOUS = 'semi-precious',
  QUARTZ = 'quartz',
  PORCELAIN = 'porcelain'
}

export enum StoneCategory {
  NATURAL = 'natural',
  MANUFACTURED = 'manufactured'
}

export interface MaterialCategory {
  id: StoneType;
  label: string;
  category: StoneCategory;
  description: string;
}

export interface Material {
  id: string;
  name: string;
  type: StoneType;
  description: string;
  image: string;
  priceRange: 'premium' | 'luxury' | 'exclusive';
  gallery?: GalleryImage[];
}

export interface MaterialFilters {
  type?: StoneType;
  category?: StoneCategory;
}

export interface Manufacturer {
  name: string;
  website: string;
  description: string;
  specialties: StoneType[];
  logo?: string;
}