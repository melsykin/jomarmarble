import React from 'react';
import { GalleryItem } from '../../../../types/gallery';

type Props = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
        >
          <div className="aspect-w-16 aspect-h-12">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-gray-200">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}