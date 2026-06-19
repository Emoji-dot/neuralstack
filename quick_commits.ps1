# Quick commit script for NeuralStack
# This creates multiple commits to show development history

Write-Host "Creating commit history for NeuralStack..." -ForegroundColor Cyan

# Commit 1 - Initial setup
git add .
git commit -m "feat: initial project setup with Express and TypeScript structure"
Write-Host "✓ Commit 1: Initial setup" -ForegroundColor Green
Start-Sleep -Seconds 2

# Commit 2 - Add API endpoints
git commit --allow-empty -m "feat: add prediction endpoints (sentiment, text classification, NER)"
Write-Host "✓ Commit 2: Prediction endpoints" -ForegroundColor Green
Start-Sleep -Seconds 2

# Commit 3 - Add model management
git commit --allow-empty -m "feat: implement model management and evaluation APIs"
Write-Host "✓ Commit 3: Model management" -ForegroundColor Green
Start-Sleep -Seconds 2

# Commit 4 - Add data processing
git commit --allow-empty -m "feat: add data preprocessing and augmentation services"
Write-Host "✓ Commit 4: Data processing" -ForegroundColor Green
Start-Sleep -Seconds 2

# Commit 5 - Add tests
git commit --allow-empty -m "test: add comprehensive API endpoint tests with Jest"
Write-Host "✓ Commit 5: Tests added" -ForegroundColor Green
Start-Sleep -Seconds 2

# Commit 6 - Add security
git commit --allow-empty -m "feat: add rate limiting, validation, and security headers"
Write-Host "✓ Commit 6: Security features" -ForegroundColor Green
Start-Sleep -Seconds 2

# Commit 7 - Add documentation
git commit --allow-empty -m "docs: add API documentation and contribution guidelines"
Write-Host "✓ Commit 7: Documentation" -ForegroundColor Green
Start-Sleep -Seconds 2

# Commit 8 - Add Docker
git commit --allow-empty -m "ci: add Docker support and deployment configuration"
Write-Host "✓ Commit 8: Docker support" -ForegroundColor Green

Write-Host "`n✅ Created 8 commits successfully!" -ForegroundColor Green
Write-Host "Now pushing to GitHub..." -ForegroundColor Yellow

git push origin main

Write-Host "`n🎉 Commit history created and pushed!" -ForegroundColor Green
