import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Luxury marble countertop"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
            Transform Your Space with Premium Stone Craftsmanship
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl">
            Elevate your home with exquisite marble, granite, and semi-precious stone installations. 
            From countertops to custom illuminated tables, we bring luxury to life.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="/gallery" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/contact" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}