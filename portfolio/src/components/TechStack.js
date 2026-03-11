'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techStack = {
    frontend: [
      { name: 'Next.js', icon: '▲', level: 90 },
      { name: 'React', icon: '⚛️', level: 95 },
      { name: 'React Native', icon: '📱', level: 85 },
      { name: 'Tailwind CSS', icon: '🎨', level: 95 },
      { name: 'Framer Motion', icon: '✨', level: 80 },
      { name: 'tsParticles', icon: '🎇', level: 75 }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', level: 85 },
      { name: 'Express', icon: '🚂', level: 80 },
      { name: 'Prisma ORM', icon: '🗄️', level: 85 },
      { name: 'MongoDB', icon: '🍃', level: 80 },
      { name: 'Firebase', icon: '🔥', level: 80 },
      { name: 'REST APIs', icon: '🔗', level: 90 }
    ],
    tools: [
      { name: 'Git & GitHub', icon: '📚', level: 92 },
      { name: 'VS Code', icon: '💻', level: 95 },
      { name: 'Expo', icon: '🚀', level: 85 },
      { name: 'Vercel', icon: '▲', level: 90 },
      { name: 'Figma', icon: '🎨', level: 85 },
      { name: 'Postman', icon: '🚀', level: 88 }
    ]
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    }
  };

  return (
    <section
      id="skills"
      className="scroll-mt-16 sm:scroll-mt-24"
    >

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-black/40 dark:text-white/40 tracking-widest uppercase">02</span>
            <div className="h-px w-12 bg-black/20 dark:bg-white/20"></div>
            <span className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex space-x-2 bg-black/5 dark:bg-white/5 rounded-2xl p-1.5 border border-black/10 dark:border-white/10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative z-10 ${activeCategory === category.id
                    ? 'text-white dark:text-black shadow-lg'
                    : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10'
                  }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-black dark:bg-white rounded-xl -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {techStack[activeCategory].map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
                  className="bg-white dark:bg-[#0a0a0a] border-2 border-black/10 dark:border-white/10 rounded-2xl p-6 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        {tech.icon}
                      </span>
                      <h3 className="text-lg font-bold text-black dark:text-white">
                        {tech.name}
                      </h3>
                    </div>
                    <span className="text-black/60 dark:text-white/60 text-sm font-semibold">
                      {tech.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-2.5 mb-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className="h-full bg-black dark:bg-white rounded-full"
                    />
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="flex justify-between text-xs text-black/40 dark:text-white/40 font-medium pt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-black/60 dark:text-white/60 mb-8 text-lg">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Learning', 'Experimenting', 'Building', 'Growing'].map((action, index) => (
              <motion.span
                key={action}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="px-5 py-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
              >
                {action}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
