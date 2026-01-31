# Quick Deployment Workflow - Replit to Production

## 🚀 Daily Workflow (After Initial Setup)

### Every Time You Make Changes:

1. **Develop in Replit**
   - Make your changes
   - Test locally in Replit

2. **Commit and Push to GitHub**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

3. **Production Auto-Deploys** ✨
   - Railway/Render automatically detects the push
   - Builds and deploys (takes 2-5 minutes)
   - Your changes are live!

## 📋 Initial Setup (One-Time)

### 1. Connect Replit to GitHub

In Replit terminal:
```bash
git init  # if not already done
git remote add origin https://github.com/yourusername/your-repo.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 2. Set Up Production Hosting (Railway)

1. Go to https://railway.app
2. "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add PostgreSQL database
5. Set environment variables (see below)

### 3. Production Environment Variables

In Railway dashboard → Your Service → Variables:

```
NODE_ENV=production
DATABASE_URL=${{Postgres.DATABASE_URL}}
SESSION_SECRET=your-generated-secret-here
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@mdchartsehr.com
PORT=5000
```

**Get Resend API Key:**
- Sign up at https://resend.com
- Get API key from dashboard
- Add to Railway variables

**Generate SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Set Up Database Schema

After first deployment:
- Railway PostgreSQL → Connect tab
- Copy connection string
- Run: `DATABASE_URL="your-url" npm run db:push`

## ✅ That's It!

Now every time you push to GitHub, production automatically updates!

## 🔍 Troubleshooting

**Build fails?**
- Check Railway logs
- Verify all dependencies in package.json

**Email not working?**
- Check `RESEND_API_KEY` is set in production
- Verify API key is valid

**Database errors?**
- Verify `DATABASE_URL` is correct
- Run `npm run db:push` to set up schema

## 📝 Environment Variables Reference

| Variable | Replit | Production |
|----------|--------|------------|
| `DATABASE_URL` | Auto (Replit DB) | Set manually |
| `RESEND_API_KEY` | Via connectors | Direct API key |
| `SESSION_SECRET` | Your secret | New secret |
| `NODE_ENV` | development | production |

## 🎯 Key Points

- ✅ Replit = Development (uses Replit env vars automatically)
- ✅ Production = Live site (uses env vars from hosting dashboard)
- ✅ Push to GitHub = Auto-deploy to production
- ✅ Code works in both environments automatically!

