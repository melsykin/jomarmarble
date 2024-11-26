import React from 'react';
import { GoogleReview } from '../../../../types/google';
import ReviewCard from './ReviewCard';

interface Props {
  reviews: GoogleReview[];
}

export default function ReviewsGrid({ reviews }: Props) {
  return (
    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.name} review={review} />
      ))}
    </div>
  );
}