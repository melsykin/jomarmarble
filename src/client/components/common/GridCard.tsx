import React, { ReactNode } from 'react';

interface Props {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
  footer?: ReactNode;
  imageOverlay?: ReactNode;
}

export default function GridCard({ image, title, description, onClick, footer, imageOverlay }: Props) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative pt-[75%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {imageOverlay}
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 line-clamp-none">{description}</p>
        {footer && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}