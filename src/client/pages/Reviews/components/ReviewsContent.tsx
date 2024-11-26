import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import ReviewsGrid from './ReviewsGrid';
import LoadingState from './LoadingState';
import { fallbackReviews } from '../../../../data/fallbacks/reviews';
import { GoogleReview } from '../../../../types/google';
import { fetchPlaceReviews } from '../../../../server/api/googleMaps';

export default function ReviewsContent() {
  const [reviews, setReviews] = useState<GoogleReview[]>(fallbackReviews);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadReviews() {
      try {
        const fetchedReviews = await fetchPlaceReviews();
        if (mounted && fetchedReviews && fetchedReviews.length > 0) {
          setReviews(fetchedReviews);
        }
      } catch (err) {
        console.error('Error loading reviews:', err);
        if (mounted) {
          setError('Showing recent reviews from our archive');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadReviews();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <LoadingState />;

  return (
    <>
      <ReviewsGrid reviews={reviews} />
      {error && <p className="mt-4 text-center text-gray-600">{error}</p>}
      
      <div className="mt-16 text-center">
        <a
          href="https://g.page/r/CZXEsLTFxT2CEBE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Star className="mr-2 h-5 w-5" />
          Leave a Review on Google
        </a>
      </div>
    </>
  );
}