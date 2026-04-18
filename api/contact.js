'use strict';

const WINDOW_MS = 60 * 1000;
const LIMIT = 6;
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

function sanitize(text, maxLen) {
  return String(text || '').replace(/[<>]/g, '').trim().slice(0, maxLen);
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = getIp(req);
  if (limited(ip)) return res.status(429).json({ error: 'Too many requests' });

  const body = req.body || {};
  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 160).toLowerCase();
  const subject = sanitize(body.subject, 200);
  const message = sanitize(body.message, 4000);
  const recaptchaToken = sanitize(body.recaptchaToken, 2048);

  if (!name || !validEmail(email) || !subject || !message || message.length < 20) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

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

  return res.status(200).json({
    ok: true,
    received: { name, email, subject }
  });
};
