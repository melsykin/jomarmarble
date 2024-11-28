import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Manufacturer } from '../../../../lib/materials';

interface Props {
  manufacturers: Manufacturer[];
}

export default function ManufacturerSection({ manufacturers }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Manufacturing Partners</h2>
      <p className="text-gray-600 mb-8">
        We work with leading manufacturers to provide you with the highest quality materials. 
        Browse their collections to explore additional options - we can work with any material 
        from these trusted suppliers.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {manufacturers.map((manufacturer) => (
          <div key={manufacturer.name} className="border rounded-lg p-6 hover:border-blue-200 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{manufacturer.name}</h3>
                <p className="text-gray-600 mt-2">{manufacturer.description}</p>
              </div>
              {manufacturer.logo && (
                <img 
                  src={manufacturer.logo} 
                  alt={manufacturer.name} 
                  className="h-8 object-contain"
                />
              )}
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700">Specialties:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {manufacturer.specialties.map((specialty) => (
                  <span 
                    key={specialty}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
                  </span>
                ))}
              </div>
            </div>
            
            <a
              href={manufacturer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
            >
              Visit Website
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}