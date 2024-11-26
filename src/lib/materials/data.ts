import { Material, MaterialCategory } from './types';

export const materials: Material[] = [
  {
    id: 'calacatta-gold',
    name: 'Calacatta Gold',
    type: 'marble',
    description: 'Luxurious white marble with dramatic gold veining',
    image: 'https://images.unsplash.com/photo-1618219878829-8afd92751bed?auto=format&fit=crop&q=80',
    priceRange: 'luxury',
    origin: 'Italy',
    applications: ['countertop', 'floor', 'backsplash']
  },
  {
    id: 'blue-bahia',
    name: 'Blue Bahia',
    type: 'granite',
    description: 'Striking blue granite with black and white patterns',
    image: 'https://images.unsplash.com/photo-1604715892639-61d265a76ce6?auto=format&fit=crop&q=80',
    priceRange: 'exclusive',
    origin: 'Brazil',
    applications: ['countertop', 'table']
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    type: 'quartzite',
    description: 'Elegant cream quartzite with subtle veining',
    image: 'https://images.unsplash.com/photo-1619784299133-57cef4a9a738?auto=format&fit=crop&q=80',
    priceRange: 'premium',
    origin: 'Brazil',
    applications: ['countertop', 'floor', 'backsplash']
  },
  {
    id: 'blue-agate',
    name: 'Blue Agate',
    type: 'semi-precious',
    description: 'Translucent blue agate with stunning patterns',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&q=80',
    priceRange: 'exclusive',
    origin: 'Brazil',
    applications: ['table']
  }
];

export const categories: MaterialCategory[] = [
  {
    id: 'marble',
    label: 'Marble',
    description: 'Classic elegance with unique veining patterns'
  },
  {
    id: 'granite',
    label: 'Granite',
    description: 'Durable natural stone with varied patterns'
  },
  {
    id: 'quartzite',
    label: 'Quartzite',
    description: 'Hard-wearing stone with crystalline appearance'
  },
  {
    id: 'semi-precious',
    label: 'Semi-Precious',
    description: 'Exotic stones with translucent properties'
  }
];