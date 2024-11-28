import React from 'react';
import { MaterialFilters, StoneType, categories } from '../../../../lib/materials';

type Props = {
  activeFilters: MaterialFilters;
  onFilterChange: (filters: MaterialFilters) => void;
};

export default function MaterialsFilter({ activeFilters, onFilterChange }: Props) {
  const handleTypeChange = (type: StoneType | 'all') => {
    if (type === 'all') {
      const { type: _, ...restFilters } = activeFilters;
      onFilterChange(restFilters);
    } else {
      onFilterChange({ ...activeFilters, type });
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => handleTypeChange('all')}
          className={`px-6 py-2 rounded-full transition-colors ${
            !activeFilters.type
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Types
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleTypeChange(category.id)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilters.type === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}