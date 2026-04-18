'use strict';

const WINDOW_MS = 60 * 1000;
const LIMIT = 8;
const buckets = new Map();

function getIp(req) {
  const xf = req.headers['x-forwarded-for'];
  if (typeof xf === 'string' && xf.trim()) return xf.split(',')[0].trim();
  return (req.socket && req.socket.remoteAddress) || 'unknown';
}

function limited(ip) {
  const now = Date.now();
  const entry = buckets.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  buckets.set(ip, entry);
  return entry.count > LIMIT;
}

function sanitize(text) {
  return String(text || '').replace(/[<>]/g, '').trim();
}

function verifyEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = getIp(req);
  if (limited(ip)) return res.status(429).json({ error: 'Too many requests' });

  const body = req.body || {};
  const email = sanitize(body.email).toLowerCase();
  const recaptchaToken = sanitize(body.recaptchaToken);

  if (!verifyEmail(email)) return res.status(400).json({ error: 'Invalid email' });

  if (process.env.RECAPTCHA_SECRET_KEY) {
    if (!recaptchaToken) return res.status(400).json({ error: 'Missing recaptcha token' });

    const params = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
      remoteip: ip
    });

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });
    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) return res.status(400).json({ error: 'Recaptcha failed' });
  }

  return res.status(200).json({ ok: true, subscribed: true, email });
};
