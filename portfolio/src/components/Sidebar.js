'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunny, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Find the current active section
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY;

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on layout
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'TECH STACK' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-3 sm:mb-4">
          K. Anugya Reddy
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 mt-2">
          Full Stack Developer
        </h2>
        <p className="mt-4 text-base max-w-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Crafting digital experiences that blend functionality with elegance. Transforming ideas into reality through code and design.
        </p>

        <nav className="nav hidden lg:block mt-16">
          <ul className="mt-8 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center py-3 ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-[1px] transition-all bg-zinc-400 group-hover:w-16 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 ${
                      activeSection === item.id
                        ? 'w-16 bg-zinc-900 dark:bg-zinc-50'
                        : 'w-8 bg-zinc-400 dark:bg-zinc-600'
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                      activeSection === item.id
                        ? 'text-zinc-900 dark:text-zinc-50'
                        : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 lg:mt-0 flex items-center gap-5">
        <a href="https://github.com/anugya-reddy" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <IoLogoGithub className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/anugya-reddy" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <IoLogoLinkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:reddyanugya@gmail.com" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <IoMail className="w-6 h-6" />
          <span className="sr-only">Email</span>
        </a>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-auto relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-black/5 dark:bg-white/10 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <IoSunny className="text-xl" /> : <IoMoon className="text-xl" />}
          </button>
        )}
      </div>
    </header>
  );
}
