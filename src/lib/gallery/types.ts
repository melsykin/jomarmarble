import { InstallationType, Installation } from '../shared/types';

export type Category = {
  id: InstallationType;
  label: string;
};

export type { Installation };