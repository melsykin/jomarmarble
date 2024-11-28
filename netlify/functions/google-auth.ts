import { Handler } from '@netlify/functions';
import path from 'path';
import fs from 'fs';

const handler: Handler = async (event, context) => {
  try {
    // Get the base64 encoded credentials from environment variable
    const encodedCredentials = process.env.VITE_GOOGLE_CREDENTIALS;
    
    if (!encodedCredentials) {
      throw new Error('Google credentials not found in environment variables');
    }

    // Decode the credentials
    const credentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
    
    // Write credentials to a temporary file
    const credentialsPath = path.join(__dirname, 'credentials.json');
    fs.writeFileSync(credentialsPath, credentials);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Google credentials initialized successfully' })
    };
  } catch (error) {
    console.error('Error initializing Google credentials:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to initialize Google credentials' })
    };
  }
};

export { handler };