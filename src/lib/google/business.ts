import { GoogleReview, BusinessInfo } from './types';
import { loader } from './maps';
import { fallbackReviews } from '../../data/fallbacks/reviews';
import { fallbackBusinessInfo } from '../../data/fallbacks/business';
import { API_CONFIG } from '../../data/config/constants';

let placesService: google.maps.places.PlacesService | null = null;

function getPlacesService(): google.maps.places.PlacesService {
  if (!placesService) {
    const mapDiv = document.createElement('div');
    const map = new google.maps.Map(mapDiv, {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
    placesService = new google.maps.places.PlacesService(map);
  }
  return placesService;
}

export async function fetchBusinessInfo(): Promise<BusinessInfo> {
  if (!API_CONFIG.PLACE_ID) {
    console.warn('PLACE_ID not configured, using fallback data');
    return Promise.resolve(fallbackBusinessInfo);
  }

  try {
    await loader.load();
    
    return new Promise((resolve, reject) => {
      const service = getPlacesService();
      
      service.getDetails(
        {
          placeId: API_CONFIG.PLACE_ID,
          fields: ['name', 'formatted_address', 'formatted_phone_number', 'website', 'rating', 'user_ratings_total'],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            resolve({
              name: place.name || '',
              address: place.formatted_address || '',
              phone: place.formatted_phone_number || '',
              website: place.website || '',
              rating: place.rating,
              totalReviews: place.user_ratings_total
            });
          } else {
            resolve(fallbackBusinessInfo);
          }
        }
      );
    });
  } catch (error) {
    console.warn('Error loading Google Maps, using fallback data:', error);
    return fallbackBusinessInfo;
  }
}

export async function fetchPlaceReviews(): Promise<GoogleReview[]> {
  if (!API_CONFIG.PLACE_ID) {
    console.warn('PLACE_ID not configured, using fallback data');
    return Promise.resolve(fallbackReviews);
  }

  try {
    await loader.load();
    
    return new Promise((resolve, reject) => {
      const service = getPlacesService();
      
      service.getDetails(
        {
          placeId: API_CONFIG.PLACE_ID,
          fields: ['reviews'],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
            const reviews: GoogleReview[] = place.reviews.map((review) => ({
              name: `reviews/${Math.random().toString(36).substr(2, 9)}`,
              starRating: review.rating,
              comment: review.text || '',
              createTime: review.time?.toString() || '',
              reviewer: {
                displayName: review.author_name,
                profilePhotoUrl: review.profile_photo_url,
              },
            }));
            resolve(reviews);
          } else {
            resolve(fallbackReviews);
          }
        }
      );
    });
  } catch (error) {
    console.warn('Error loading Google Maps, using fallback data:', error);
    return fallbackReviews;
  }
}