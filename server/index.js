import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER && email,
    subject: `Portfolio Contact Form: Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;">
            <strong style="color: #374151;">Name:</strong> 
            <span style="color: #1f2937;">${name}</span>
          </p>
          
          <p style="margin: 10px 0;">
            <strong style="color: #374151;">Email:</strong> 
            <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
          </p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #ffffff; border-left: 4px solid #2563eb; padding: 15px; border-radius: 4px;">
            <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from your portfolio contact form.</p>
          <p>Sent on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent on: ${new Date().toLocaleString()}
    `,
    replyTo: email, // Allow easy reply to the sender
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
