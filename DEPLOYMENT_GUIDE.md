# Deployment Guide - Hosting Your Website Publicly

This guide will help you deploy your EHR-RCM Solutions website to a public server and connect it to a GoDaddy domain.

## Overview

To host your website publicly, you need:
1. **A hosting server** (VPS, cloud platform, or hosting service)
2. **A production PostgreSQL database**
3. **Domain DNS configuration** (pointing your GoDaddy domain to your server)
4. **SSL certificate** (for HTTPS)

## Hosting Options

### Option 1: Cloud Platforms (Recommended - Easiest)

#### **Railway** (Recommended for beginners)
- **Cost**: ~$5-20/month
- **Pros**: Easy setup, automatic SSL, PostgreSQL included
- **Steps**:
  1. Sign up at https://railway.app
  2. Create new project → Deploy from GitHub
  3. Add PostgreSQL service
  4. Set environment variables
  5. Deploy!

#### **Render**
- **Cost**: Free tier available, $7+/month for production
- **Pros**: Free tier, automatic SSL, PostgreSQL available
- **Steps**: Similar to Railway

#### **DigitalOcean App Platform**
- **Cost**: $5-12/month
- **Pros**: Good performance, easy scaling
- **Steps**: Deploy from GitHub, add database

#### **Heroku**
- **Cost**: $7+/month (no free tier anymore)
- **Pros**: Well-documented, many add-ons

### Option 2: VPS (Virtual Private Server)

#### **DigitalOcean Droplet**
- **Cost**: $6-12/month
- **Pros**: Full control, scalable
- **Cons**: Requires server management

#### **Linode / Akamai**
- **Cost**: $5-12/month
- **Pros**: Good performance, reliable

#### **AWS EC2 / Google Cloud / Azure**
- **Cost**: Pay-as-you-go
- **Pros**: Enterprise-grade, highly scalable
- **Cons**: More complex setup

## Step-by-Step Deployment

### Prerequisites

1. **Domain from GoDaddy** (you have this)
2. **GitHub account** (to host your code)
3. **Hosting service account** (choose one from above)

### Step 1: Prepare Your Code for Production

#### 1.1 Create a Production `.env` File

Create a `.env.production` file (don't commit this to Git):

```env
# Database (use production database URL from your hosting service)
DATABASE_URL=postgresql://user:password@host:port/database

# Server
PORT=5000
NODE_ENV=production

# Session Secret (generate a random string)
SESSION_SECRET=your-super-secret-random-string-here

# Optional: Email service (for contact forms)
RESEND_API_KEY=your_resend_api_key_here
```

**Generate a secure SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### 1.2 Update Production Server Configuration

The server is already configured to:
- Use `0.0.0.0` as host in production (allows external connections)
- Serve static files from `dist/public`
- Run on port specified in `PORT` environment variable

### Step 2: Deploy to Hosting Service

#### Using Railway (Example)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect Railway to GitHub**
   - Go to https://railway.app
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Add PostgreSQL Database**
   - In Railway dashboard, click "+ New" → "Database" → "PostgreSQL"
   - Railway will provide a `DATABASE_URL` automatically

4. **Set Environment Variables**
   - Go to your service → "Variables"
   - Add:
     - `DATABASE_URL` (from PostgreSQL service)
     - `NODE_ENV=production`
     - `PORT=5000` (or Railway's assigned port)
     - `SESSION_SECRET` (generate one)

5. **Configure Build & Start Commands**
   - Railway auto-detects Node.js projects
   - Build command: `npm run build`
   - Start command: `npm run start`

6. **Deploy**
   - Railway will automatically deploy
   - You'll get a URL like: `your-app.railway.app`

#### Using VPS (DigitalOcean Example)

1. **Create Droplet**
   - Choose Ubuntu 22.04
   - Minimum: 1GB RAM, 1 vCPU ($6/month)

2. **SSH into Server**
   ```bash
   ssh root@your-server-ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Install PostgreSQL**
   ```bash
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   sudo -u postgres createdb ehr_rcm
   ```

5. **Clone Your Repository**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   npm install
   ```

6. **Set Environment Variables**
   ```bash
   nano .env
   # Add your production environment variables
   ```

7. **Build and Start**
   ```bash
   npm run build
   npm run start
   ```

8. **Use PM2 for Process Management**
   ```bash
   sudo npm install -g pm2
   pm2 start dist/index.cjs --name ehr-rcm
   pm2 save
   pm2 startup  # Follow instructions to auto-start on reboot
   ```

### Step 3: Configure DNS (GoDaddy → Your Server)

1. **Get Your Server IP Address**
   - From Railway: Use the provided domain or get the IP
   - From VPS: Use your server's public IP

2. **Configure DNS in GoDaddy**
   - Log into GoDaddy
   - Go to "My Products" → "DNS" for your domain
   - Add/Edit DNS Records:

   **For Railway/Render (using their domain):**
   - Type: `CNAME`
   - Name: `@` (or `www`)
   - Value: `your-app.railway.app` (or your hosting service domain)
   - TTL: 3600

   **For VPS (using IP address):**
   - Type: `A`
   - Name: `@` (or `www`)
   - Value: `your-server-ip-address`
   - TTL: 3600

   **For both www and root:**
   - Add `A` or `CNAME` for `@` (root domain)
   - Add `CNAME` for `www` pointing to `@` or your root domain

3. **Wait for DNS Propagation**
   - Can take 24-48 hours (usually 1-2 hours)
   - Check with: https://dnschecker.org

### Step 4: Set Up SSL/HTTPS (Free with Let's Encrypt)

#### Using Railway/Render
- SSL is **automatic** - no action needed!

#### Using VPS with Nginx

1. **Install Nginx**
   ```bash
   sudo apt install nginx
   ```

2. **Install Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

3. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/ehr-rcm
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/ehr-rcm /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **Get SSL Certificate**
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

   Certbot will automatically:
   - Get SSL certificate
   - Configure Nginx for HTTPS
   - Set up auto-renewal

### Step 5: Set Up Database Schema

On your production server or via hosting dashboard:

```bash
npm run db:push
```

This will create all necessary tables in your production database.

## Environment Variables Checklist

Make sure these are set in production:

- ✅ `DATABASE_URL` - Production PostgreSQL connection string
- ✅ `NODE_ENV=production`
- ✅ `PORT` - Port number (usually 5000 or assigned by hosting)
- ✅ `SESSION_SECRET` - Random secure string
- ⚠️ `RESEND_API_KEY` - Optional, for email functionality

## Testing Your Deployment

1. **Check if site loads**: `https://yourdomain.com`
2. **Test API endpoints**: `https://yourdomain.com/api/contact`
3. **Check database connection**: Verify data is being saved
4. **Test SSL**: Should show padlock in browser

## Maintenance

### Updating Your Site

1. **Push changes to GitHub**
2. **Hosting service auto-deploys** (Railway/Render) OR
3. **On VPS**: `git pull && npm run build && pm2 restart ehr-rcm`

### Monitoring

- **Railway/Render**: Built-in monitoring dashboard
- **VPS with PM2**: `pm2 status`, `pm2 logs ehr-rcm`

## Troubleshooting

### Site Not Loading
- Check DNS propagation: https://dnschecker.org
- Verify server is running: `pm2 status` or check hosting dashboard
- Check firewall: Ensure port 80/443 is open

### Database Connection Errors
- Verify `DATABASE_URL` is correct
- Check database is accessible from your server
- Ensure database exists: `psql -U postgres -l`

### SSL Certificate Issues
- Wait 24-48 hours after DNS changes
- Verify DNS is pointing correctly
- Re-run certbot if needed

## Cost Estimate

**Minimum Setup:**
- Domain (GoDaddy): ~$12-15/year
- Hosting (Railway/Render): $5-20/month
- **Total: ~$60-240/year**

**VPS Setup:**
- Domain: ~$12-15/year
- VPS (DigitalOcean): $6-12/month
- **Total: ~$84-159/year**

## Recommended: Railway for Easy Deployment

Railway is the easiest option because:
- ✅ Automatic SSL certificates
- ✅ Built-in PostgreSQL
- ✅ Auto-deploys from GitHub
- ✅ Simple environment variable management
- ✅ Good free trial, then ~$5-20/month

## Next Steps

1. Choose your hosting service
2. Push your code to GitHub
3. Set up hosting and database
4. Configure DNS in GoDaddy
5. Wait for DNS propagation
6. Your site will be live! 🎉

Need help with a specific hosting service? Let me know!

