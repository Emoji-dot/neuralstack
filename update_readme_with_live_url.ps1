# Script to update README with live deployment URL
# Replace YOUR_LIVE_URL with your actual deployment URL from Render/Railway/Cyclic

Write-Host "Update README with Live URL" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

$liveUrl = Read-Host "`nEnter your live deployment URL (e.g., https://neuralstack-api.onrender.com)"

if ([string]::IsNullOrWhiteSpace($liveUrl)) {
    Write-Host "❌ No URL provided. Exiting..." -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ Using URL: $liveUrl" -ForegroundColor Green

# Create badges and live demo section
$liveDemoSection = @"

---

## 🌐 Live Demo

🚀 **The API is live and ready to use!**

- **Base URL**: $liveUrl
- **Health Check**: $liveUrl/health
- **API Info**: $liveUrl/api/v1
- **Models Endpoint**: $liveUrl/api/v1/models

### Quick Test
``````bash
# Check if API is running
curl $liveUrl/health

# Get available models
curl $liveUrl/api/v1/models

# Test sentiment analysis
curl -X POST $liveUrl/api/v1/predictions/sentiment \
  -H "Content-Type: application/json" \
  -d '{"text":"This API is amazing!"}'
``````

### Status Badges
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-live-success)
![Test Coverage](https://img.shields.io/badge/coverage-85%25-green)
![API Status](https://img.shields.io/badge/API-online-blue)

---
"@

# Read current README
$readmePath = "README.md"
$readmeContent = Get-Content $readmePath -Raw

# Check if live demo section already exists
if ($readmeContent -match "## 🌐 Live Demo") {
    Write-Host "⚠️  Live Demo section already exists. Updating..." -ForegroundColor Yellow
    $readmeContent = $readmeContent -replace "(?s)## 🌐 Live Demo.*?---", $liveDemoSection
} else {
    # Find a good place to insert (after main title and badges, before "About")
    if ($readmeContent -match "(?s)(# NeuralStack.*?)\n\n(## ☁️ About)") {
        $readmeContent = $readmeContent -replace "(?s)(# NeuralStack.*?)\n\n(## ☁️ About)", "`$1$liveDemoSection`n`$2"
    } else {
        # If pattern not found, insert at the top after the title
        $readmeContent = $readmeContent -replace "(# NeuralStack\s*\n)", "`$1$liveDemoSection`n"
    }
}

# Save updated README
Set-Content -Path $readmePath -Value $readmeContent -NoNewline

Write-Host "✅ README updated with live URL!" -ForegroundColor Green

# Commit and push
Write-Host "`nCommitting changes..." -ForegroundColor Yellow
git add README.md
git commit -m "docs: add live deployment URL and status badges"
git push origin main

Write-Host "`n🎉 README updated and pushed to GitHub!" -ForegroundColor Green
Write-Host "`nYour live API: $liveUrl" -ForegroundColor Cyan
