Add-Type -AssemblyName System.Drawing

function Remove-WhiteBackground([string]$inputPath, [string]$outputPath) {
    Write-Host "Processing $inputPath -> $outputPath"
    $src = [System.Drawing.Bitmap]::FromFile($inputPath)
    $width = $src.Width
    $height = $src.Height

    $dest = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    
    # Copy source to destination
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.DrawImage($src, 0, 0, $width, $height)
    $g.Dispose()
    $src.Dispose()

    $rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
    $data = $dest.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $bytes = $data.Stride * $height
    $buffer = New-Object byte[] $bytes
    [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $buffer, 0, $bytes)

    # Visited grid for BFS flood fill
    $visited = New-Object 'bool[,]' $width, $height
    $queue = New-Object System.Collections.Generic.Queue[int]

    # Helper function to check if pixel is near-white background
    # BG in studio render is typically R,G,B > 240
    $isBg = {
        param([int]$x, [int]$y)
        $idx = ($y * $width + $x) * 4
        $b = $buffer[$idx]
        $g = $buffer[$idx + 1]
        $r = $buffer[$idx + 2]
        return ($r -ge 235 -and $g -ge 235 -and $b -ge 235)
    }

    # Seed all border pixels that are near-white
    for ($x = 0; $x -lt $width; $x++) {
        if (& $isBg $x 0) {
            $visited[$x, 0] = $true
            $queue.Enqueue(($x -shl 16) -bor 0)
        }
        if (& $isBg $x ($height - 1)) {
            $visited[$x, ($height - 1)] = $true
            $queue.Enqueue(($x -shl 16) -bor ($height - 1))
        }
    }
    for ($y = 0; $y -lt $height; $y++) {
        if (-not $visited[0, $y] -and (& $isBg 0 $y)) {
            $visited[0, $y] = $true
            $queue.Enqueue((0 -shl 16) -bor $y)
        }
        if (-not $visited[($width - 1), $y] -and (& $isBg ($width - 1) $y)) {
            $visited[($width - 1), $y] = $true
            $queue.Enqueue((($width - 1) -shl 16) -bor $y)
        }
    }

    # Directions: 4-connected
    $dx = @(1, -1, 0, 0)
    $dy = @(0, 0, 1, -1)

    while ($queue.Count -gt 0) {
        $p = $queue.Dequeue()
        $cx = $p -shr 16
        $cy = $p -band 0xFFFF

        # Set pixel alpha to 0 (fully transparent)
        $idx = ($cy * $width + $cx) * 4
        $buffer[$idx + 3] = 0

        for ($i = 0; $i -lt 4; $i++) {
            $nx = $cx + $dx[$i]
            $ny = $cy + $dy[$i]

            if ($nx -ge 0 -and $nx -lt $width -and $ny -ge 0 -and $ny -lt $height) {
                if (-not $visited[$nx, $ny] -and (& $isBg $nx $ny)) {
                    $visited[$nx, $ny] = $true
                    $queue.Enqueue(($nx -shl 16) -bor $ny)
                }
            }
        }
    }

    # Soft edge feathering: for pixels bordering transparent areas with brightness > 220
    for ($y = 1; $y -lt ($height - 1); $y++) {
        for ($x = 1; $x -lt ($width - 1); $x++) {
            $idx = ($y * $width + $x) * 4
            $a = $buffer[$idx + 3]
            if ($a -gt 0) {
                # Check if neighboring pixel is transparent
                $hasTransNeighbor = ($buffer[(($y - 1) * $width + $x) * 4 + 3] -eq 0 -or
                                     $buffer[(($y + 1) * $width + $x) * 4 + 3] -eq 0 -or
                                     $buffer[($y * $width + $x - 1) * 4 + 3] -eq 0 -or
                                     $buffer[($y * $width + $x + 1) * 4 + 3] -eq 0)
                if ($hasTransNeighbor) {
                    $b = [int]$buffer[$idx]
                    $g = [int]$buffer[$idx + 1]
                    $r = [int]$buffer[$idx + 2]
                    $minC = [Math]::Min($r, [Math]::Min($g, $b))
                    if ($minC -ge 220) {
                        # Feather alpha
                        $feather = [Math]::Max(0, [Math]::Min(255, [int]((255 - $minC) / 35.0 * 255)))
                        $buffer[$idx + 3] = [byte]$feather
                    }
                }
            }
        }
    }

    [System.Runtime.InteropServices.Marshal]::Copy($buffer, 0, $data.Scan0, $bytes)
    $dest.UnlockBits($data)

    $dest.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $dest.Dispose()
    Write-Host "Saved: $outputPath"
}

$imgDir = "C:\Users\microsoft\.gemini\antigravity\scratch\uploaded_project\public\images"
Remove-WhiteBackground "$imgDir\sejarah.jpg" "$imgDir\sejarah.png"
Remove-WhiteBackground "$imgDir\biologi.jpg" "$imgDir\biologi.png"
Remove-WhiteBackground "$imgDir\seni-tari.jpg" "$imgDir\seni-tari.png"
