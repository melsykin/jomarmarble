import { Material, MaterialType, MaterialFilters } from './types';
import { materials } from './data';

export function getMaterialsByType(type: MaterialType): Material[] {
  return materials.filter(material => material.type === type);
}

export function getMaterialById(id: string): Material | undefined {
  return materials.find(material => material.id === id);
}

export function getMaterialsByApplication(application: Material['applications'][0]): Material[] {
  return materials.filter(material => material.applications.includes(application));
}

export function filterMaterials(filters: MaterialFilters): Material[] {
  return materials.filter(material => {
    if (filters.type && material.type !== filters.type) return false;
    if (filters.priceRange && material.priceRange !== filters.priceRange) return false;
    if (filters.application && !material.applications.includes(filters.application)) return false;
    return true;
  });
}

export function getTableMaterials(): Material[] {
  return getMaterialsByApplication('table');
}