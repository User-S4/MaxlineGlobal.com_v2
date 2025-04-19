import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import logoWhite from '../../assets/maxline-white.png';
import logoColor from '../../assets/logo-maxline-global.png';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper for section navigation from any page
  const navigate = (window as any).appNavigate || (() => {});
  const navItems = [
    { name: t('home'), href: '/', section: 'hero' },
    { name: t('about'), href: '/#about', section: 'about' },
    { name: t('services'), href: '/#services', section: 'services' },
    { name: t('tracking'), href: '/#tracking', section: 'tracking' },
    { name: t('contact'), href: '/#contact', section: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border border-blue-100/60 dark:border-gray-800/60 shadow-2xl ${
        isScrolled 
          ? 'bg-white/70 dark:bg-gray-900/70 py-3 backdrop-blur-md' 
          : 'bg-white/40 dark:bg-gray-900/40 py-5 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={theme === 'dark' ? logoWhite : logoColor}
              alt="Maxline Global Logistics Logo"
              className="h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.section ? (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                onClick={e => {
                  if (window.location.pathname !== '/') {
                    e.preventDefault();
                    window.localStorage.setItem('scrollToSection', item.section);
                    window.location.href = '/';
                  } else if (item.section === 'hero') {
                    e.preventDefault();
                    const heroSection = document.querySelector('section');
                    if (heroSection) {
                      heroSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  } else if (item.section) {
                    e.preventDefault();
                    const sectionEl = document.getElementById(item.section);
                    if (sectionEl) {
                      sectionEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.name}
              </a>
            ) : null
          ))} 
          <a
            href="/login"
            className="ml-4 px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition-colors shadow"
          >
            {t('login')}
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 border border-blue-200 dark:border-gray-700 rounded-full bg-white/70 dark:bg-gray-800/70 shadow-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wide">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 border border-blue-200 dark:border-gray-700 rounded-full bg-white/70 dark:bg-gray-800/70 shadow-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wide">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              item.section ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  onClick={e => {
                    setMobileMenuOpen(false);
                    if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.localStorage.setItem('scrollToSection', item.section);
                      window.location.href = '/';
                    }
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            <a
              href="/login"
              className="mt-2 py-2 px-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition-colors shadow text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('login')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};