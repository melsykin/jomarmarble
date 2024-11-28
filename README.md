# Jomar Marble & Granite Website

A modern web application for showcasing premium stone craftsmanship and custom table building.

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The following environment variables need to be set in your Netlify deployment:

- `VITE_GOOGLE_MAPS_API_KEY`: Your Google Maps API key
- `VITE_GOOGLE_PLACE_ID`: Your Google Place ID
- `VITE_API_BASE_URL`: API base URL (production)
- `VITE_COMPANY_EMAIL`: Company email address
- `VITE_GOOGLE_CREDENTIALS`: Base64-encoded Google Service Account credentials

## Google Service Account Setup

1. Create a service account in the Google Cloud Console
2. Download the credentials JSON file
3. Convert the credentials to base64:
   ```bash
   base64 credentials.json | tr -d '\n' > encoded_credentials.txt
   ```
4. Add the contents of `encoded_credentials.txt` as `VITE_GOOGLE_CREDENTIALS` in Netlify:
   - Go to Site Settings > Environment Variables
   - Add new variable named `VITE_GOOGLE_CREDENTIALS`
   - Paste the base64-encoded credentials as the value

## Deployment

### Netlify Setup

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables in Netlify:
   - Go to Site Settings > Environment Variables
   - Add all required environment variables
4. Deploy!

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## Security Notes

- Never commit `credentials.json` to the repository
- Keep your `.env` file secure and never commit it
- Use environment variables for all sensitive data
- The base64-encoded credentials are automatically decoded during deployment

## License

Copyright © 2024 Jomar Marble & Granite. All rights reserved.