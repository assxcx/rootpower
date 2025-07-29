const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Real plant images from different sources
const plantImages = [
  {
    name: 'monstera-thai-constellation.jpg',
    url: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=800&h=600&fit=crop&crop=center'
  },
  {
    name: 'philodendron-pink-princess.jpg',
    url: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=800&h=600&fit=crop&crop=center'
  },
  {
    name: 'fiddle-leaf-fig.jpg',
    url: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=800&h=600&fit=crop&crop=center'
  },
  {
    name: 'string-of-pearls.jpg',
    url: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=800&h=600&fit=crop&crop=center'
  },
  {
    name: 'monstera-leaf.jpg',
    url: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=800&h=600&fit=crop&crop=center'
  }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);
    
    const request = https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        // Check if file was actually written
        const stats = fs.statSync(filepath);
        if (stats.size < 1000) { // If file is too small, it's probably an error
          fs.unlinkSync(filepath);
          reject(new Error('Downloaded file is too small, likely an error page'));
          return;
        }
        console.log(`✅ Downloaded: ${filename} (${stats.size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if there was an error
      console.error(`❌ Error downloading ${filename}:`, err.message);
      reject(err);
    });
    
    request.setTimeout(15000, () => {
      request.destroy();
      reject(new Error('Download timeout'));
    });
  });
}

async function downloadAllImages() {
  console.log('🌱 Downloading real plant images...');
  
  for (const image of plantImages) {
    try {
      await downloadImage(image.url, image.name);
    } catch (error) {
      console.error(`Failed to download ${image.name}:`, error.message);
    }
  }
  
  console.log('🎉 All real plant images downloaded successfully!');
}

downloadAllImages();
