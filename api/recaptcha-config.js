'use strict';

module.exports = (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const siteKey = process.env.RECAPTCHA_SITE_KEY || '';
  return res.status(200).json({ siteKey });
};
