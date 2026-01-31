# Hosting Your Website Publicly from Your Local Laptop

This guide shows you how to make your locally running website accessible to anyone on the internet.

## ⚠️ Important Security Considerations

Before exposing your local server publicly:
- ✅ Use strong passwords for your database
- ✅ Set a secure `SESSION_SECRET`
- ✅ Consider using HTTPS (via tunneling services)
- ✅ Keep your server and dependencies updated
- ✅ Monitor access logs
- ⚠️ Your laptop must be running for the site to be accessible
- ⚠️ Your internet connection speed affects site performance

## Option 1: Tunneling Services (Easiest - Recommended)

These services create a secure tunnel from the internet to your local server. **No router configuration needed!**

### A. Cloudflare Tunnel (Free, Recommended)

**Pros**: Free, secure, HTTPS included, no port forwarding needed
**Cons**: Requires Cloudflare account

#### Setup Steps:

1. **Install Cloudflare Tunnel**
   ```powershell
   # Download from: https://github.com/cloudflare/cloudflared/releases
   # Or use winget:
   winget install --id Cloudflare.cloudflared
   ```

2. **Authenticate**
   ```powershell
   cloudflared tunnel login
   ```

3. **Create a Tunnel**
   ```powershell
   cloudflared tunnel create ehr-rcm
   ```

4. **Create Config File**
   Create `config.yml` in your project:
   ```yaml
   tunnel: <tunnel-id-from-step-3>
   ingress:
     - hostname: yourdomain.com
       service: http://localhost:5000
     - service: http_status:404
   ```

5. **Run the Tunnel**
   ```powershell
   cloudflared tunnel --config config.yml run
   ```

6. **Configure DNS in GoDaddy**
   - Go to GoDaddy DNS settings
   - Add CNAME record:
     - Name: `@` (or `www`)
     - Value: `<tunnel-id>.cfargotunnel.com`
     - TTL: Auto

### B. ngrok (Free tier available)

**Pros**: Very easy, instant setup, HTTPS included
**Cons**: Free tier has limitations (random URLs, connection limits)

#### Setup Steps:

1. **Sign up and Install**
   - Sign up at https://ngrok.com
   - Download ngrok for Windows
   - Or use: `winget install ngrok.ngrok`

2. **Get Your Authtoken**
   - From ngrok dashboard: https://dashboard.ngrok.com/get-started/your-authtoken
   - Run: `ngrok config add-authtoken YOUR_TOKEN`

3. **Start Tunnel**
   ```powershell
   ngrok http 5000
   ```

4. **Use the Provided URL**
   - ngrok gives you a URL like: `https://abc123.ngrok.io`
   - This is your public URL!
   - Share this with anyone

5. **For Custom Domain (Paid Plan)**
   - Upgrade to paid plan
   - Configure custom domain in ngrok dashboard
   - Point GoDaddy DNS to ngrok

### C. LocalTunnel (Free)

**Pros**: Completely free, no signup required
**Cons**: URLs change each time, less reliable

#### Setup Steps:

1. **Install**
   ```powershell
   npm install -g localtunnel
   ```

2. **Start Tunnel**
   ```powershell
   lt --port 5000
   ```

3. **Use the Provided URL**
   - You'll get a URL like: `https://random-name.loca.lt`
   - Share this URL

### D. Serveo (Free, SSH-based)

**Pros**: Free, no installation needed
**Cons**: Less reliable, URLs can change

#### Setup Steps:

```powershell
ssh -R 80:localhost:5000 serveo.net
```

## Option 2: Port Forwarding + Dynamic DNS (Advanced)

This makes your local server directly accessible via your public IP.

### Requirements:
- Router admin access
- Static IP or Dynamic DNS service
- Port forwarding configuration

### Setup Steps:

1. **Configure Your Router**
   - Access router admin (usually `192.168.1.1` or `192.168.0.1`)
   - Go to "Port Forwarding" or "Virtual Server"
   - Forward:
     - External Port: `80` (HTTP) and `443` (HTTPS)
     - Internal IP: Your laptop's local IP (find with `ipconfig`)
     - Internal Port: `5000`
     - Protocol: TCP

2. **Set Up Dynamic DNS** (if your IP changes)
   - Sign up for free DDNS: https://www.noip.com or https://duckdns.org
   - Install DDNS client on your laptop
   - Get a hostname like: `yourname.ddns.net`

3. **Point GoDaddy DNS to Your IP**
   - Find your public IP: https://whatismyipaddress.com
   - In GoDaddy DNS, add A record:
     - Name: `@`
     - Value: Your public IP
     - TTL: 300

4. **Set Up SSL (Let's Encrypt)**
   - Use Certbot or similar
   - Requires port 80 to be accessible

5. **Configure Windows Firewall**
   ```powershell
   # Allow incoming connections on port 5000
   New-NetFirewallRule -DisplayName "EHR-RCM Server" -Direction Inbound -LocalPort 5000 -Protocol TCP -Action Allow
   ```

## Option 3: Hybrid Approach (Best of Both)

Use a tunneling service for now, then move to proper hosting later.

## Recommended Setup for You

### Quick Start (5 minutes): ngrok

1. **Install ngrok**
   ```powershell
   winget install ngrok.ngrok
   ```

2. **Start your server** (if not already running)
   ```powershell
   npm run dev
   ```

3. **In a new terminal, start ngrok**
   ```powershell
   ngrok http 5000
   ```

4. **Copy the HTTPS URL** (e.g., `https://abc123.ngrok.io`)

5. **Share this URL** - it's publicly accessible!

### For Custom Domain: Cloudflare Tunnel

1. Follow Cloudflare Tunnel setup above
2. Point your GoDaddy domain to the tunnel
3. Your site will be accessible at `yourdomain.com`

## Keeping Your Server Running

### Option A: Keep Terminal Open
- Simple but requires laptop to stay on and terminal open

### Option B: Run as Windows Service

1. **Install PM2 for Windows**
   ```powershell
   npm install -g pm2
   npm install -g pm2-windows-startup
   ```

2. **Start Your Server with PM2**
   ```powershell
   pm2 start "npm run dev" --name ehr-rcm
   pm2 save
   pm2-startup install
   ```

3. **PM2 Commands**
   ```powershell
   pm2 status          # Check status
   pm2 logs ehr-rcm     # View logs
   pm2 restart ehr-rcm # Restart
   pm2 stop ehr-rcm    # Stop
   ```

### Option C: Use Windows Task Scheduler
- Create a task to run `npm run dev` on startup
- Less recommended (harder to manage)

## Production Considerations

### 1. Use Production Build
Instead of `npm run dev`, use:
```powershell
npm run build
npm run start
```

### 2. Set Production Environment Variables
Create `.env` with:
```env
NODE_ENV=production
DATABASE_URL=your_production_database_url
PORT=5000
SESSION_SECRET=your_secure_random_string
```

### 3. Use a Production Database
- Don't use your local PostgreSQL for production
- Use a cloud database (Neon, Supabase, Railway PostgreSQL)
- Update `DATABASE_URL` in `.env`

### 4. Set Up Monitoring
- Monitor server uptime
- Set up alerts if server goes down
- Monitor resource usage (CPU, memory)

## Security Checklist

- [ ] Strong database password
- [ ] Secure SESSION_SECRET (random 32+ characters)
- [ ] HTTPS enabled (via tunneling service)
- [ ] Firewall configured
- [ ] Regular backups
- [ ] Keep dependencies updated
- [ ] Monitor access logs

## Troubleshooting

### "Connection Refused"
- Check if server is running: `netstat -ano | findstr :5000`
- Check Windows Firewall settings
- Verify port forwarding (if using that method)

### "Site Not Loading"
- Check tunnel is running (if using tunneling)
- Verify DNS propagation (can take 1-24 hours)
- Check router port forwarding rules

### "SSL Certificate Error"
- Use HTTPS URL from tunneling service
- For custom domain, ensure SSL is properly configured

## Cost Comparison

| Method | Cost | Difficulty | Reliability |
|--------|------|------------|-------------|
| ngrok (free) | Free | Easy | Medium |
| ngrok (paid) | $8/month | Easy | High |
| Cloudflare Tunnel | Free | Medium | High |
| Port Forwarding | Free | Hard | Medium |
| Cloud Hosting | $5-20/month | Easy | Very High |

## Recommendation

**For quick testing**: Use **ngrok** (free tier)
**For production with custom domain**: Use **Cloudflare Tunnel** (free) or deploy to **Railway/Render** ($5-20/month)

## Next Steps

1. Choose your method (I recommend ngrok for quick start)
2. Set up the tunnel/port forwarding
3. Test from another device/network
4. Configure your GoDaddy domain (if using custom domain)
5. Keep your server running!

Need help setting up a specific method? Let me know!

