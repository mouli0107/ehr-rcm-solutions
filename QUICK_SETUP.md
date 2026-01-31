# Quick Setup Guide

Since the automated script requires interactive input, here's a simple manual setup:

## Step 1: Create the Database

Open a **new PowerShell terminal** and run:

```powershell
# Connect to PostgreSQL (you'll be prompted for password)
"C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres

# Once connected, run:
CREATE DATABASE ehr_rcm;

# Exit
\q
```

Or in one command:
```powershell
"C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres -c "CREATE DATABASE ehr_rcm;"
```

## Step 2: Create .env File

In your project directory, create a file named `.env` with this content:

```
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/ehr_rcm
PORT=5000
```

**Replace `YOUR_PASSWORD` with your actual PostgreSQL postgres user password.**

## Step 3: Set Up Database Schema

```powershell
npm run db:push
```

## Step 4: Start the Server

```powershell
npm run dev
```

## Alternative: Use the create-env.ps1 script

If you want to use a script, run this in your **own terminal** (not through the tool):

```powershell
.\create-env.ps1
```

This will prompt you for your password and create the .env file automatically.

