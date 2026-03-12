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
            <span className="text-sm font-mono text-zinc-500 dark:text-zinc-600 tracking-widest uppercase">02</span>
            <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono text-zinc-700 dark:text-zinc-400 tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
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
          <div className="flex space-x-2 border-b border-zinc-200 dark:border-zinc-800">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-4 px-6 text-sm font-bold uppercase tracking-widest transition-all duration-300 relative flex items-center space-x-2 ${activeCategory === category.id
                    ? 'text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-900 dark:border-zinc-50'
                    : 'text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300 border-transparent'
                  }`}
              >
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {techStack[activeCategory].map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-zinc-900 flex flex-col justify-between border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 w-full mx-auto group shadow-sm transition-all"
                >
                  <div className="flex items-center w-full gap-3 mb-4">
                    <span className="text-3xl sm:text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <div className="flex items-center justify-between flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight tracking-tight max-w-[120px] break-words text-left">
                        {tech.name}
                      </h3>
                      <span className="text-zinc-500 dark:text-zinc-400 font-bold text-xs">
                        {tech.level}%
                      </span>
                    </div>
                  </div>

                  <div className="w-full mt-auto">
                    {/* Progress Bar */}
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mb-2 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="absolute left-0 top-0 h-full bg-zinc-900 dark:bg-zinc-50 rounded-full"
                      />
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="flex justify-between w-full text-[10px] font-bold text-zinc-400 dark:text-zinc-500 px-1">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
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
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
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
                className="px-5 py-2.5 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-full text-sm font-bold uppercase tracking-widest hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-default"
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
