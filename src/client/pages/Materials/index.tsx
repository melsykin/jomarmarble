import React, { useState, useMemo } from 'react';
import { Info } from 'lucide-react';
import MaterialsFilter from './components/MaterialsFilter';
import MaterialsGrid from './components/MaterialsGrid';
import ManufacturerSection from './components/ManufacturerSection';
import { filterMaterials, MaterialFilters, manufacturers } from '../../../lib/materials';

export default function Materials() {
  const [filters, setFilters] = useState<MaterialFilters>({});

  const filteredMaterials = useMemo(() => {
    return filterMaterials(filters);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Materials</h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore our collection of premium stones and see them in action
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">About Our Materials</h3>
              <p className="mt-2 text-blue-800">
                As expert fabricators, we work with both natural and manufactured stones to create 
                stunning installations. While we don't sell raw materials, we can work with any stone 
                you choose from our trusted manufacturing partners. The examples below showcase some 
                of our most popular materials.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <MaterialsFilter
            activeFilters={filters}
            onFilterChange={setFilters}
          />
        </div>
        
        <MaterialsGrid materials={filteredMaterials} />
        
        <ManufacturerSection manufacturers={manufacturers} />
      </div>
    </div>
  );
}