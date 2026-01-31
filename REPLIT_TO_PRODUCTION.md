# Deploying from Replit to Production

This guide shows you how to deploy your app from Replit to production (Railway, Render, etc.) while managing different environment variables.

## Overview

**Workflow:**
1. Develop in Replit (with Replit env vars)
2. Push code to GitHub
3. Production auto-deploys from GitHub
4. Production uses different env vars (set in hosting dashboard)

## Step 1: Set Up GitHub Repository

### In Replit:

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository
   - Don't initialize with README (Replit already has files)

3. **Connect Replit to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Update Code for Production

The code already handles Replit vs production, but we need to update `resend.ts` to support production environment variables.

### Current Issue:
- `resend.ts` only works with Replit connectors
- Production needs direct API key

### Solution:
Update `server/resend.ts` to support both Replit and production.

## Step 3: Environment Variables Setup

### Replit Environment Variables (Keep These):
- `REPL_ID` - Auto-set by Replit
- `REPLIT_CONNECTORS_HOSTNAME` - Auto-set by Replit
- `REPL_IDENTITY` - Auto-set by Replit
- `DATABASE_URL` - Your Replit database
- `SESSION_SECRET` - Your session secret

### Production Environment Variables (Set in Hosting Dashboard):

**For Railway/Render/etc:**
- `DATABASE_URL` - Production database URL
- `NODE_ENV=production`
- `PORT` - Usually auto-set by hosting
- `SESSION_SECRET` - Generate a new secure one
- `RESEND_API_KEY` - Your Resend API key (for production)
- `RESEND_FROM_EMAIL` - Your sending email address

**Generate SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 4: Deployment Workflow

### Every Time You Make Changes:

#### Option A: Manual Push (Simple)

1. **In Replit, commit and push:**
   ```bash
   git add .
   git commit -m "Your change description"
   git push origin main
   ```

2. **Production auto-deploys** (if connected to GitHub)
   - Railway/Render automatically detects push
   - Builds and deploys automatically
   - Takes 2-5 minutes

#### Option B: Automated (Recommended)

Set up automatic deployment:
- Connect hosting service to GitHub
- Every push to `main` branch = auto-deploy
- No manual steps needed!

## Step 5: Update resend.ts for Production

The current `resend.ts` only works in Replit. We need to update it to work in production too.

### Update `server/resend.ts`:

```typescript
import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  // Production: Use direct API key from environment variable
  if (process.env.RESEND_API_KEY) {
    return {
      apiKey: process.env.RESEND_API_KEY,
      fromEmail: process.env.RESEND_FROM_EMAIL || 'noreply@mdchartsehr.com'
    };
  }

  // Replit: Use Replit connectors
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl and RESEND_API_KEY not set');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return { apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email };
}

export async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: credentials.fromEmail
  };
}
```

## Step 6: Deploy to Production (Railway Example)

### Initial Setup:

1. **Go to Railway.app**
   - Sign up/login
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

2. **Add PostgreSQL Database**
   - Click "+ New" → "Database" → "PostgreSQL"
   - Railway creates database automatically

3. **Set Environment Variables**
   - Go to your service → "Variables"
   - Add these variables:

   ```
   NODE_ENV=production
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   SESSION_SECRET=your-generated-secret-here
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=noreply@mdchartsehr.com
   PORT=5000
   ```

   **Note:** `${{Postgres.DATABASE_URL}}` is Railway's syntax to reference the database URL automatically.

4. **Configure Build Settings**
   - Build Command: `npm run build`
   - Start Command: `npm run start`
   - Railway usually auto-detects these

5. **Deploy**
   - Railway automatically deploys
   - Check logs for any errors

## Step 7: Set Up Database Schema in Production

After first deployment:

1. **Get Database URL from Railway**
   - PostgreSQL service → "Connect" tab
   - Copy connection string

2. **Run Migration** (one-time setup)
   - Option A: Use Railway's database console
   - Option B: Run locally with production DATABASE_URL:
     ```bash
     DATABASE_URL="your-production-db-url" npm run db:push
     ```

## Step 8: Daily Development Workflow

### Making Changes:

1. **Develop in Replit**
   - Make your changes
   - Test in Replit
   - Replit uses its own env vars (automatic)

2. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin main
   ```

3. **Production Auto-Deploys**
   - Railway/Render detects the push
   - Automatically builds and deploys
   - Uses production env vars (set in dashboard)
   - Takes 2-5 minutes

4. **Verify Deployment**
   - Check Railway/Render dashboard
   - View logs for any errors
   - Test your production site

## Environment Variables Comparison

| Variable | Replit | Production |
|----------|--------|------------|
| `DATABASE_URL` | Replit DB | Production DB |
| `SESSION_SECRET` | Your secret | New secret |
| `NODE_ENV` | development | production |
| `REPL_ID` | Auto-set | Not needed |
| `RESEND_API_KEY` | Via connectors | Direct API key |
| `RESEND_FROM_EMAIL` | Via connectors | Direct email |

## Troubleshooting

### "Resend not connected" Error in Production

**Solution:** Make sure you set:
- `RESEND_API_KEY` in production environment variables
- `RESEND_FROM_EMAIL` in production environment variables

### Database Connection Error

**Solution:** 
- Verify `DATABASE_URL` is correct in production
- Check database is accessible
- Run `npm run db:push` to set up schema

### Build Fails

**Solution:**
- Check build logs in Railway/Render dashboard
- Verify all dependencies are in `package.json`
- Check for TypeScript errors: `npm run check`

### Environment Variables Not Working

**Solution:**
- Double-check variable names (case-sensitive)
- Restart deployment after adding variables
- Check logs for errors

## Best Practices

1. **Never Commit `.env` Files**
   - Already in `.gitignore`
   - Keep Replit and production vars separate

2. **Use Different Secrets**
   - Generate new `SESSION_SECRET` for production
   - Don't reuse Replit secrets

3. **Test Before Deploying**
   - Test in Replit first
   - Then push to production

4. **Monitor Deployments**
   - Check logs after each deploy
   - Set up error monitoring (optional)

5. **Keep Environments Separate**
   - Replit = Development
   - Production = Live site
   - Never mix them!

## Quick Reference Commands

### In Replit:
```bash
# Commit changes
git add .
git commit -m "Description"
git push origin main

# Check status
git status

# View logs
npm run dev
```

### In Production (Railway/Render):
- View logs: Dashboard → Logs
- Restart: Dashboard → Restart
- Environment vars: Dashboard → Variables

## Next Steps

1. ✅ Update `server/resend.ts` (see Step 5)
2. ✅ Push code to GitHub
3. ✅ Set up Railway/Render deployment
4. ✅ Configure production environment variables
5. ✅ Deploy and test!

Need help with a specific step? Let me know!

