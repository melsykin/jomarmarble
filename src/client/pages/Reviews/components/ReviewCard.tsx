import React from 'react';
import { Star } from 'lucide-react';
import { GoogleReview } from '../../../../types/google';
import { formatDate } from '../../../../lib/shared/formatters';

interface Props {
  review: GoogleReview;
}

export function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewCard({ review }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        {review.reviewer.profilePhotoUrl && (
          <img
            src={review.reviewer.profilePhotoUrl}
            alt={review.reviewer.displayName}
            className="w-12 h-12 rounded-full mr-4"
          />
        )}
        <div>
          <h3 className="font-semibold text-gray-900">
            {review.reviewer.displayName}
          </h3>
          <div className="flex mt-1">
            <ReviewStars rating={review.starRating} />
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{review.comment}</p>
      <div className="text-sm text-gray-500">
        {formatDate(review.createTime)}
      </div>
    </div>
  );
}