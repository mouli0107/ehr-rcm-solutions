# PostgreSQL Setup Guide for Windows

## Step 1: Install PostgreSQL

1. **Download PostgreSQL**:
   - Go to https://www.postgresql.org/download/windows/
   - Click "Download the installer" (recommended: PostgreSQL 15 or 16)
   - Or use the direct link: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

2. **Run the Installer**:
   - Run the downloaded `.exe` file
   - Follow the installation wizard
   - **Important**: Remember the password you set for the `postgres` superuser account
   - Default port is `5432` (keep this unless you have a conflict)
   - Default installation location: `C:\Program Files\PostgreSQL\15` (version may vary)

3. **Complete Installation**:
   - The installer will set up PostgreSQL and may offer to install additional tools
   - You can skip Stack Builder if you don't need additional tools

## Step 2: Verify Installation

After installation, PostgreSQL should be running as a Windows service. You can verify by:

1. Opening **Services** (Win + R, type `services.msc`)
2. Look for "postgresql-x64-15" (or similar) - it should be "Running"

## Step 3: Add PostgreSQL to PATH (Optional but Recommended)

This makes it easier to use PostgreSQL commands from any terminal:

1. Open **System Properties** → **Environment Variables**
2. Under "System variables", find and select "Path", then click "Edit"
3. Click "New" and add:
   ```
   C:\Program Files\PostgreSQL\15\bin
   ```
   (Replace `15` with your PostgreSQL version number)
4. Click "OK" to save
5. **Restart your terminal** for changes to take effect

## Step 4: Create Database

Once PostgreSQL is installed, you can create the database using one of these methods:

### Method A: Using pgAdmin (GUI - Recommended for beginners)

1. Open **pgAdmin 4** (installed with PostgreSQL)
2. Connect to your server (use the password you set during installation)
3. Right-click on "Databases" → "Create" → "Database"
4. Name: `ehr_rcm`
5. Click "Save"

### Method B: Using Command Line

Open a new terminal (PowerShell or Command Prompt) and run:

```bash
# Connect to PostgreSQL (you'll be prompted for the postgres user password)
psql -U postgres

# Once connected, run these SQL commands:
CREATE DATABASE ehr_rcm;

# Exit psql
\q
```

### Method C: Using SQL Command Directly

```bash
psql -U postgres -c "CREATE DATABASE ehr_rcm;"
```

## Step 5: Configure Your .env File

After creating the database, update your `.env` file with:

```
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/ehr_rcm
```

Replace `YOUR_PASSWORD` with the password you set during PostgreSQL installation.

## Troubleshooting

### Can't find psql command
- PostgreSQL may not be in your PATH (see Step 3 above)
- Or use the full path: `"C:\Program Files\PostgreSQL\15\bin\psql.exe" -U postgres`

### Connection refused
- Make sure PostgreSQL service is running (check Services)
- Verify the port (default is 5432)

### Authentication failed
- Double-check your password
- Default user is `postgres`

### Port already in use
- Another PostgreSQL instance might be running
- Check Services and stop duplicate instances

