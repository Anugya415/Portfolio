param(
    [Parameter(Mandatory=$true)]
    [int]$Port
)

Write-Host "Checking processes using port $Port..." -ForegroundColor Green
Write-Host ""

# Get TCP connections on the specified port
$connections = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue

if ($connections) {
    Write-Host "=== TCP Connections ===" -ForegroundColor Yellow
    $connections | Format-Table LocalAddress, LocalPort, RemoteAddress, RemotePort, State, OwningProcess -AutoSize
    
    Write-Host "=== Process Details ===" -ForegroundColor Yellow
    $processes = $connections | ForEach-Object { Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue } | Sort-Object Id -Unique
    
    foreach ($proc in $processes) {
        Write-Host "Process: $($proc.ProcessName) (PID: $($proc.Id))" -ForegroundColor Cyan
        Write-Host "Path: $($proc.Path)"
        Write-Host "Start Time: $($proc.StartTime)"
        Write-Host "Memory Usage: $([math]::Round($proc.WorkingSet64/1MB, 2)) MB"
        Write-Host ""
    }
} else {
    Write-Host "No processes found listening on port $Port" -ForegroundColor Red
}

# Also check UDP connections
$udpConnections = Get-NetUDPEndpoint -LocalPort $Port -ErrorAction SilentlyContinue
if ($udpConnections) {
    Write-Host "=== UDP Connections ===" -ForegroundColor Yellow
    $udpConnections | Format-Table LocalAddress, LocalPort, OwningProcess -AutoSize
}