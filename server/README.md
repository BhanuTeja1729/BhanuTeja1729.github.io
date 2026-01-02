# Portfolio Contact Form Server

This is the backend server for handling contact form submissions from the portfolio website.

## Setup Instructions

### 1. Install Dependencies

Navigate to the server directory and install the required packages:

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` directory with your email credentials:

```env
EMAIL_USER=bhanutejary02@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password_here
PORT=3001
```

**Important:** You need to use a Gmail App Password, not your regular Gmail password.

#### How to Generate Gmail App Password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords** (search for "App passwords" in the search bar)
5. Select app: **Mail**
6. Select device: **Other (Custom name)** - enter "Portfolio Contact Form"
7. Click **Generate**
8. Copy the 16-character password and paste it in your `.env` file as `EMAIL_APP_PASSWORD`

### 3. Start the Server

Run the server in development mode:

```bash
npm run dev
```

Or in production mode:

```bash
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### POST `/api/contact`

Send a contact form submission.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message here"
}
```

### GET `/api/health`

Health check endpoint to verify the server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Running Both Frontend and Backend

1. **Terminal 1** - Start the backend server:
   ```bash
   cd server
   npm run dev
   ```

2. **Terminal 2** - Start the frontend (from project root):
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173` (or similar) and the backend on `http://localhost:3001`.

## Email Template

The email sent to you will include:
- Sender's name
- Sender's email (with reply-to enabled for easy responses)
- Message content
- Timestamp
- Formatted HTML for better readability

## Troubleshooting

### "SMTP connection error"
- Verify your Gmail credentials in `.env`
- Make sure you're using an App Password, not your regular password
- Check that 2-Step Verification is enabled on your Google account

### "Failed to send message"
- Ensure the server is running on port 3001
- Check the browser console for CORS errors
- Verify the API endpoint URL in Contact.tsx matches the server URL

### CORS Issues
- The server is configured to accept requests from any origin
- If you deploy to production, update the CORS configuration to only allow your domain
