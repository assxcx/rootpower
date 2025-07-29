const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const inputPath = './public/videos/AdobeStock_621309970.mov';
const outputPath = './public/videos/AdobeStock_621309970.mp4';

console.log('🎬 Converting video to MP4 for web...');
console.log('Input:', inputPath);
console.log('Output:', outputPath);

// Check if input file exists
if (!fs.existsSync(inputPath)) {
  console.error('❌ Input video file not found!');
  console.log('Please make sure the video is in:', inputPath);
  process.exit(1);
}

// FFmpeg command for optimal web video
const ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" "${outputPath}"`;

console.log('🔄 Converting... This may take a few minutes...');

exec(ffmpegCommand, (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Conversion failed:', error.message);
    console.log('\n💡 Alternative solutions:');
    console.log('1. Install FFmpeg: https://ffmpeg.org/download.html');
    console.log('2. Use online converter: https://convertio.co/mov-mp4/');
    console.log('3. Use HandBrake: https://handbrake.fr/');
    return;
  }
  
  if (stderr) {
    console.log('FFmpeg output:', stderr);
  }
  
  console.log('✅ Video converted successfully!');
  
  // Check file size
  const stats = fs.statSync(outputPath);
  const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`📁 New file size: ${fileSizeInMB} MB`);
  
  if (fileSizeInMB < 50) {
    console.log('🎉 Perfect! File size is optimized for web.');
  } else {
    console.log('⚠️  File is still large. Consider further compression.');
  }
  
  console.log('\n🔄 Now updating the background component...');
  
  // Update the background component to use the new MP4 file
  const backgroundPath = './src/components/AmbientBackground.tsx';
  let backgroundContent = fs.readFileSync(backgroundPath, 'utf8');
  
  // Replace MOV with MP4
  backgroundContent = backgroundContent.replace(
    /<source src="\/videos\/AdobeStock_621309970\.mov" type="video\/quicktime" \/>/g,
    '<source src="/videos/AdobeStock_621309970.mp4" type="video/mp4" />'
  );
  
  backgroundContent = backgroundContent.replace(
    /<source src="\/videos\/AdobeStock_621309970\.mov" type="video\/mp4" \/>/g,
    ''
  );
  
  fs.writeFileSync(backgroundPath, backgroundContent);
  console.log('✅ Background component updated to use MP4!');
  console.log('\n🚀 Refresh your browser to see the video background!');
}); 