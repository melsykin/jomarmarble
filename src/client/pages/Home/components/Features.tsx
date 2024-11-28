import React from 'react';
import { Gem, Lightbulb, Flame, StepForward, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuresContent } from '../../../../lib/content/home';

const iconMap = {
  Gem,
  Lightbulb,
  Flame,
  Steps: StepForward
};

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{featuresContent.title}</h2>
          <p className="mt-4 text-xl text-gray-600">
            {featuresContent.subtitle}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuresContent.features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.name}
                onClick={() => window.location.href = feature.link}
                className="relative group cursor-pointer h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative h-full p-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col">
                  <div className="flex flex-col items-start min-h-[200px]">
                    <Icon className="h-12 w-12 text-blue-600" />
                    <div className="h-20 flex items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="mt-auto pt-6 flex flex-col sm:flex-row items-start gap-4">
                    <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      View Gallery
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                    {feature.builderLink && (
                      <Link
                        to={feature.builderLink}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Build Your Table
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}