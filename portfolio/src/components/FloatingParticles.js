'use client';

import ClientOnlyWrapper from './ClientOnlyWrapper';

function ParticlesContent() {

  // Predefined particle positions to ensure consistency
  const particles = [
    { left: 23, top: 15, delay: 0.5, duration: 3 },
    { left: 67, top: 45, delay: 1.2, duration: 2.5 },
    { left: 12, top: 78, delay: 0.8, duration: 4 },
    { left: 89, top: 23, delay: 2.1, duration: 3.5 },
    { left: 45, top: 67, delay: 0.3, duration: 2.8 },
    { left: 78, top: 12, delay: 1.8, duration: 4.2 },
    { left: 34, top: 89, delay: 0.7, duration: 3.2 },
    { left: 56, top: 34, delay: 1.5, duration: 2.3 },
    { left: 91, top: 56, delay: 0.9, duration: 3.8 },
    { left: 18, top: 91, delay: 2.3, duration: 2.7 },
    { left: 73, top: 18, delay: 0.4, duration: 4.1 },
    { left: 29, top: 73, delay: 1.7, duration: 3.1 },
    { left: 84, top: 29, delay: 0.6, duration: 2.9 },
    { left: 41, top: 84, delay: 2.0, duration: 3.6 },
    { left: 62, top: 41, delay: 1.1, duration: 2.4 },
    { left: 95, top: 62, delay: 0.2, duration: 4.3 },
    { left: 26, top: 95, delay: 1.9, duration: 3.3 },
    { left: 58, top: 26, delay: 0.8, duration: 2.6 },
    { left: 82, top: 58, delay: 1.4, duration: 3.9 },
    { left: 37, top: 82, delay: 0.1, duration: 2.2 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
}

export default function FloatingParticles() {
  return (
    <ClientOnlyWrapper fallback={<div className="absolute inset-0 overflow-hidden pointer-events-none" />}>
      <ParticlesContent />
    </ClientOnlyWrapper>
  );
}
