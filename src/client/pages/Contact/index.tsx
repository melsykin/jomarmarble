import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';
import MultiSelect from '../../components/common/MultiSelect';
import { fetchBusinessInfo, BusinessInfo } from '../../../lib/google';
import Map from './components/Map';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { sizesByShape } from '../../../data/fallbacks/builder';
import { API_CONFIG } from '../../../data/config/constants';
import { getMaterialById } from '../../../lib/materials';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectTypes: string[];
  materialsOfInterest: string[];
  message: string;
};

const projectTypeOptions = [
  { value: 'countertops', label: 'Countertops' },
  { value: 'floors', label: 'Floors' },
  { value: 'backsplashes', label: 'Backsplashes' },
  { value: 'tables', label: 'Smart Tables' },
  { value: 'other', label: 'Other' },
];

const materialOptions = [
  { value: 'calacatta-gold', label: 'Calacatta Gold', group: 'Marble' },
  { value: 'blue-bahia', label: 'Blue Bahia', group: 'Granite' },
  { value: 'taj-mahal', label: 'Taj Mahal', group: 'Quartzite' },
  { value: 'blue-agate', label: 'Blue Agate', group: 'Semi-Precious' },
];

// Map stone types to material IDs
const stoneToMaterialMap: Record<string, string> = {
  'agate': 'blue-agate',
  'amethyst': 'taj-mahal',
  'quartz': 'calacatta-gold',
  'onyx': 'blue-bahia'
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const isFromBuilder = searchParams.get('type') === 'custom-table';

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>();

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

  useEffect(() => {
    if (isFromBuilder) {
      const shape = searchParams.get('shape');
      const size = searchParams.get('size');
      const stone = searchParams.get('stone');
      const lighting = searchParams.get('lighting');
      const price = searchParams.get('price');
      const width = searchParams.get('width');
      const length = searchParams.get('length');
      const diameter = searchParams.get('diameter');

      const selectedStone = stone ? getMaterialById(stone) : null;
      const sizeOptions = shape ? sizesByShape[shape] : [];
      const selectedSize = sizeOptions.find(s => s.id === size);

      setValue('projectTypes', ['tables']);
      
      if (stone && stoneToMaterialMap[stone]) {
        setValue('materialsOfInterest', [stoneToMaterialMap[stone]]);
      }

      let tableDetails = `Custom Table Quote Request:\n`;
      tableDetails += `- Shape: ${shape}\n`;
      if (size === 'custom') {
        if (diameter) {
          tableDetails += `- Size: Custom (${diameter}" diameter)\n`;
        } else if (width && length) {
          tableDetails += `- Size: Custom (${width}" × ${length}")\n`;
        }
      } else {
        tableDetails += `- Size: ${selectedSize?.dimensions}\n`;
      }
      tableDetails += `- Stone: ${selectedStone?.name}\n`;
      tableDetails += `- Lighting: ${lighting}\n`;
      tableDetails += `- Estimated Price: $${parseInt(price || '0').toLocaleString()}`;

      setValue('message', tableDetails);
    }
  }, [searchParams, setValue, isFromBuilder]);

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Form submitted:', data);
      reset();
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
          {/* Contact Information */}
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

            {/* Map */}
            {businessInfo && (
              <div className="mt-8">
                <Map placeId={API_CONFIG.PLACE_ID} />
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[\d\s-+()]*$/,
                      message: 'Invalid phone number',
                    },
                  })}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Controller
                  name="projectTypes"
                  control={control}
                  defaultValue={[]}
                  rules={{ required: 'Please select at least one project type' }}
                  render={({ field: { onChange, value } }) => (
                    <MultiSelect
                      options={projectTypeOptions}
                      value={value}
                      onChange={onChange}
                      label="Project Types"
                      error={errors.projectTypes?.message}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  name="materialsOfInterest"
                  control={control}
                  defaultValue={[]}
                  render={({ field: { onChange, value } }) => (
                    <MultiSelect
                      options={materialOptions}
                      value={value}
                      onChange={onChange}
                      label="Materials of Interest"
                    />
                  )}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={8}
                  {...register('message', { required: 'Message is required' })}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}