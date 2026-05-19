# PowerShell Static File Web Server using HttpListener
# Serves files on http://localhost:8000/

$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   NINTENDO FAN STORE LOCAL DEV SERVER   " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Starting server on http://localhost:$port/..." -ForegroundColor Green
Write-Host "Press Ctrl+C in this terminal to stop the server." -ForegroundColor Yellow

try {
    $listener.Start()
    Write-Host "Server is listening..." -ForegroundColor Green
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath
        # Default document
        if ($localPath -eq "/") { $localPath = "/index.html" }
        
        # Build local file path
        # Translate URL path separation to local OS separation
        $cleanPath = $localPath.Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = Join-Path (Get-Location) $cleanPath
        
        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".gif"  { "image/gif" }
                ".svg"  { "image/svg+xml" }
                ".ico"  { "image/x-icon" }
                default { "application/octet-stream" }
            }
            
            Write-Host "[200] Serving $localPath -> $contentType" -ForegroundColor DarkGreen
            $response.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            Write-Host "[404] Not Found: $localPath" -ForegroundColor Red
            $response.StatusCode = 404
            $response.ContentType = "text/plain; charset=utf-8"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 File Not Found - Nintendo Fan Store")
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Host "Server Error: $_" -ForegroundColor Red
} finally {
    $listener.Stop()
    Write-Host "Server Stopped." -ForegroundColor Yellow
}
