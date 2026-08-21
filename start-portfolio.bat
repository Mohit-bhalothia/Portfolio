@echo off
echo ===================================================
echo   LAUNCHING MOHIT BHALOTHIA 3D DEVOPS PORTFOLIO
echo ===================================================
echo.
cd /d "%~dp0"
echo Starting local web server at http://localhost:5173 ...
cmd /c npm run dev
pause
