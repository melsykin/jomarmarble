export interface GoogleReview {
  name: string;
  starRating: number;
  comment: string;
  createTime: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl?: string;
  };
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  website: string;
  rating?: number;
  totalReviews?: number;
}

// Add Google Maps types
declare global {
  interface Window {
    google: typeof google;
  }
}