'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoHome, IoPerson, IoCodeSlash, IoBriefcase, IoMail, IoMoon, IoSunny, IoDocumentText } from 'react-icons/io5';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: IoHome },
    { id: 'about', label: 'About', icon: IoPerson },
    { id: 'skills', label: 'Skills', icon: IoCodeSlash },
    { id: 'projects', label: 'Projects', icon: IoBriefcase },
    { id: 'contact', label: 'Contact', icon: IoMail },
    { id: 'resume', label: 'Resume', icon: IoDocumentText, isExternal: true, href: '/resume.pdf' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
      <nav className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isScrolled
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-3xl border border-black/20 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)]'
        : 'bg-white/85 dark:bg-black/85 backdrop-blur-2xl border border-black/15 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.05)]'
        } rounded-full px-2 py-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_40px_rgba(255,255,255,0.1)] transition-shadow duration-500`}>
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo with modern design */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
            >
              <span className="relative z-10">AR</span>
              <span className="absolute inset-0 bg-black dark:bg-white rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Desktop Navigation - Modern pill design */}
          <div className="hidden md:flex items-center space-x-1 bg-black/5 dark:bg-white/10 rounded-full p-1.5">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.isExternal) {
                    window.open(item.href, '_blank');
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={`group relative px-4 py-2 text-xs font-semibold transition-all duration-500 rounded-full overflow-hidden ${activeSection === item.id
                  ? 'text-white dark:text-black bg-black dark:bg-white shadow-lg scale-105'
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/10'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Active background with smooth transition */}
                <div className={`absolute inset-0 bg-black dark:bg-white rounded-full transition-all duration-500 ${activeSection === item.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}></div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon && <item.icon className="text-sm" />}
                  <span>{item.label}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Right Section: Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-black/5 dark:bg-white/10 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <IoSunny className="text-xl animate-scale-in" /> : <IoMoon className="text-xl animate-scale-in" />}
              </button>
            )}

            {/* Mobile Menu Button - Modern design */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-black dark:bg-white text-white dark:text-black rotate-90'
                : 'bg-black/5 dark:bg-white/10 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20'
                }`}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-full bg-black/10 dark:bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu - Slide down animation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 px-2 pb-2 animate-fade-in">
            <div className="bg-black/5 dark:bg-white/10 backdrop-blur-3xl rounded-2xl p-2 space-y-1">
              {navItems.map((item, index) => (
                  <button
                  key={item.id}
                  onClick={() => {
                    if (item.isExternal) {
                      window.open(item.href, '_blank');
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`group relative w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl overflow-hidden ${activeSection === item.id
                    ? 'text-white dark:text-black bg-black dark:bg-white shadow-lg'
                    : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/10'
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Active background */}
                  <div className={`absolute inset-0 bg-black dark:bg-white rounded-xl transition-all duration-500 ${activeSection === item.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}></div>

                  {/* Hover background */}
                  <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3 flex-1">
                    {item.icon && <item.icon className="text-lg" />}
                    <span>{item.label}</span>
                  </span>

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <span className="relative z-10 w-2 h-2 bg-white dark:bg-black rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
