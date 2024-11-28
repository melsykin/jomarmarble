import { Material, MaterialType, MaterialFilters, StoneType, StoneCategory } from './types';
import { materials } from './data';
import { InstallationType } from '../shared/types';

export function getMaterialsByType(type: StoneType): Material[] {
  return materials.filter(material => material.type === type);
}

export function getMaterialById(id: string): Material | undefined {
  return materials.find(material => material.id === id);
}

export function filterMaterials(filters: MaterialFilters): Material[] {
  return materials.filter(material => {
    if (filters.type && material.type !== filters.type) return false;
    if (filters.category) {
      const isManufactured = material.type === StoneType.QUARTZ || material.type === StoneType.PORCELAIN;
      if (filters.category === StoneCategory.MANUFACTURED && !isManufactured) return false;
      if (filters.category === StoneCategory.NATURAL && isManufactured) return false;
    }
    return true;
  });
}

export function getTableMaterials(): Material[] {
  return materials.filter(material => 
    material.gallery?.some(image => 
      image.type === 'installation' && 
      image.installation?.type === InstallationType.TABLES
    )
  );
}