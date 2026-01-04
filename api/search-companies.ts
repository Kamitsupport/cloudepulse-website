import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * API endpoint for company search
 * Proxies to Firebase Cloud Function searchCompanies
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { country, query } = req.body;

    // Validation
    if (!country || !query) {
      return res.status(400).json({ error: 'Country and query are required' });
    }

    if (query.trim().length < 2) {
      return res.status(400).json({ error: 'Query must be at least 2 characters' });
    }

    console.log('Searching companies:', { country, query });

    // Call the Firebase Cloud Function directly
    // onCall functions can be called via HTTP with data wrapper
    const functionUrl = 'https://us-central1-cloudepulse-7fb9a.cloudfunctions.net/searchCompanies';

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          country: country.trim(),
          query: query.trim(),
        }
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Cloud Function error:', result);
      return res.status(500).json({
        error: result.error?.message || 'Failed to search companies',
      });
    }

    // The result is wrapped in { result: { ... } } for onCall functions
    return res.status(200).json(result.result || result);

  } catch (error) {
    console.error('Error searching companies:', error);
    return res.status(500).json({
      error: 'Failed to search companies',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
