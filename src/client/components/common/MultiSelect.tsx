import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';

type Option = {
  value: string;
  label: string;
  group?: string;
};

type Props = {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  label: string;
  error?: string;
};

export default function MultiSelect({ options, value, onChange, label, error }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  const removeOption = (optionValue: string) => {
    onChange(value.filter(v => v !== optionValue));
  };

  // Group options if they have group property
  const groupedOptions = options.reduce((acc, option) => {
    const group = option.group || '';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {} as Record<string, Option[]>);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      
      <div
        className={`border rounded-md ${error ? 'border-red-500' : 'border-gray-300'} 
          focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500`}
      >
        <div
          className="min-h-[2.5rem] p-2 flex flex-wrap gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {value.length > 0 ? (
            value.map(v => {
              const option = options.find(o => o.value === v);
              return option ? (
                <span
                  key={v}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {option.label}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeOption(v);
                    }}
                    className="ml-1 inline-flex items-center p-0.5 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ) : null;
            })
          ) : (
            <span className="text-gray-500">Select options...</span>
          )}
        </div>
        
        <div className="flex items-center px-2 py-1 border-t border-gray-200">
          <ChevronDown
            className={`h-5 w-5 text-gray-400 transition-transform ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-auto">
          {Object.entries(groupedOptions).map(([group, groupOptions]) => (
            <div key={group || 'default'}>
              {group && (
                <div className="px-3 py-2 text-sm font-semibold text-gray-900 bg-gray-50">
                  {group}
                </div>
              )}
              {groupOptions.map(option => (
                <div
                  key={option.value}
                  className={`px-3 py-2 flex items-center justify-between hover:bg-gray-100 cursor-pointer
                    ${value.includes(option.value) ? 'bg-blue-50' : ''}`}
                  onClick={() => toggleOption(option.value)}
                >
                  <span className="text-sm text-gray-900">{option.label}</span>
                  {value.includes(option.value) && (
                    <Check className="h-4 w-4 text-blue-600" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}