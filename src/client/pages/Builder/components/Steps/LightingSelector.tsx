import React from 'react';
import { LightingOption } from '../../../../../lib/builder';
import { lightingData } from '../../../../../data/fallbacks/builder';
import { formatCurrency } from '../../../../../lib/shared/formatters';
import { Lightbulb, DollarSign } from 'lucide-react';

interface Props {
  value: LightingOption;
  onChange: (lighting: LightingOption) => void;
}

export default function LightingSelector({ value, onChange }: Props) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Lighting</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {lightingData.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id as LightingOption)}
            className={`p-6 rounded-lg border-2 transition-all ${
              value === option.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <Lightbulb className={`h-8 w-8 mb-3 ${
                value === option.id ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <span className="font-medium text-gray-900">{option.label}</span>
              <span className="text-sm text-gray-500 mt-1">{option.description}</span>
              {option.price > 0 && (
                <div className="flex items-center mt-2 text-green-600">
                  <DollarSign className="h-4 w-4" />
                  <span>{formatCurrency(option.price)}</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}