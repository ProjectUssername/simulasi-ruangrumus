const fs = require('fs');
const s = fs.readFileSync('site.html', 'utf8');

// Find all URLs
const urls = s.match(/https?:\/\/[^\s"'<>]+/gi) || [];
const uniqueUrls = Array.from(new Set(urls));
console.log('Total URLs found:', uniqueUrls.length);

const googleUrls = uniqueUrls.filter(u => 
  u.includes('docs.google.com') || 
  u.includes('drive.google.com') || 
  u.includes('lookerstudio.google.com') || 
  u.includes('datastudio.google.com') || 
  u.includes('spreadsheets') ||
  u.includes('forms') ||
  u.includes('view/sistem-pemantauan-kualitas-air')
);
console.log('Google specific URLs:', JSON.stringify(googleUrls, null, 2));

// Search for any Indonesian words in the entire file
const indoMatches = s.match(/[A-Z][a-z]+ (?:Air|Kualitas|Ekoriparian|Leuwi|Padjadjaran|Suhu|Baku Mutu|Parameter)[^"<>\\]*/g);
console.log('Indo phrase matches:', indoMatches);
