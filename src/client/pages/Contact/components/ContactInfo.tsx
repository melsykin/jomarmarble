import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { BusinessInfo } from '../../../../lib/google';
import { API_CONFIG } from '../../../../data/config/constants';
import Map from './Map';

interface Props {
  businessInfo: BusinessInfo | null;
  loading: boolean;
}

export default function ContactInfo({ businessInfo, loading }: Props) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        Get in touch with us for a free consultation about your project.
      </p>

      <div className="mt-8 space-y-6">
        {loading ? (
          <div className="animate-pulse space-y-6">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        ) : businessInfo && (
          <>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600" />
              <a 
                href={`tel:${businessInfo.phone}`}
                className="ml-4 text-gray-600 hover:text-blue-600"
              >
                {businessInfo.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600" />
              <a 
                href={`mailto:${API_CONFIG.COMPANY_EMAIL}`}
                className="ml-4 text-gray-600 hover:text-blue-600"
              >
                {API_CONFIG.COMPANY_EMAIL}
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="ml-4 text-gray-600">
                {businessInfo.address}
              </span>
            </div>
          </>
        )}
      </div>

      {businessInfo && (
        <div className="mt-8">
          <Map placeId={API_CONFIG.PLACE_ID} />
        </div>
      )}
    </div>
  );
}