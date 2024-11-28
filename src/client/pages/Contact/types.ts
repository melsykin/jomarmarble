export interface FormData {
  name: string;
  email: string;
  phone: string;
  projectTypes: string[];
  materialsOfInterest: string[];
  message: string;
}

export const projectTypeOptions = [
  { value: 'countertops', label: 'Countertops & Backsplashes' },
  { value: 'steps', label: 'Custom Steps' },
  { value: 'fireplaces', label: 'Fireplaces' },
  { value: 'tables', label: 'Smart Tables' },
  { value: 'other', label: 'Other' },
];

export const materialOptions = [
  { value: 'calacatta-gold', label: 'Calacatta Gold', group: 'Marble' },
  { value: 'blue-bahia', label: 'Blue Bahia', group: 'Granite' },
  { value: 'taj-mahal', label: 'Taj Mahal', group: 'Quartzite' },
  { value: 'blue-agate', label: 'Blue Agate', group: 'Semi-Precious' },
];

export const stoneToMaterialMap: Record<string, string> = {
  'agate': 'blue-agate',
  'amethyst': 'taj-mahal',
  'quartz': 'calacatta-gold',
  'onyx': 'blue-bahia'
};