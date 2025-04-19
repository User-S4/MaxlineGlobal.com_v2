import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 flex items-center justify-center border-2 border-white/70 dark:border-gray-800/60 backdrop-blur-md ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
      style={{ boxShadow: '0 8px 24px rgba(2,157,219,0.18)' }}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
