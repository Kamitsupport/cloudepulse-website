import type { VercelRequest, VercelResponse } from '@vercel/node';

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
    const {
      companyName,
      contactName,
      email,
      phone,
      country,
      countryCode,
      poNumber,
      acceptedTerms,
    } = req.body;

    // Validation
    if (!companyName || !contactName || !email || !phone || !acceptedTerms) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log('Processing trial signup for:', email);

    // Call the Firebase Cloud Function directly
    const functionUrl = 'https://us-central1-cloudepulse-7fb9a.cloudfunctions.net/processTrialSignup';

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          companyName: companyName.trim(),
          fullName: contactName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone,
          country: country || null,
          countryCode: countryCode || null,
          poNumber: poNumber || null,
          source: 'website',
          referrer: req.headers['referer'] || null,
          createDemoData: true,
          sendWelcomeEmail: true,
        }
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Cloud Function error:', result);

      // Handle specific error codes
      if (result.error?.status === 'ALREADY_EXISTS') {
        return res.status(409).json({ error: 'An account already exists for this email' });
      }

      return res.status(500).json({
        error: result.error?.message || 'Failed to create trial account',
      });
    }

    console.log('Trial signup processed successfully:', result);

    return res.status(200).json({
      success: true,
      message: 'Trial account created successfully',
      mspId: result.result?.mspId,
      userId: result.result?.userId,
    });

  } catch (error) {
    console.error('Error creating trial signup:', error);
    return res.status(500).json({
      error: 'Failed to create trial signup',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
