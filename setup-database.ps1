# PowerShell script to help set up the database
# Run this after PostgreSQL is installed

Write-Host "PostgreSQL Database Setup Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# Check if PostgreSQL is installed
$pgPaths = @(
    "C:\Program Files\PostgreSQL\15\bin\psql.exe",
    "C:\Program Files\PostgreSQL\16\bin\psql.exe",
    "C:\Program Files\PostgreSQL\14\bin\psql.exe",
    "C:\Program Files (x86)\PostgreSQL\15\bin\psql.exe",
    "C:\Program Files (x86)\PostgreSQL\16\bin\psql.exe"
)

$psqlPath = $null
foreach ($path in $pgPaths) {
    if (Test-Path $path) {
        $psqlPath = $path
        Write-Host "Found PostgreSQL at: $path" -ForegroundColor Green
        break
    }
}

if (-not $psqlPath) {
    Write-Host "PostgreSQL not found in common locations." -ForegroundColor Yellow
    Write-Host "Please install PostgreSQL first:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://www.postgresql.org/download/windows/" -ForegroundColor Cyan
    Write-Host "2. Install PostgreSQL (remember your postgres user password)" -ForegroundColor Cyan
    Write-Host "3. Run this script again" -ForegroundColor Cyan
    exit 1
}

Write-Host ""
Write-Host "This script will help you create the 'ehr_rcm' database." -ForegroundColor Yellow
Write-Host ""

# Prompt for database password
$password = Read-Host "Enter PostgreSQL 'postgres' user password" -AsSecureString
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($password)
$plainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

# Set environment variable for password
$env:PGPASSWORD = $plainPassword

Write-Host ""
Write-Host "Creating database 'ehr_rcm'..." -ForegroundColor Yellow

# Create database
$createDbCommand = "CREATE DATABASE ehr_rcm;"
$result = & $psqlPath -U postgres -c $createDbCommand 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "Database 'ehr_rcm' created successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Update your .env file with:" -ForegroundColor Cyan
    Write-Host "   DATABASE_URL=postgresql://postgres:$plainPassword@localhost:5432/ehr_rcm" -ForegroundColor White
    Write-Host ""
    Write-Host "2. Run: npm run db:push" -ForegroundColor Cyan
    Write-Host "3. Run: npm run dev" -ForegroundColor Cyan
} else {
    Write-Host "Error creating database:" -ForegroundColor Red
    Write-Host $result -ForegroundColor Red
    Write-Host ""
    Write-Host "Common issues:" -ForegroundColor Yellow
    Write-Host "- Database might already exist (that's okay!)" -ForegroundColor Yellow
    Write-Host "- Check your password" -ForegroundColor Yellow
    Write-Host "- Make sure PostgreSQL service is running" -ForegroundColor Yellow
}

# Clear password from environment
Remove-Item Env:\PGPASSWORD

