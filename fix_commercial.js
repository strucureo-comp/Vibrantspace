const fs = require('fs');
const path = require('path');

const commercialDir = path.join(__dirname, 'public/assets/redesign/commercial');
const files = fs.readdirSync(commercialDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
const validImages = files.map(f => `/assets/redesign/commercial/${f}`);

const filePath = path.join(__dirname, 'app/commercial-interiors/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The hero image
content = content.replace(/\/assets\/redesign\/commercial\/011-Retail02-18\.png/g, validImages[0] || "/assets/redesign/commercial/048-Artboard-10-100-2.jpg");

// The project images
const projectsRegex = /img:\s*"(\/assets\/redesign\/[^"]+)"/g;
let i = 1;
content = content.replace(projectsRegex, (match, p1) => {
  return `img: "${validImages[i++] || validImages[0]}"`;
});

fs.writeFileSync(filePath, content);
console.log('Fixed commercial-interiors/page.tsx');
