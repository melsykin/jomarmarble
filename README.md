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

## Google Service Account

The application requires a Google Service Account for accessing Google APIs. In Netlify:

1. Go to Site Settings > Environment Variables
2. Create a new environment variable called `GOOGLE_APPLICATION_CREDENTIALS`
3. Paste the entire contents of your `server/credentials.json` file as the value

## Deployment

### Netlify Setup

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables in Netlify:
   - Go to Site Settings > Environment Variables
   - Add all required environment variables
   - Add Google Service Account credentials
4. Deploy!

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## Project Structure

See [directory-structure.md](src/directory-structure.md) for detailed project organization.

## Development Guidelines

- Keep environment variables in `.env` for local development
- Never commit sensitive credentials to the repository
- Use environment variables for all configuration values
- Keep Google Service Account credentials secure
- Test the application with production environment variables before deploying

## License

Copyright © 2024 Jomar Marble & Granite. All rights reserved.