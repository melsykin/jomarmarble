export type GalleryItem = {
  id: string;
  title: string;
  category: 'countertops' | 'floors' | 'backsplashes' | 'tables';
  image: string;
  description: string;
};

export type Category = {
  id: GalleryItem['category'];
  label: string;
};