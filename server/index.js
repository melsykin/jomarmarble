import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Google API client
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, 'credentials.json'),
  scopes: ['https://www.googleapis.com/auth/business.manage'],
});

const businessProfile = google.mybusinessbusinessinformation({
  version: 'v1',
  auth,
});

const businessReviews = google.mybusinessplaceactions({
  version: 'v1',
  auth,
});

const LOCATION_NAME = `locations/${process.env.GOOGLE_PLACE_ID}`;

app.get('/api/business', async (req, res) => {
  try {
    const location = await businessProfile.locations.get({
      name: LOCATION_NAME,
    });

    res.json({
      name: location.data.locationName,
      address: location.data.address,
      phone: location.data.phoneNumbers?.primary || '',
      website: location.data.websiteUri || '',
      rating: location.data.rating || 0,
      totalReviews: location.data.userReviewCount || 0,
    });
  } catch (error) {
    console.error('Error fetching business info:', error);
    res.status(500).json({ error: 'Failed to fetch business information' });
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await businessReviews.locations.reviews.list({
      parent: LOCATION_NAME,
      pageSize: 10,
      orderBy: 'updateTime desc',
    });

    const formattedReviews = reviews.data.reviews?.map(review => ({
      name: review.name,
      starRating: review.starRating,
      comment: review.comment,
      createTime: review.createTime,
      reviewer: {
        displayName: review.reviewer.displayName,
        profilePhotoUrl: review.reviewer.profilePhotoUrl,
      },
    })) || [];

    res.json(formattedReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});