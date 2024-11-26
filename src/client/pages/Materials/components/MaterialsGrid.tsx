import React from 'react';
import { Material } from '../../../../types/materials';
import { DollarSign } from 'lucide-react';

type Props = {
  materials: Material[];
};

const PriceIndicator = ({ range }: { range: Material['priceRange'] }) => {
  const dots = {
    premium: 1,
    luxury: 2,
    exclusive: 3
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(dots[range])].map((_, i) => (
        <DollarSign key={i} className="h-4 w-4 text-green-600" />
      ))}
    </div>
  );
};

export default function MaterialsGrid({ materials }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {materials.map((material) => (
        <div
          key={material.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="aspect-w-16 aspect-h-12">
            <img
              src={material.image}
              alt={material.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{material.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{material.origin}</p>
              </div>
              <PriceIndicator range={material.priceRange} />
            </div>
            <p className="mt-4 text-gray-600">{material.description}</p>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}