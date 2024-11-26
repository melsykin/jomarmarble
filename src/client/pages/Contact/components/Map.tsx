import React, { useEffect, useRef, useState } from 'react';
import { loader } from '../../../../lib/google';
import { MapPin } from 'lucide-react';

interface Props {
  placeId: string;
}

export default function Map({ placeId }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    let map: google.maps.Map;
    let marker: google.maps.Marker;

    async function initMap() {
      try {
        await loader.load();
        
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        
        service.getDetails(
          {
            placeId,
            fields: ['geometry']
          },
          (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && place?.geometry?.location) {
              const location = place.geometry.location;
              
              map = new google.maps.Map(mapRef.current!, {
                center: location,
                zoom: 15,
                mapTypeControl: false,
                fullscreenControl: false,
                streetViewControl: false,
              });
              
              marker = new google.maps.Marker({
                map,
                position: location,
                animation: google.maps.Animation.DROP,
              });
            } else {
              setError(true);
            }
          }
        );
      } catch (error) {
        console.warn('Error loading map:', error);
        setError(true);
      }
    }

    if (mapRef.current) {
      initMap();
    }

    return () => {
      if (map) {
        // Clean up map instance if needed
      }
    };
  }, [placeId]);

  if (error) {
    return (
      <div className="w-full h-[300px] rounded-lg bg-gray-100 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <MapPin className="h-12 w-12 mx-auto mb-2" />
          <p>Map temporarily unavailable</p>
          <p className="text-sm">Please contact us for directions</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[300px] rounded-lg shadow-md"
      aria-label="Google Maps location"
    />
  );
}