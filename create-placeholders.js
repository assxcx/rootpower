const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create simple SVG placeholders for plants
const plantPlaceholders = [
  {
    name: 'monstera-thai-constellation.jpg',
    color: '#2d5016',
    text: 'Monstera'
  },
  {
    name: 'philodendron-pink-princess.jpg',
    color: '#4a7c59',
    text: 'Philodendron'
  },
  {
    name: 'fiddle-leaf-fig.jpg',
    color: '#3d5a40',
    text: 'Fiddle Leaf'
  },
  {
    name: 'string-of-pearls.jpg',
    color: '#6b8e23',
    text: 'String of Pearls'
  },
  {
    name: 'monstera-leaf.jpg',
    color: '#556b2f',
    text: 'Monstera Leaf'
  }
];

function createSVGPlaceholder(color, text, filename) {
  const svg = `
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="${color}"/>
  <circle cx="200" cy="120" r="40" fill="white" opacity="0.2"/>
  <text x="200" y="180" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">🌿</text>
  <text x="200" y="220" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">${text}</text>
  <text x="200" y="240" font-family="Arial, sans-serif" font-size="12" fill="white" opacity="0.8" text-anchor="middle">Plant Image</text>
</svg>`;

  const filepath = path.join(imagesDir, filename.replace('.jpg', '.svg'));
  fs.writeFileSync(filepath, svg);
  console.log(`✅ Created: ${filename.replace('.jpg', '.svg')}`);
}

// Create all placeholders
console.log('🌱 Creating plant image placeholders...');

plantPlaceholders.forEach(plant => {
  createSVGPlaceholder(plant.color, plant.text, plant.name);
});

console.log('🎉 All placeholders created successfully!'); 