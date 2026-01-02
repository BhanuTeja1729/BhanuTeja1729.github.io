# Deployment Guide

This guide explains how to deploy both the frontend (GitHub Pages) and backend (separate hosting) for your portfolio.

## 🏗️ Architecture Overview

Your portfolio consists of two parts:

1. **Frontend (React/Vite)** → Deploys to **GitHub Pages** (static hosting)
2. **Backend (Express/Node.js)** → Deploys to **Render/Railway/Vercel** (server hosting)

> [!IMPORTANT]
> GitHub Pages can only host static files. The Node.js backend server must be deployed separately.

## 📦 Local Development

### Option 1: Run Both Servers with One Command (Recommended)

```bash
# First time setup - install concurrently
npm install

# Run both frontend and backend together
npm run dev:all
```

This will start:
- Frontend on `http://localhost:5173`
- Backend on `http://localhost:3001`

### Option 2: Run Servers Separately

**Terminal 1** (Frontend):
```bash
npm run dev
```

**Terminal 2** (Backend):
```bash
npm run dev:server
# or
cd server && npm run dev
```

## 🚀 Production Deployment

### Step 1: Deploy Backend Server

Choose one of these free hosting platforms:

#### Option A: Render (Recommended - Easiest)

1. Go to [render.com](https://render.com) and sign up
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `portfolio-backend` (or any name)
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `EMAIL_USER`: `bhanutejary02@gmail.com`
   - `EMAIL_APP_PASSWORD`: Your Gmail App Password
   - `PORT`: `3001` (or leave empty, Render will set it)
6. Click **"Create Web Service"**
7. Wait for deployment (5-10 minutes)
8. Copy your service URL (e.g., `https://portfolio-backend-xxxx.onrender.com`)

#### Option B: Railway

1. Go to [railway.app](https://railway.app) and sign up
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. Configure:
   - **Root Directory**: `server`
   - Add environment variables (same as above)
5. Deploy and copy the URL

#### Option C: Fly.io

```bash
# Install flyctl
# Windows: https://fly.io/docs/hands-on/install-flyctl/

cd server
fly launch
# Follow prompts, set environment variables
fly deploy
```

### Step 2: Update Frontend Configuration

Create a `.env.production` file in the **root** directory:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

Replace `https://your-backend-url.onrender.com` with your actual backend URL from Step 1.

### Step 3: Deploy Frontend to GitHub Pages

Your existing GitHub Actions workflow will automatically deploy the frontend when you push to `main`.

```bash
# Commit the changes
git add .
git commit -m "Add backend deployment configuration"
git push origin main
```

The frontend will be deployed to: `https://yourusername.github.io/repository-name`

## 🔧 Environment Variables Summary

### Local Development (.env files)

**Root `.env`** (optional for local dev):
```env
VITE_API_URL=http://localhost:3001
```

**`server/.env`** (required):
```env
EMAIL_USER=bhanutejary02@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password
PORT=3001
```

### Production

**Frontend** (`.env.production` in root):
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

**Backend** (Set in hosting platform dashboard):
- `EMAIL_USER=bhanutejary02@gmail.com`
- `EMAIL_APP_PASSWORD=your_gmail_app_password`
- `PORT=3001` (or auto-set by platform)

## 📝 Available NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run frontend only |
| `npm run dev:server` | Run backend only |
| `npm run dev:all` | Run both frontend and backend |
| `npm run build` | Build frontend for production |
| `npm run server:install` | Install backend dependencies |

## ✅ Verification Checklist

### Local Development
- [ ] Both servers running (`npm run dev:all`)
- [ ] Frontend accessible at `http://localhost:5173`
- [ ] Backend accessible at `http://localhost:3001`
- [ ] Contact form submits successfully
- [ ] Email received at `bhanutejary02@gmail.com`

### Production
- [ ] Backend deployed and accessible
- [ ] Environment variables set on backend hosting
- [ ] `.env.production` created with backend URL
- [ ] Frontend deployed to GitHub Pages
- [ ] Contact form works on production site
- [ ] Emails received from production submissions

## 🐛 Troubleshooting

### "Failed to send message" in Production

1. Check backend server is running (visit `https://your-backend-url.onrender.com/api/health`)
2. Verify CORS is enabled in `server/index.js`
3. Check browser console for errors
4. Verify `VITE_API_URL` is set correctly in `.env.production`

### Backend Server Sleeping (Free Tier)

Free tier services like Render may sleep after inactivity:
- First request after sleep takes 30-60 seconds
- Consider upgrading to paid tier for always-on service
- Or use a service like [UptimeRobot](https://uptimerobot.com) to ping your backend every 5 minutes

### CORS Errors

If you get CORS errors in production, update `server/index.js`:

```javascript
// Replace this line:
app.use(cors());

// With this:
app.use(cors({
  origin: 'https://yourusername.github.io'
}));
```

## 🔐 Security Notes

- Never commit `.env` files (already in `.gitignore`)
- Use environment variables for all sensitive data
- Rotate Gmail App Password if compromised
- Consider rate limiting for production API

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
