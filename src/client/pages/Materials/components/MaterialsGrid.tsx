import React, { useState } from 'react';
import { Material } from '../../../../lib/materials';
import { DollarSign, Image } from 'lucide-react';
import MaterialGallery from './MaterialGallery';
import GridLayout from '../../../components/common/GridLayout';
import GridCard from '../../../components/common/GridCard';

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
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  return (
    <>
      <GridLayout>
        {materials.map((material) => (
          <GridCard
            key={material.id}
            image={material.image}
            title={material.name}
            description={material.description}
            onClick={() => material.gallery && setSelectedMaterial(material)}
            footer={
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                  <span className="ml-2 text-blue-600/60">
                    ({material.type === 'quartz' || material.type === 'porcelain' ? 'Manufactured' : 'Natural'})
                  </span>
                </span>
                <PriceIndicator range={material.priceRange} />
              </div>
            }
            imageOverlay={material.gallery && (
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white flex items-center gap-2">
                  <Image className="h-6 w-6" />
                  <span>View Gallery</span>
                </div>
              </div>
            )}
          />
        ))}
      </GridLayout>

      {selectedMaterial && selectedMaterial.gallery && (
        <MaterialGallery
          images={selectedMaterial.gallery}
          materialName={selectedMaterial.name}
          onClose={() => setSelectedMaterial(null)}
        />
      )}
    </>
  );
}