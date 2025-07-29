# Video Optimization Guide

Your video file is 528MB, which is too large for web use. Here's how to optimize it:

## Option 1: Use Online Converter (Recommended)
1. Go to https://convertio.co/mov-mp4/ or https://www.onlinevideoconverter.com/
2. Upload your `AdobeStock_621309970.mov` file
3. Convert to MP4 format
4. Download the converted file
5. Replace the original file in `public/videos/`

## Option 2: Use FFmpeg (if you have it installed)
```bash
ffmpeg -i AdobeStock_621309970.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart AdobeStock_621309970.mp4
```

## Target File Size
- **Ideal**: 5-20MB
- **Maximum**: 50MB
- **Current**: 528MB (too large)

## Recommended Settings
- **Format**: MP4
- **Codec**: H.264
- **Resolution**: 1920x1080 or 1280x720
- **Bitrate**: 2-5 Mbps
- **Duration**: 10-30 seconds (loop)

## Quick Fix
If you can't convert right now, try this smaller video:
1. Download a free HD nature video from Pexels or Pixabay
2. Look for "monstera", "plants", "nature", "leaves"
3. Choose MP4 format, under 20MB
4. Replace your current video file

## Browser Compatibility
- ✅ MP4 (H.264) - Best support
- ⚠️ MOV - Limited support
- ❌ Large files (>50MB) - Poor performance

The optimized video should work perfectly as a background!
