import { GalleryItem, Category } from './types';

export const categories: Category[] = [
  { id: 'countertops', label: 'Countertops' },
  { id: 'floors', label: 'Floors' },
  { id: 'backsplashes', label: 'Backsplashes' },
  { id: 'tables', label: 'Smart Tables' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Kitchen Marble Countertop',
    category: 'countertops',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
    description: 'Elegant white marble countertop with subtle veining',
  },
  {
    id: '2',
    title: 'Luxury Granite Floor',
    category: 'floors',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
    description: 'Premium granite flooring with intricate patterns',
  },
  {
    id: '3',
    title: 'Designer Mosaic Backsplash',
    category: 'backsplashes',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    description: 'Custom mosaic backsplash with geometric patterns',
  },
  {
    id: '4',
    title: 'Illuminated Agate Table',
    category: 'tables',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80',
    description: 'Smart-controlled LED illuminated semi-precious stone table',
  },
];