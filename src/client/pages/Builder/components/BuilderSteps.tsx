import React from 'react';
import { TableConfiguration } from '../../../../types/builder';
import ShapeSelector from './Steps/ShapeSelector';
import SizeSelector from './Steps/SizeSelector';
import StoneSelector from './Steps/StoneSelector';
import LightingSelector from './Steps/LightingSelector';

interface Props {
  configuration: TableConfiguration;
  onChange: (updates: Partial<TableConfiguration>) => void;
}

export default function BuilderSteps({ configuration, onChange }: Props) {
  return (
    <div className="space-y-12">
      <ShapeSelector
        value={configuration.shape}
        onChange={(shape) => onChange({ shape })}
      />
      
      <SizeSelector
        value={configuration.size}
        shape={configuration.shape}
        customWidth={configuration.customWidth}
        customLength={configuration.customLength}
        customDiameter={configuration.customDiameter}
        onChange={(size, dimensions) => onChange({ size, ...dimensions })}
      />
      
      <StoneSelector
        value={configuration.stoneType}
        onChange={(stoneType) => onChange({ stoneType })}
      />
      
      <LightingSelector
        value={configuration.lighting}
        onChange={(lighting) => onChange({ lighting })}
      />
    </div>
  );
}