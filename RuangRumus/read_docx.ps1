Add-Type -AssemblyName System.IO.Compression.FileSystem
$docPath = 'C:\Users\microsoft\.gemini\antigravity\brain\436165e0-cf12-48fa-9100-1dd846cdb8d7\.user_uploaded\media_1795429478597_045a75f4.docx'
$zip = [System.IO.Compression.ZipFile]::OpenRead($docPath)
$entry = $zip.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()
$text = [regex]::Replace($xml, '<w:p[ >]', "`n")
$clean = [regex]::Replace($text, '<[^>]+>', '')
[System.IO.File]::WriteAllText('C:\Users\microsoft\.gemini\antigravity\scratch\docx_text.txt', $clean)
Write-Output "DOCX LENGTH: $($clean.Length)"
