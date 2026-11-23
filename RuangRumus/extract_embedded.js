const fs = require('fs');
const s = fs.readFileSync('site.html', 'utf8');

// The embedded code starts with <!DOCTYPE html> or <html or similar, or is escaped with &lt;
// Let's decode HTML entities
function decodeHtmlEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

const unescaped = decodeHtmlEntities(s);

// Look for <!DOCTYPE html> or <html> in unescaped
const docTypeIdx = unescaped.indexOf('<!DOCTYPE html>');
if (docTypeIdx !== -1) {
  const endHtmlIdx = unescaped.indexOf('</html>', docTypeIdx);
  const embeddedHtml = unescaped.substring(docTypeIdx, endHtmlIdx !== -1 ? endHtmlIdx + 7 : undefined);
  fs.writeFileSync('embedded_site.html', embeddedHtml);
  console.log('Successfully saved embedded_site.html, length:', embeddedHtml.length);
} else {
  console.log('<!DOCTYPE html> not found, searching <html>');
  const htmlIdx = unescaped.indexOf('<html');
  console.log('htmlIdx:', htmlIdx);
}
