import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Send } from 'lucide-react';
import MultiSelect from '../../../components/common/MultiSelect';
import { FormData, projectTypeOptions, materialOptions } from '../types';

interface Props {
  isFromBuilder: boolean;
  onSubmit: (data: FormData) => Promise<void>;
}

export default function ContactForm({ isFromBuilder, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  return (
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
  );
}