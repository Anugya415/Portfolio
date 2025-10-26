'use client';

import { useState, useEffect } from 'react';
import FloatingParticles from './FloatingParticles';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    // Set visibility after component mounts to prevent hydration mismatch
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Start role rotation after initial render
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(roleInterval);
    };
  }, [roles.length]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles - Client-only to prevent hydration mismatch */}
      <FloatingParticles />

      <div className={`text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Greeting */}
        <div className="mb-4">
          <span className="text-lg text-gray-300 font-light">Hello, I'm</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            K. Anugya Reddy
          </span>
        </h1>

        {/* Dynamic role */}
        <div className="h-16 mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
            <span className="inline-block min-w-0 transition-all duration-500 ease-in-out">
              {roles[currentRole]}
            </span>
            <span className="animate-pulse text-blue-400">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional, and user-centered digital experiences.
          I bring ideas to life through code and design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            View My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-xs mt-2">Scroll to explore</p>
          </button>
        </div>
      </div>
    </section>
  );
}
