import React from 'react';
import { TableConfiguration } from '../../../../lib/builder';
import { getMaterialById } from '../../../../lib/materials';
import { sizesByShape } from '../../../../data/fallbacks/builder';

interface Props {
  configuration: TableConfiguration;
}

export default function BuilderPreview({ configuration }: Props) {
  // Find the selected material from our materials library
  const selectedMaterial = configuration.stoneType ? 
    getMaterialById(configuration.stoneType) : null;

  const getSizeDisplay = () => {
    if (!configuration.size) return 'Not selected';
    
    if (configuration.size === 'custom') {
      if (configuration.shape === 'rectangular') {
        if (!configuration.customWidth || !configuration.customLength) return 'Not selected';
        return `${configuration.customWidth / 12}ft × ${configuration.customLength / 12}ft`;
      } else if (configuration.shape === 'round' || configuration.shape === 'octagon') {
        if (!configuration.customDiameter) return 'Not selected';
        return `${configuration.customDiameter / 12}ft diameter`;
      }
      return 'Not selected';
    }

    const sizeOptions = configuration.shape ? sizesByShape[configuration.shape] : [];
    const selectedSize = sizeOptions.find(s => s.id === configuration.size);
    return selectedSize?.dimensions || 'Not selected';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
      
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
        {selectedMaterial ? (
          <div className="relative w-full h-full">
            <img
              src={selectedMaterial.image}
              alt={selectedMaterial.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {configuration.lighting && configuration.lighting !== 'none' && (
              <div 
                className={`absolute inset-0 mix-blend-overlay ${
                  configuration.lighting === 'white' ? 'bg-white/30' :
                  configuration.lighting === 'rgb' ? 'bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-red-400/30' :
                  configuration.lighting === 'smart' ? 'bg-gradient-to-r from-blue-400/30 via-green-400/30 to-purple-400/30 animate-pulse' :
                  ''
                }`}
              />
            )}
          </div>
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Select a stone type to preview</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Shape:</span>
          <span className="font-medium text-gray-900">
            {configuration.shape 
              ? configuration.shape.charAt(0).toUpperCase() + configuration.shape.slice(1)
              : 'Not selected'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Size:</span>
          <span className="font-medium text-gray-900">
            {getSizeDisplay()}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Stone:</span>
          <span className="font-medium text-gray-900">
            {selectedMaterial?.name || 'Not selected'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Lighting:</span>
          <span className="font-medium text-gray-900">
            {!configuration.lighting ? 'Not selected' :
             configuration.lighting === 'none' ? 'No Lighting' :
             configuration.lighting === 'smart' ? 'Smart Mobile-Controlled LED' :
             configuration.lighting.toUpperCase() + ' LED'}
          </span>
        </div>
      </div>
    </div>
  );
}