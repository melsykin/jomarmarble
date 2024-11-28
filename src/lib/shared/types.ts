export enum InstallationType {
  COUNTERTOPS = 'countertops',
  STEPS = 'steps',
  FIREPLACES = 'fireplaces',
  TABLES = 'tables'
}

export interface Installation {
  id: string;
  type: InstallationType;
  title: string;
  description: string;
  image: string;
  material?: {
    id: string;
    name: string;
  };
}

export interface GalleryImage {
  url: string;
  description: string;
  type: 'material' | 'installation';
  installation?: Installation;
}