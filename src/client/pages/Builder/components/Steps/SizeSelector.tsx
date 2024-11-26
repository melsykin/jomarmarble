import React from 'react';
import { TableSize, TableShape } from '../../../../../lib/builder';
import { sizesByShape, customSizeDimensions } from '../../../../../data/fallbacks/builder';
import { formatDimensions } from '../../../../../lib/shared/formatters';
import { Ruler } from 'lucide-react';

interface Props {
  value: TableSize;
  shape: TableShape;
  customWidth?: number;
  customLength?: number;
  customDiameter?: number;
  onChange: (size: TableSize, dimensions?: { width?: number; length?: number; diameter?: number }) => void;
}

export default function SizeSelector({ value, shape, customWidth, customLength, customDiameter, onChange }: Props) {
  const sizeOptions = shape ? sizesByShape[shape] : [];
  const isCircular = shape === 'round' || shape === 'octagon';

  if (!shape) {
    return (
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Size</h3>
        <p className="text-gray-500">Please select a shape first</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Size</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {sizeOptions.map((size) => (
          <button
            key={size.id}
            onClick={() => onChange(size.id as TableSize)}
            className={`p-6 rounded-lg border-2 transition-all ${
              value === size.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <Ruler className="h-8 w-8 mb-3" />
              <span className="font-medium text-gray-900">{size.label}</span>
              {size.dimensions && (
                <span className="text-sm text-gray-500 mt-1">{size.dimensions}</span>
              )}
              <span className="text-sm text-gray-500 mt-1">{size.description}</span>
            </div>
          </button>
        ))}
      </div>

      {value === 'custom' && (
        <div className="bg-gray-50 p-6 rounded-lg">
          {isCircular ? (
            <div>
              <label htmlFor="diameter" className="block text-sm font-medium text-gray-700">
                Diameter (feet)
              </label>
              <select
                id="diameter"
                value={customDiameter ? (customDiameter / 12).toString() : ''}
                onChange={(e) =>
                  onChange('custom', {
                    diameter: parseFloat(e.target.value) * 12,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select diameter</option>
                {customSizeDimensions.diameter.map((feet) => (
                  <option key={feet} value={feet}>
                    {formatDimensions(feet)}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-sm text-gray-500">
                Available diameters: 3ft to 9ft (in 0.5ft increments)
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                  Width (feet)
                </label>
                <select
                  id="width"
                  value={customWidth ? (customWidth / 12).toString() : ''}
                  onChange={(e) =>
                    onChange('custom', {
                      width: parseFloat(e.target.value) * 12,
                      length: customLength,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select width</option>
                  {customSizeDimensions.width.map((feet) => (
                    <option key={feet} value={feet}>
                      {formatDimensions(feet)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="length" className="block text-sm font-medium text-gray-700">
                  Length (feet)
                </label>
                <select
                  id="length"
                  value={customLength ? (customLength / 12).toString() : ''}
                  onChange={(e) =>
                    onChange('custom', {
                      width: customWidth,
                      length: parseFloat(e.target.value) * 12,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select length</option>
                  {customSizeDimensions.length.map((feet) => (
                    <option key={feet} value={feet}>
                      {formatDimensions(feet)}
                    </option>
                  ))}
                </select>
              </div>
              <p className="col-span-2 mt-2 text-sm text-gray-500">
                Available dimensions: 2ft to 12ft (in 0.5ft increments)
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}