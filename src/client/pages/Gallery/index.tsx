import React, { useState, useMemo } from 'react';
import GalleryFilter from './components/GalleryFilter';
import GalleryGrid from './components/GalleryGrid';
import { categories, installations } from '../../../lib/gallery';
import { InstallationType } from '../../../lib/shared/types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<InstallationType | 'all'>('all');

  const filteredInstallations = useMemo(() => {
    if (activeCategory === 'all') return installations;
    return installations.filter((item) => item.type === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Gallery</h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore our collection of premium stone craftsmanship
          </p>
        </div>

        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <GalleryGrid installations={filteredInstallations} />
      </div>
    </div>
  );
}