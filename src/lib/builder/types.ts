export type TableShape = 'rectangular' | 'round' | 'octagon' | '';
export type TableSize = 'small' | 'medium' | 'large' | 'custom' | '';
export type LightingOption = 'none' | 'white' | 'rgb' | 'smart' | '';
export type StoneType = 'agate' | 'amethyst' | 'quartz' | 'onyx' | '';

export interface TableConfiguration {
  shape: TableShape;
  size: TableSize;
  customWidth?: number;
  customLength?: number;
  customDiameter?: number;
  stoneType: StoneType;
  lighting: LightingOption;
}

export interface PricingConfig {
  shapePrices: Record<Exclude<TableShape, ''>, number>;
  sizeMultiplier: Record<Exclude<TableSize, ''>, number>;
  stoneMultiplier: Record<StoneType, number>;
  lightingAddon: Record<LightingOption, number>;
}