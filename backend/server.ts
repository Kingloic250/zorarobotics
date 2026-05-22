import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;
const SUBMISSIONS_FILE = path.join(__dirname, 'submissions.json');

app.use(express.json());

// In production, serve the built frontend
const frontendDist = path.resolve(__dirname, '..', 'frontend', 'dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
}

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

  // Always save to file as backup
  try {
    const existing = fs.existsSync(SUBMISSIONS_FILE)
      ? JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'))
      : [];
    existing.push(submission);
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error('Failed to save submission to file:', err);
  }

  // Try sending email if SMTP is configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"ZoraBots Website" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO || process.env.SMTP_USER,
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
    console.log('SMTP not configured. Submission saved to submissions.json');
  }

  res.json({ success: true, message: 'Thank you! We will get back to you shortly.' });
});

// SPA catch-all — serve index.html for all non-API routes (production only)
if (fs.existsSync(frontendDist)) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`ZoraBots contact server running on http://localhost:${PORT}`);
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    console.log(`SMTP configured for ${process.env.SMTP_USER} via ${process.env.SMTP_HOST}`);
  } else {
    console.log('SMTP not configured — submissions saved to submissions.json only');
  }
});


export default app;