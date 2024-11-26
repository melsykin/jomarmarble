import React, { useState, useMemo } from 'react';
import MaterialsFilter from './components/MaterialsFilter';
import MaterialsGrid from './components/MaterialsGrid';
import { filterMaterials, MaterialFilters } from '../../../lib/materials';
import { DollarSign } from 'lucide-react';

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
            Explore our collection of premium stones
          </p>
          
          <div className="mt-8 flex flex-col items-center">
            <p className="text-lg font-medium text-gray-700 mb-4">Price Range Guide:</p>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600">Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <DollarSign className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-600">Luxury</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <DollarSign className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-600">Exclusive</span>
              </div>
            </div>
          </div>
        </div>

        <MaterialsFilter
          activeFilters={filters}
          onFilterChange={setFilters}
        />
        <MaterialsGrid materials={filteredMaterials} />
      </div>
    </div>
  );
}