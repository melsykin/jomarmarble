import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchBusinessInfo, BusinessInfo } from '../../../lib/google';
import { sizesByShape } from '../../../data/fallbacks/builder';
import { getMaterialById } from '../../../lib/materials';
import { FormData, stoneToMaterialMap } from './types';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const isFromBuilder = searchParams.get('type') === 'custom-table';

  useEffect(() => {
    async function loadBusinessInfo() {
      try {
        const info = await fetchBusinessInfo();
        setBusinessInfo(info);
      } catch (error) {
        console.error('Error fetching business info:', error);
      } finally {
        setLoading(false);
      }
    }

    loadBusinessInfo();
  }, []);

  const handleSubmit = async (data: FormData) => {
    try {
      console.log('Form submitted:', data);
      alert('Thank you for your message. We will get back to you soon!');
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isFromBuilder && (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Table Builder
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo businessInfo={businessInfo} loading={loading} />
          <ContactForm isFromBuilder={isFromBuilder} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}