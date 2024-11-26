import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import ReviewsGrid from './components/ReviewsGrid';
import LoadingState from './components/LoadingState';
import { GoogleReview, fetchPlaceReviews } from '../../../lib/google';

export default function Reviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
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

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Read reviews from our satisfied customers
          </p>
          {error && (
            <p className="mt-4 text-gray-600">{error}</p>
          )}
        </div>

        {loading ? (
          <LoadingState />
        ) : (
          <ReviewsGrid reviews={reviews} />
        )}

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
      </div>
    </div>
  );
}