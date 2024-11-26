import React from 'react';
import { Category } from '../../../../types/gallery';

type Props = {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function GalleryFilter({ categories, activeCategory, onCategoryChange }: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-6 py-2 rounded-full transition-colors ${
          activeCategory === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}