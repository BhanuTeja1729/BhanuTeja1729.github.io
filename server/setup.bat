@echo off
echo Setting up server environment...
echo.

REM Check if .env already exists
if exist .env (
    echo .env file already exists!
    echo If you want to recreate it, delete the existing .env file first.
    pause
    exit /b
)

REM Create .env file
echo Creating .env file...
(
echo # Email Configuration
echo EMAIL_USER=bhanutejary02@gmail.com
echo EMAIL_APP_PASSWORD=
echo.
echo # Server Configuration
echo PORT=3001
) > .env

echo.
echo ✓ .env file created successfully!
echo.
echo IMPORTANT: You need to add your Gmail App Password to the .env file
echo.
echo Steps to get your Gmail App Password:
echo 1. Go to https://myaccount.google.com/
echo 2. Navigate to Security
echo 3. Enable 2-Step Verification (if not already enabled)
echo 4. Search for "App passwords"
echo 5. Create a new app password for "Mail"
echo 6. Copy the 16-character password
echo 7. Open server\.env and paste it after EMAIL_APP_PASSWORD=
echo.
echo After adding your app password, run: npm run dev
echo.
pause
