@echo off
REM Windows equivalent of lsof -i :port
REM Usage: lsof-port.cmd port_number

if "%1"=="" (
    echo Usage: %0 port_number
    echo Example: %0 8080
    exit /b 1
)

echo Checking processes using port %1...
echo.

REM Using netstat to find processes on the specified port
echo === TCP Connections ===
netstat -ano | findstr ":%1"

echo.
echo === Process Details ===
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%1"') do (
    if not "%%a"=="0" (
        echo Process ID: %%a
        tasklist /fi "PID eq %%a" /fo table
        echo.
    )
)