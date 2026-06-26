import 'dotenv/config';
import app from './api.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Zorarobotics server running on http://localhost:${PORT}`);
  if (process.env.RESEND_API_KEY) {
    console.log(`Resend configured — sending to ${process.env.RESEND_TO || 'zorarobotics@gmail.com'}`);
  } else {
    console.log('RESEND_API_KEY not configured — set it to enable email sending');
  }
});