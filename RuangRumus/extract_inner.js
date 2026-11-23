const fs = require('fs');
const s = fs.readFileSync('site.html', 'utf8');

// Find where Tailwind or 'Ekoriparian Unpad Jatinangor' or 'Sistem Pemantauan Kualitas Air' appears in the raw source
const idx = s.indexOf('Ekoriparian Unpad Jatinangor');
console.log('Found index:', idx);

// Search for &lt;!DOCTYPE html&gt; or &lt;html
const startIdx = s.indexOf('&lt;!DOCTYPE html&gt;');
console.log('startIdx (&lt;!DOCTYPE html&gt;):', startIdx);

if (startIdx !== -1) {
  const endIdx = s.indexOf('&lt;/html&gt;', startIdx);
  console.log('endIdx (&lt;/html&gt;):', endIdx);
  const snippet = s.substring(startIdx, endIdx + 11);
  
  function decode(str) {
    return str
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }
  
  const decoded = decode(snippet);
  fs.writeFileSync('C:/Users/microsoft/.gemini/antigravity/scratch/inner_dashboard.html', decoded);
  console.log('Successfully written inner_dashboard.html, size:', decoded.length);
} else {
  // Let's check where '<!DOCTYPE' appears
  const dIdx = s.indexOf('<!DOCTYPE');
  console.log('Regular <!DOCTYPE index:', dIdx);
}
