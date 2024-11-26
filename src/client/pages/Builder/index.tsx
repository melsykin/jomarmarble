import React, { useState } from 'react';
import { TableConfiguration } from '../../../lib/builder';
import BuilderSteps from './components/BuilderSteps';
import BuilderPreview from './components/BuilderPreview';
import PriceSummary from './components/PriceSummary';
import { AlertTriangle } from 'lucide-react';

export default function Builder() {
  const [configuration, setConfiguration] = useState<TableConfiguration>({
    shape: '' as TableConfiguration['shape'],
    size: '' as TableConfiguration['size'],
    stoneType: '' as TableConfiguration['stoneType'],
    lighting: '' as TableConfiguration['lighting'],
  });

  const handleConfigurationChange = (updates: Partial<TableConfiguration>) => {
    setConfiguration((prev) => {
      // If shape is changing, reset size as it depends on shape
      if (updates.shape && updates.shape !== prev.shape) {
        return { ...prev, ...updates, size: '', customWidth: undefined, customLength: undefined, customDiameter: undefined };
      }
      return { ...prev, ...updates };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Build Your Custom Table</h1>
          <p className="mt-4 text-xl text-gray-600">
            Create your perfect illuminated stone table
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800">Important Note About Table Base</h3>
              <p className="mt-2 text-amber-700">
                The prices shown reflect the fabrication and installation of the stone table top with lighting system. 
                The table base must be purchased separately to ensure proper support for the heavy stone top. We recommend 
                consulting with our team about base requirements, as they need to be specially reinforced to safely support 
                the weight of natural stone and semi-precious materials.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <BuilderSteps
              configuration={configuration}
              onChange={handleConfigurationChange}
            />
          </div>
          <div className="lg:sticky lg:top-24 space-y-8">
            <BuilderPreview configuration={configuration} />
            <PriceSummary configuration={configuration} />
          </div>
        </div>
      </div>
    </div>
  );
}