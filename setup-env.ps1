# Setup script for .env file and database
Write-Host "EHR-RCM Database Setup" -ForegroundColor Green
Write-Host "======================" -ForegroundColor Green
Write-Host ""

$psqlPath = "C:\Program Files\PostgreSQL\18\bin\psql.exe"

# Check if database exists
Write-Host "Checking if database 'ehr_rcm' exists..." -ForegroundColor Yellow
$password = Read-Host "Enter PostgreSQL 'postgres' user password" -AsSecureString
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($password)
$plainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)
$env:PGPASSWORD = $plainPassword

# Check if database exists
$checkDb = & $psqlPath -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname='ehr_rcm'" 2>&1

if ($checkDb -eq "1") {
    Write-Host "Database 'ehr_rcm' already exists!" -ForegroundColor Green
} else {
    Write-Host "Creating database 'ehr_rcm'..." -ForegroundColor Yellow
    $result = & $psqlPath -U postgres -c "CREATE DATABASE ehr_rcm;" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Database created successfully!" -ForegroundColor Green
    } else {
        Write-Host "Error: $result" -ForegroundColor Red
        Remove-Item Env:\PGPASSWORD
        exit 1
    }
}

# Create .env file
Write-Host ""
Write-Host "Creating .env file..." -ForegroundColor Yellow

$envContent = @"
# Database Configuration
DATABASE_URL=postgresql://postgres:$plainPassword@localhost:5432/ehr_rcm

# Server Configuration
PORT=5000

# Optional: Email Configuration (for contact forms)
# RESEND_API_KEY=your_resend_api_key_here
"@

$envContent | Out-File -FilePath .env -Encoding utf8 -NoNewline

Write-Host ".env file created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next step: Run 'npm run db:push' to set up the database schema" -ForegroundColor Cyan

Remove-Item Env:\PGPASSWORD

