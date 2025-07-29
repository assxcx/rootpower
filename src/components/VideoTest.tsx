'use client';

import { useEffect, useRef } from 'react';

export default function VideoTest() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('Video element found');
    
    video.addEventListener('loadstart', () => console.log('Video loadstart'));
    video.addEventListener('loadedmetadata', () => console.log('Video loadedmetadata'));
    video.addEventListener('loadeddata', () => console.log('Video loadeddata'));
    video.addEventListener('canplay', () => console.log('Video canplay'));
    video.addEventListener('canplaythrough', () => console.log('Video canplaythrough'));
    video.addEventListener('error', (e) => console.log('Video error:', e));
    video.addEventListener('stalled', () => console.log('Video stalled'));
    video.addEventListener('suspend', () => console.log('Video suspend'));

    return () => {
      video.removeEventListener('loadstart', () => {});
      video.removeEventListener('loadedmetadata', () => {});
      video.removeEventListener('loadeddata', () => {});
      video.removeEventListener('canplay', () => {});
      video.removeEventListener('canplaythrough', () => {});
      video.removeEventListener('error', () => {});
      video.removeEventListener('stalled', () => {});
      video.removeEventListener('suspend', () => {});
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 p-4 rounded-lg text-white text-sm">
      <h3>Video Debug</h3>
      <video
        ref={videoRef}
        className="w-32 h-24 object-cover rounded"
        controls
        muted
        loop
      >
        <source src="/videos/Adobestock 621309970.mp4" type="video/mp4" />
        <source src="/videos/AdobeStock_621309970.mov" type="video/quicktime" />
        Video not supported
      </video>
      <p className="mt-2">Check console for video events</p>
    </div>
  );
} 