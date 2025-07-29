'use client';

import { useEffect, useRef, useState } from 'react';

export default function AmbientBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('🎬 Setting up video background...');

    // Video properties for optimal web playback
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.volume = 0;
    video.playbackRate = 0.8; // Slightly slower for ambient effect
    
    // Ensure looping works
    video.addEventListener('ended', () => {
      console.log('🔄 Video ended, restarting...');
      video.currentTime = 0;
      video.play().catch(error => {
        console.log('❌ Loop restart failed:', error);
      });
    });

    const handleCanPlay = () => {
      console.log('▶️ Video can play');
      video.play().then(() => {
        console.log('✅ Video playing successfully');
      }).catch((error) => {
        console.log('❌ Video play failed:', error);
      });
    };

    const handleError = (e: Event) => {
      console.log('❌ Video error:', e);
    };

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Generate particles on client-side only
    const generateParticles = () => {
      const particleData = [...Array(8)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }));
      setParticles(particleData);
    };

    generateParticles();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Video Background - MP4 Priority */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -3 }}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src="/videos/Adobestock 621309970.mp4" type="video/mp4" />
        <source src="/videos/AdobeStock_621309970.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
      
      {/* Subtle overlay for text readability */}
      <div 
        className="absolute inset-0 bg-black/20"
        style={{ zIndex: -1 }}
      />
      
      {/* Ambient light effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-green-900/20"
        style={{ zIndex: -1 }}
      />
      
      {/* Subtle animated particles for ambient effect */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/10 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>
    </div>
  );
} 