import { TableShape, TableSize, LightingOption } from '../../lib/builder';

export const customSizeDimensions = {
  width: Array.from({ length: 21 }, (_, i) => (i + 4) / 2),
  length: Array.from({ length: 21 }, (_, i) => (i + 4) / 2),
  diameter: Array.from({ length: 13 }, (_, i) => (i + 6) / 2),
};

export const shapesData = [
  { id: 'rectangular', label: 'Rectangular', description: 'Classic rectangular shape' },
  { id: 'round', label: 'Round', description: 'Elegant circular design' },
  { id: 'octagon', label: 'Octagon', description: 'Our signature octagonal design' }
];

export const sizesByShape: Record<TableShape, Array<{
  id: TableSize;
  label: string;
  dimensions?: string;
  description: string;
}>> = {
  rectangular: [
    { id: 'small', label: 'Small', dimensions: '4ft × 2.5ft', description: 'Perfect for intimate settings' },
    { id: 'medium', label: 'Medium', dimensions: '6ft × 3.5ft', description: 'Ideal for dining rooms' },
    { id: 'large', label: 'Large', dimensions: '8ft × 4ft', description: 'Great for entertaining' },
    { id: 'custom', label: 'Custom Size', description: 'Specify your own dimensions' }
  ],
  round: [
    { id: 'small', label: 'Small', dimensions: '36" diameter', description: 'Perfect for cafes' },
    { id: 'medium', label: 'Medium', dimensions: '48" diameter', description: 'Ideal for dining rooms' },
    { id: 'large', label: 'Large', dimensions: '60" diameter', description: 'Great for gatherings' },
    { id: 'custom', label: 'Custom Size', description: 'Specify your own diameter' }
  ],
  octagon: [
    { id: 'small', label: 'Small', dimensions: '42" diameter', description: 'Perfect for intimate dining' },
    { id: 'medium', label: 'Medium', dimensions: '54" diameter', description: 'Ideal for family dining' },
    { id: 'large', label: 'Large', dimensions: '66" diameter', description: 'Great for large gatherings' },
    { id: 'custom', label: 'Custom Size', description: 'Specify your own diameter' }
  ],
  '': []
};

export const lightingData = [
  { id: 'none', label: 'No Lighting', description: 'Natural stone beauty', price: 0 },
  { id: 'white', label: 'White LED', description: 'Classic white illumination', price: 800 },
  { id: 'rgb', label: 'RGB LED', description: 'Customizable colors', price: 1200 },
  { id: 'smart', label: 'Smart LED', description: 'Mobile app-controlled dynamic lighting', price: 1800 }
];

export const pricingConfig = {
  shapePrices: {
    rectangular: 200,
    round: 400,
    octagon: 600,
  },
  sizeMultiplier: {
    small: 1,
    medium: 1.5,
    large: 2,
    custom: 1,
  },
  stoneMultiplier: {
    '': 1,
    agate: 1.5,
    amethyst: 1.8,
    quartz: 1.3,
    onyx: 1.6,
  },
  lightingAddon: {
    '': 0,
    none: 0,
    white: 800,
    rgb: 1200,
    smart: 1800,
  },
};