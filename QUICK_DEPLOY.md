# 🚀 Quick Deployment Guide (10 minutes)

## Option 1: Render.com (Recommended - Easiest)

1. **Go to Render.com**
   - Visit: https://render.com
   - Click "Get Started" or "Sign Up"
   - Sign in with GitHub

2. **Create New Web Service**
   - Click "New +" button (top right)
   - Select "Web Service"
   - Click "Connect GitHub" (if not connected)
   - Find and select `neuralstack` repository

3. **Configure Deployment**
   - **Name**: `neuralstack-api` (or any name you like)
   - **Environment**: `Node`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Select "Free"

4. **Environment Variables** (Optional)
   - Add: `NODE_ENV` = `production`
   - Add: `PORT` = `3000`

5. **Deploy**
   - Click "Create Web Service"
   - Wait 3-5 minutes for deployment
   - Your URL will be: `https://neuralstack-api.onrender.com`

6. **Test It**
   - Visit: `https://neuralstack-api.onrender.com/health`
   - Should see: `{"status":"healthy",...}`

---

## Option 2: Railway.app (Also Easy)

1. **Go to Railway**
   - Visit: https://railway.app
   - Click "Start a New Project"
   - Login with GitHub

2. **Deploy from GitHub**
   - Click "Deploy from GitHub repo"
   - Select `neuralstack`
   - Railway auto-detects Node.js

3. **Add Domain**
   - Click "Generate Domain"
   - Get URL like: `neuralstack-production.up.railway.app`

4. **That's it!** Railway handles everything automatically

---

## Option 3: Cyclic.sh (Fastest)

1. Visit: https://cyclic.sh
2. Click "Connect GitHub"
3. Select `neuralstack`
4. Click "Deploy"
5. Done! Get your URL

---

## After Deployment

**Copy your live URL!** You'll need it for step 4.

Example URLs:
- Render: `https://neuralstack-api.onrender.com`
- Railway: `https://neuralstack-production.up.railway.app`
- Cyclic: `https://neuralstack.cyclic.app`

Test endpoints:
```
https://YOUR-URL/health
https://YOUR-URL/api/v1
https://YOUR-URL/api/v1/models
```

---

## Troubleshooting

**Build Failed?**
- Check build logs in dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version (18.x+)

**App Not Starting?**
- Check start command is `npm start`
- Ensure build command ran successfully
- Check environment variables

**Port Issues?**
- Most platforms auto-set PORT variable
- Our code uses: `process.env.PORT || 3000`
- Should work automatically

---

Once deployed, proceed to Step 4!
