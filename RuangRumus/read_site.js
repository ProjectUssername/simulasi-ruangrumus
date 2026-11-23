const fs = require('fs');
const html = fs.readFileSync('site.html', 'utf8');

// Look for Indonesian text or relevant keywords:
// pH, suhu, DO, COD, TSS, amonia, mutu air, leuwi, ekoriparian, dll.
const matches = [];
const lines = html.split('\n');
for (let line of lines) {
  if (line.includes('Ekoriparian') || line.includes('Kualitas Air') || line.includes('pH') || line.includes('Baku Mutu') || line.includes('DO') || line.includes('TDS') || line.includes('Suhu')) {
    matches.push(line.trim());
  }
}
console.log('Matches count:', matches.length);
fs.writeFileSync('site_matches.txt', matches.join('\n\n'));

// Let's also search for paragraphs or text blocks
// Google Sites usually puts text inside `siteData` or HTML spans
const cleanText = html.replace(/<[^>]+>/g, '\n').split('\n').map(l => l.trim()).filter(l => l.length > 5 && !l.includes('{') && !l.includes('function'));
fs.writeFileSync('site_text.txt', cleanText.join('\n'));
console.log('Saved site_text.txt with', cleanText.length, 'lines');
