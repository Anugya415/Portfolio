'use client';

import { useState, useEffect } from 'react';

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
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white overflow-hidden pt-32">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #000 1px, transparent 1px),
            linear-gradient(#000 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated accent lines */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px bg-black/10 transform -rotate-12"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-black/10 transform rotate-12"></div>

      <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Greeting Badge */}
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-black/5 border border-black/10 rounded-full text-sm font-medium text-black/70">
            Hello, I'm
          </span>
        </div>

        {/* Name with decorative underline */}
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-black mb-8 leading-[1.1] tracking-tight">
          K. Anugya Reddy
        </h1>
        
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-24 bg-black/20"></div>
        </div>

        {/* Dynamic role with smooth transition */}
        <div className="h-20 mb-10 flex items-center justify-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-black/60 font-light">
            <span className="inline-block min-w-0 transition-all duration-500 ease-in-out">
              {roles[currentRole]}
            </span>
            <span className="animate-pulse text-black ml-2">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-black/60 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          Crafting digital experiences that blend functionality with elegance.
          <br className="hidden sm:block" />
          Transforming ideas into reality through code and design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a
            href="/resume.pdf"
            download
            className="group relative px-10 py-4 bg-black text-white rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 overflow-hidden inline-flex items-center"
          >
            <span className="relative z-10 flex items-center">
              Download CV Resume
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 border-2 border-black text-black rounded-full font-semibold text-base transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator - centered below buttons */}
        <div className="flex justify-center items-center mt-8 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-black/40 hover:text-black transition-colors group"
          >
            <span className="text-xs mb-2 font-medium">Scroll</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
