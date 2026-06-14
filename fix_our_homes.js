const fs = require('fs');
const path = require('path');

const worksDir = path.join(__dirname, 'public/assets/redesign/works');
const files = fs.readdirSync(worksDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png') || f.endsWith('.webp'));
const validImages = files.map(f => `/assets/redesign/works/${f}`);

const filePath = path.join(__dirname, 'app/our-homes/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the idx % 10 logic
const newImageLogic = `                  src={
                    [
                      ${validImages.slice(0, 30).map(img => `"${img}"`).join(',\n                      ')}
                    ][idx % ${Math.min(30, validImages.length)}]
                  }`;

content = content.replace(/src=\{\s*idx % 10 === 0 \?[\s\S]*?"\/assets\/redesign\/works\/075-04\.jpg"\s*\}/, newImageLogic);
fs.writeFileSync(filePath, content);
console.log('Fixed our-homes/page.tsx');
