import { InstallationType, Installation } from '../shared/types';

export const categories = [
  { id: InstallationType.COUNTERTOPS, label: 'Countertops & Backsplashes' },
  { id: InstallationType.TABLES, label: 'Smart Tables' },
  { id: InstallationType.STEPS, label: 'Custom Steps' },
  { id: InstallationType.FIREPLACES, label: 'Fireplaces' },
];

export const installations: Installation[] = [
  {
    id: 'polar-white-kitchen',
    type: InstallationType.COUNTERTOPS,
    title: 'Modern Kitchen with Polar White',
    description: 'Elegant kitchen featuring Polar White quartzite countertops and matching backsplash',
    image: 'https://utfs.io/f/fT7t9XSHKSR6Lhz4LcQUtNb5OiCQzG1LrHZMV7gWqI34uj8w',
    material: {
      id: 'polar-white',
      name: 'Polar White'
    }
  },
  {
    id: 'cambria-kitchen',
    type: InstallationType.COUNTERTOPS,
    title: 'Contemporary Kitchen with Cambria',
    description: 'Stunning kitchen installation featuring Cambria quartz countertops and backsplash',
    image: 'https://utfs.io/f/fT7t9XSHKSR6qtfalvhIYgpr3ZEoLV8Xx6tKyaJGsfem0Avu',
    material: {
      id: 'cambria-quartz',
      name: 'Cambria Quartz'
    }
  },
  {
    id: 'antique-brown-kitchen',
    type: InstallationType.COUNTERTOPS,
    title: 'Luxury Kitchen with Antique Brown',
    description: 'Sophisticated kitchen design showcasing Antique Brown granite countertops and backsplash',
    image: 'https://utfs.io/f/fT7t9XSHKSR6QZnobBv0iOsFfYKmX7v3rdxVNPSaETb8pcHo',
    material: {
      id: 'antique-brown',
      name: 'Antique Brown'
    }
  },
  {
    id: 'luxury-steps',
    type: InstallationType.STEPS,
    title: 'Luxury Granite Steps',
    description: 'Premium granite staircase with custom crafted steps',
    image: 'https://images.unsplash.com/photo-1523413307857-ef24c53571ae?auto=format&fit=crop&q=80'
  },
  {
    id: 'modern-fireplace',
    type: InstallationType.FIREPLACES,
    title: 'Modern Marble Fireplace',
    description: 'Contemporary fireplace surround in luxurious marble',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80'
  },
  {
    id: 'illuminated-table',
    type: InstallationType.TABLES,
    title: 'Illuminated Agate Table',
    description: 'Smart-controlled LED illuminated semi-precious stone table',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80'
  }
];