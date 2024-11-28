import React from 'react';
import { Installation } from '../../../../lib/gallery';
import GridLayout from '../../../components/common/GridLayout';
import GridCard from '../../../components/common/GridCard';

type Props = {
  installations: Installation[];
};

export default function GalleryGrid({ installations }: Props) {
  return (
    <GridLayout>
      {installations.map((installation) => (
        <GridCard
          key={installation.id}
          image={installation.image}
          title={installation.title}
          description={installation.description}
          footer={installation.material && (
            <p className="text-sm">
              <span className="text-blue-600 font-medium">Material:</span>{' '}
              <span className="text-gray-700">{installation.material.name}</span>
            </p>
          )}
        />
      ))}
    </GridLayout>
  );
}