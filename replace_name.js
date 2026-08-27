const fs = require('fs');
const files = [
  'src/app/about/page.tsx',
  'src/components/home/AboutMe.tsx',
  'src/components/home/Hero.tsx',
  'src/components/home/Skills.tsx',
  'next.config.ts'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\/shamildev-crm/g, '/portfolio');
  fs.writeFileSync(file, content);
});
console.log('Replaced successfully!');
