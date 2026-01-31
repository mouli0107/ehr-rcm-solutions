# Simple script to create .env file
# You'll need to manually add your PostgreSQL password

Write-Host "Creating .env file template..." -ForegroundColor Yellow
Write-Host ""

# Get password from user
$password = Read-Host "Enter your PostgreSQL 'postgres' user password"

# Create .env file
$envContent = @"
# Database Configuration
DATABASE_URL=postgresql://postgres:$password@localhost:5432/ehr_rcm

# Server Configuration
PORT=5000

# Optional: Email Configuration (for contact forms)
# RESEND_API_KEY=your_resend_api_key_here
"@

$envContent | Out-File -FilePath .env -Encoding utf8 -NoNewline

Write-Host ""
Write-Host ".env file created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Verify the database exists (run: psql -U postgres -c `"CREATE DATABASE ehr_rcm;`")" -ForegroundColor White
Write-Host "2. Run: npm run db:push" -ForegroundColor White
Write-Host "3. Run: npm run dev" -ForegroundColor White

