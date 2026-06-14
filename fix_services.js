const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'public/assets/redesign/services');
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
const validImages = files.map(f => `/assets/redesign/services/${f}`);

const filePath = path.join(__dirname, 'app/services/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const projectsRegex = /img:\s*"(\/assets\/redesign\/[^"]+)"/g;
let i = 10; // offset to get nice images
content = content.replace(projectsRegex, (match, p1) => {
  return `img: "${validImages[i++] || validImages[0]}"`;
});

fs.writeFileSync(filePath, content);
console.log('Fixed services/page.tsx');
