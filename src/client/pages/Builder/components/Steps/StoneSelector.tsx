import React from 'react';
import { StoneType } from '../../../../../lib/builder';
import { getTableMaterials } from '../../../../../lib/materials';

interface Props {
  value: StoneType;
  onChange: (stone: StoneType) => void;
}

export default function StoneSelector({ value, onChange }: Props) {
  const tableStones = getTableMaterials();

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Stone Type</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tableStones.map((stone) => (
          <button
            key={stone.id}
            onClick={() => onChange(stone.id as StoneType)}
            className={`relative overflow-hidden rounded-lg transition-all ${
              value === stone.id
                ? 'ring-2 ring-blue-600 ring-offset-2'
                : 'hover:ring-2 hover:ring-blue-200 hover:ring-offset-2'
            }`}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={stone.image}
                alt={stone.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h4 className="text-lg font-semibold text-white">{stone.name}</h4>
                <p className="text-sm text-gray-200 mt-1">{stone.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}