import React from 'react';
import { TableConfiguration } from '../../../../types/builder';
import { calculatePrice } from '../../../../lib/builder/priceCalculator';
import { validateConfiguration } from '../../../../lib/builder/configurationValidator';
import { formatCurrency } from '../../../../lib/shared/formatters';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  configuration: TableConfiguration;
}

export default function PriceSummary({ configuration }: Props) {
  const navigate = useNavigate();
  const isConfigurationComplete = validateConfiguration(configuration);
  const priceBreakdown = calculatePrice(configuration);

  const handleRequestQuote = () => {
    const queryParams = new URLSearchParams({
      type: 'custom-table',
      shape: configuration.shape,
      size: configuration.size,
      stone: configuration.stoneType,
      lighting: configuration.lighting,
      price: priceBreakdown.total.toString(),
      ...(configuration.customWidth && { width: configuration.customWidth.toString() }),
      ...(configuration.customLength && { length: configuration.customLength.toString() }),
      ...(configuration.customDiameter && { diameter: configuration.customDiameter.toString() })
    });

    navigate(`/contact?${queryParams.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Price Summary</h2>
      
      <div className="space-y-4 mb-8">
        {configuration.shape && (
          <div className="flex justify-between">
            <span className="text-gray-600">Base Price:</span>
            <span className="font-medium text-gray-900">
              {formatCurrency(priceBreakdown.basePrice)}
            </span>
          </div>
        )}

        {priceBreakdown.sizeAdjustment !== 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Size Adjustment:</span>
            <span className="font-medium text-gray-900">
              +{formatCurrency(priceBreakdown.sizeAdjustment)}
            </span>
          </div>
        )}

        {priceBreakdown.stonePremium !== 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Stone Premium:</span>
            <span className="font-medium text-gray-900">
              +{formatCurrency(priceBreakdown.stonePremium)}
            </span>
          </div>
        )}

        {priceBreakdown.lightingCost > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Lighting System:</span>
            <span className="font-medium text-gray-900">
              +{formatCurrency(priceBreakdown.lightingCost)}
            </span>
          </div>
        )}
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900">
              {isConfigurationComplete ? 'Total:' : 'Current Estimate:'}
            </span>
            <span className="text-lg font-bold text-blue-600">
              {formatCurrency(priceBreakdown.total)}
            </span>
          </div>
        </div>
      </div>

      <button
        className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-colors ${
          isConfigurationComplete 
            ? 'bg-blue-600 hover:bg-blue-700' 
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        onClick={handleRequestQuote}
        disabled={!isConfigurationComplete}
      >
        {isConfigurationComplete ? 'Request Quote' : 'Complete Selection'}
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
      
      {!isConfigurationComplete && (
        <p className="mt-4 text-sm text-gray-500 text-center">
          Please complete all selections to request a quote
        </p>
      )}
      
      <p className="mt-4 text-sm text-gray-500 text-center">
        Final price may vary based on specific requirements and customizations
      </p>
    </div>
  );
}