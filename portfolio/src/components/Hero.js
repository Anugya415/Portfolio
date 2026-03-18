'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden pt-32 transition-colors duration-500">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, currentColor 1px, transparent 1px),
            linear-gradient(currentColor 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated accent lines */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/4 left-0 w-1/3 h-px bg-black/10 dark:bg-white/10 transform -rotate-12 origin-left"
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-1/4 right-0 w-1/3 h-px bg-black/10 dark:bg-white/10 transform rotate-12 origin-right"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <span className="px-4 py-2 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-full text-sm font-medium text-black/70 dark:text-white/70 backdrop-blur-sm">
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name with elegant entrance */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl lg:text-9xl font-bold text-black dark:text-white mb-8 leading-[1.1] tracking-tight"
        >
          K. Anugya Reddy
        </motion.h1>

        <motion.div variants={itemVariants} className="flex items-center justify-center mb-8">
          <div className="h-px w-24 bg-black/20 dark:bg-white/20"></div>
        </motion.div>

        {/* Dynamic role */}
        <motion.div variants={itemVariants} className="h-20 mb-10 flex items-center justify-center overflow-hidden">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-black/60 dark:text-white/60 font-light">
            <motion.span
              key={currentRole}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="inline-block min-w-0"
            >
              {roles[currentRole]}
            </motion.span>
            <span className="animate-pulse text-black dark:text-white ml-2">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-black/60 dark:text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Crafting digital experiences that blend functionality with elegance.
          <br className="hidden sm:block" />
          Transforming ideas into reality through code and design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="/resume.pdf"
            download
            className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            Download CV Resume
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll indicator - centered below buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center items-center mt-8 animate-bounce"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors group"
          >
            <span className="text-xs mb-2 font-medium">Scroll</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
