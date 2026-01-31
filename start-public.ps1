# PowerShell script to start your server and ngrok tunnel
# This makes your local server publicly accessible

Write-Host "Starting EHR-RCM Server for Public Access" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Check if ngrok is installed
$ngrokInstalled = Get-Command ngrok -ErrorAction SilentlyContinue

if (-not $ngrokInstalled) {
    Write-Host "ngrok is not installed!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Install it with one of these methods:" -ForegroundColor Cyan
    Write-Host "1. winget install ngrok.ngrok" -ForegroundColor White
    Write-Host "2. Download from: https://ngrok.com/download" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use Cloudflare Tunnel (free, better for production)" -ForegroundColor Cyan
    exit 1
}

# Check if server is already running
$serverRunning = Get-Process -Name node -ErrorAction SilentlyContinue

if ($serverRunning) {
    Write-Host "Node.js process detected. Stopping existing server..." -ForegroundColor Yellow
    Stop-Process -Name node -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
}

# Start the server in background
Write-Host "Starting server on port 5000..." -ForegroundColor Cyan
$serverJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    $env:NODE_ENV = "development"
    npm run dev
}

Start-Sleep -Seconds 5

# Check if server started
$portCheck = netstat -ano | findstr :5000
if (-not $portCheck) {
    Write-Host "Error: Server failed to start on port 5000" -ForegroundColor Red
    Stop-Job $serverJob
    Remove-Job $serverJob
    exit 1
}

Write-Host "Server is running!" -ForegroundColor Green
Write-Host ""

# Start ngrok
Write-Host "Starting ngrok tunnel..." -ForegroundColor Cyan
Write-Host "Your public URL will appear below:" -ForegroundColor Yellow
Write-Host ""

# Start ngrok in a new window so you can see the URL
Start-Process ngrok -ArgumentList "http", "5000"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "1. Check the ngrok window for your public URL" -ForegroundColor Cyan
Write-Host "2. The URL will look like: https://abc123.ngrok.io" -ForegroundColor White
Write-Host "3. Share this URL to access your site publicly" -ForegroundColor White
Write-Host ""
Write-Host "To stop:" -ForegroundColor Yellow
Write-Host "  - Close this window" -ForegroundColor White
Write-Host "  - Or press Ctrl+C and close ngrok window" -ForegroundColor White
Write-Host ""

# Keep script running
try {
    Wait-Job $serverJob
} catch {
    Write-Host "Server stopped." -ForegroundColor Yellow
    Stop-Job $serverJob -ErrorAction SilentlyContinue
    Remove-Job $serverJob -ErrorAction SilentlyContinue
}

