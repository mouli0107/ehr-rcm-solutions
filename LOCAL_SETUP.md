# Local Development Setup Guide

This guide will help you set up and run the EHR-RCM Solutions website locally on your Windows machine.

## Prerequisites

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **PostgreSQL** - [Download here](https://www.postgresql.org/download/windows/)
   - Or use a cloud database service like Neon, Supabase, or Railway

## Step 1: Install Dependencies

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## Step 2: Set Up Database

You need a PostgreSQL database. You have two options:

### Option A: Local PostgreSQL

1. Install PostgreSQL on your Windows machine
2. Create a new database:
   ```sql
   CREATE DATABASE ehr_rcm;
   ```
3. Note your connection details (username, password, port)

### Option B: Cloud Database (Recommended for Quick Start)

Use a free cloud PostgreSQL service:
- **Neon**: https://neon.tech (free tier available)
- **Supabase**: https://supabase.com (free tier available)
- **Railway**: https://railway.app (free tier available)

## Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   copy .env.example .env
   ```

2. Edit `.env` and set your database connection string:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/ehr_rcm
   ```

   For cloud databases, use the connection string provided by your service.

3. (Optional) Set the port if you want to use a different port:
   ```
   PORT=5000
   ```

## Step 4: Set Up Database Schema

Run the database migrations to create the necessary tables:

```bash
npm run db:push
```

This will create all required tables in your database.

## Step 5: Start the Development Server

Run the development server:

```bash
npm run dev
```

The server will start on `http://localhost:5000` (or the port you specified in `.env`).

## Step 6: Access the Website

Open your browser and navigate to:
- **Local URL**: http://localhost:5000

## Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run dev:client` - Start only the Vite dev server (frontend only)
- `npm run build` - Build for production
- `npm run start` - Start production server (requires build first)
- `npm run db:push` - Push database schema changes
- `npm run check` - Type check TypeScript code

## Troubleshooting

### Database Connection Error

If you see "DATABASE_URL must be set":
- Make sure you created a `.env` file (not just `.env.example`)
- Verify your `DATABASE_URL` is correct
- Check that PostgreSQL is running (if using local database)

### Port Already in Use

If port 5000 is already in use:
- Change the `PORT` in your `.env` file
- Or stop the application using port 5000

### TypeScript Errors

Run type checking:
```bash
npm run check
```

## Production Build

To build for production:

```bash
npm run build
npm run start
```

## Need Help?

- Check the `replit.md` file for more technical details
- Review the error messages in the terminal
- Ensure all prerequisites are installed correctly

