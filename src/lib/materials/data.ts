import { Material, MaterialCategory, StoneType, StoneCategory, Manufacturer } from './types';
import { installations } from '../gallery/data';

export const categories: MaterialCategory[] = [
  {
    id: StoneType.MARBLE,
    label: 'Marble',
    category: StoneCategory.NATURAL,
    description: 'Classic elegance with unique veining patterns'
  },
  {
    id: StoneType.GRANITE,
    label: 'Granite',
    category: StoneCategory.NATURAL,
    description: 'Durable natural stone with varied patterns'
  },
  {
    id: StoneType.QUARTZITE,
    label: 'Quartzite',
    category: StoneCategory.NATURAL,
    description: 'Hard-wearing stone with crystalline appearance'
  },
  {
    id: StoneType.SEMI_PRECIOUS,
    label: 'Semi-Precious',
    category: StoneCategory.NATURAL,
    description: 'Exotic stones with translucent properties'
  },
  {
    id: StoneType.QUARTZ,
    label: 'Quartz',
    category: StoneCategory.MANUFACTURED,
    description: 'Engineered stone combining durability and design'
  },
  {
    id: StoneType.PORCELAIN,
    label: 'Porcelain',
    category: StoneCategory.MANUFACTURED,
    description: 'Versatile manufactured surface with consistent patterns'
  }
];

export const manufacturers: Manufacturer[] = [
  {
    name: 'Daltile',
    website: 'https://www.daltile.com/',
    description: 'Leading manufacturer of porcelain, ceramic, and natural stone tiles',
    specialties: [StoneType.PORCELAIN, StoneType.MARBLE, StoneType.GRANITE]
  },
  {
    name: 'Pantai Granite',
    website: 'https://pantaigranite.com/',
    description: 'Premium supplier of natural and engineered stone surfaces',
    specialties: [StoneType.GRANITE, StoneType.MARBLE, StoneType.QUARTZ]
  },
  {
    name: 'Cosentino',
    website: 'https://www.cosentino.com/',
    description: 'Innovative manufacturer of high-quality engineered surfaces',
    specialties: [StoneType.QUARTZ, StoneType.PORCELAIN]
  },
  {
    name: 'The Slab Depot',
    website: 'https://theslabdepot.com/',
    description: 'Extensive collection of natural and exotic stone slabs',
    specialties: [StoneType.MARBLE, StoneType.GRANITE, StoneType.QUARTZITE]
  },
  {
    name: 'Opustone',
    website: 'https://opustone.com/',
    description: 'Luxury natural stone and premium surface solutions',
    specialties: [StoneType.MARBLE, StoneType.QUARTZITE, StoneType.SEMI_PRECIOUS]
  },
  {
    name: 'Intercontinental Marble',
    website: 'https://www.intercontinentalmarble.com/',
    description: 'Curated selection of exclusive natural stone materials',
    specialties: [StoneType.MARBLE, StoneType.GRANITE, StoneType.QUARTZITE]
  }
];

export const materials: Material[] = [
  {
    id: 'polar-white',
    name: 'Polar White',
    type: StoneType.QUARTZITE,
    description: 'Elegant white quartzite with subtle crystalline patterns',
    image: 'https://utfs.io/f/fT7t9XSHKSR6O6VL4HdkkN5jfPEdAVxu2mnF0BJlCy7poaDt',
    priceRange: 'luxury',
    gallery: [
      {
        url: 'https://utfs.io/f/fT7t9XSHKSR6O6VL4HdkkN5jfPEdAVxu2mnF0BJlCy7poaDt',
        description: 'Polar White Quartzite Slab',
        type: 'material'
      },
      {
        url: 'https://utfs.io/f/fT7t9XSHKSR6Lhz4LcQUtNb5OiCQzG1LrHZMV7gWqI34uj8w',
        description: 'Kitchen Installation with Polar White Countertops and Backsplash',
        type: 'installation',
        installation: installations.find(i => i.id === 'polar-white-kitchen')
      }
    ]
  },
  {
    id: 'cambria-quartz',
    name: 'Cambria Quartz',
    type: StoneType.QUARTZ,
    description: 'Premium engineered quartz with exceptional durability and elegant design',
    image: 'https://utfs.io/f/fT7t9XSHKSR6bd06jQCNPMBjdK8l4D9iwrYmqzeE2Jg7TCnf',
    priceRange: 'premium',
    gallery: [
      {
        url: 'https://utfs.io/f/fT7t9XSHKSR6bd06jQCNPMBjdK8l4D9iwrYmqzeE2Jg7TCnf',
        description: 'Cambria Quartz Slab',
        type: 'material'
      },
      {
        url: 'https://utfs.io/f/fT7t9XSHKSR6qtfalvhIYgpr3ZEoLV8Xx6tKyaJGsfem0Avu',
        description: 'Kitchen Installation with Cambria Quartz Countertops and Backsplash',
        type: 'installation',
        installation: installations.find(i => i.id === 'cambria-kitchen')
      }
    ]
  },
  {
    id: 'antique-brown',
    name: 'Antique Brown',
    type: StoneType.GRANITE,
    description: 'Rich brown granite with intricate natural patterns and exceptional durability',
    image: 'https://marble.com/uploads/materials/303/1280X720/granite_Brown-Antique_wmioqqVWMZYADK2rLqQR.jpg',
    priceRange: 'luxury',
    gallery: [
      {
        url: 'https://marble.com/uploads/materials/303/1280X720/granite_Brown-Antique_wmioqqVWMZYADK2rLqQR.jpg',
        description: 'Antique Brown Granite Slab',
        type: 'material'
      },
      {
        url: 'https://utfs.io/f/fT7t9XSHKSR6QZnobBv0iOsFfYKmX7v3rdxVNPSaETb8pcHo',
        description: 'Kitchen Installation with Antique Brown Granite',
        type: 'installation',
        installation: installations.find(i => i.id === 'antique-brown-kitchen')
      }
    ]
  }
];