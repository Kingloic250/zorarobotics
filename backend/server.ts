import 'dotenv/config';
import app from '../api/index.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve built frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// SPA fallback — send index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Zorarobotics server running on http://localhost:${PORT}`);
  if (process.env.RESEND_API_KEY) {
    console.log(`Resend configured — sending to ${process.env.RESEND_TO || 'zorarobotics@gmail.com'}`);
  } else {
    console.log('RESEND_API_KEY not configured — set it to enable email sending');
  }
});