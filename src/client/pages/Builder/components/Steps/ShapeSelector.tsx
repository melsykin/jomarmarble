import React from 'react';
import { TableShape } from '../../../../../lib/builder';
import { shapesData } from '../../../../../data/fallbacks/builder';
import { Square, Circle, Octagon } from 'lucide-react';

interface Props {
  value: TableShape;
  onChange: (shape: TableShape) => void;
}

export default function ShapeSelector({ value, onChange }: Props) {
  const getShapeIcon = (shapeId: string) => {
    switch (shapeId) {
      case 'rectangular':
        return <Square className="h-12 w-12 mb-3" />;
      case 'round':
        return <Circle className="h-12 w-12 mb-3" />;
      case 'octagon':
        return <Octagon className="h-12 w-12 mb-3" />;
      default:
        return <Square className="h-12 w-12 mb-3" />;
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Table Shape</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {shapesData.map((shape) => (
          <button
            key={shape.id}
            onClick={() => onChange(shape.id as TableShape)}
            className={`p-6 rounded-lg border-2 transition-all ${
              value === shape.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              {getShapeIcon(shape.id)}
              <span className="font-medium text-gray-900">{shape.label}</span>
              <span className="text-sm text-gray-500 mt-1">{shape.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}