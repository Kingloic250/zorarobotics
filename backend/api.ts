import 'dotenv/config';
import express from 'express';
import { Resend } from 'resend';

const app = express();

app.use(express.json());

// CORS — allow the frontend domain to call this API
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowed = process.env.CORS_ORIGIN || '*';
  res.header('Access-Control-Allow-Origin', allowed === '*' ? '*' : origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, organization, sector, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const submission = {
    name,
    email,
    organization: organization || 'Not provided',
    sector: sector || 'Not specified',
    message,
    receivedAt: new Date().toISOString(),
  };

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM || 'Zorarobotics Website <onboarding@resend.dev>',
        to: process.env.RESEND_TO || 'zorarobotics@gmail.com',
        subject: `New Inquiry from ${name} — ${sector || 'General'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Organization</td><td style="padding:8px;border:1px solid #ddd;">${submission.organization}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Sector</td><td style="padding:8px;border:1px solid #ddd;">${submission.sector}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>
          </table>
        `,
      });
      console.log('Email sent for submission from', name);
    } catch (err) {
      console.error('Failed to send email:', err);
    }
  } else {
    console.log('RESEND_API_KEY not configured — submission received but no email sent.');
  }

  res.json({ success: true, message: 'Thank you! We will get back to you shortly.' });
});

export default app;