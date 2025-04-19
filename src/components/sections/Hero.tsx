import React, { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Carousel images
  const images = [
    'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  ];
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Listen for scroll to fade out Scroll Down (fade between 75% and 80% of hero)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div 
        className="absolute top-0 right-0 w-full h-full bg-cover bg-center opacity-10 dark:opacity-10"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6 leading-tight animate-fade-in">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl animate-fade-in-delay">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all hover:translate-y-[-2px] flex items-center justify-center"
              >
                {t('heroButton')}
              </a>
              <a 
                href="#tracking" 
                className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:translate-y-[-2px] flex items-center justify-center"
              >
                <Truck className="w-5 h-5 mr-2" />
                {t('tracking')}
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-float">
            <div className="relative w-full h-72 md:h-80 lg:h-96 flex items-center justify-center">
  {/* Overlay to prevent background bleed */}
  <div className="absolute top-0 left-0 w-full h-full rounded-lg z-0 bg-white dark:bg-gray-900"></div>
  {images.map((img, idx) => (
    <img
      key={img}
      src={img}
      alt="Global Logistics"
      className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-2xl max-w-full mx-auto transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      aria-hidden={idx !== current}
    />
  ))}
  {/* 24/7 badge always on top */}
  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold z-20 shadow-lg">
    24/7
  </div>
</div>
          </div>
        </div>
        
      </div>
      {/* Move scroll down animation outside the container so it sits at the bottom of the viewport */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-opacity duration-500"
        style={{
          opacity: (() => {
            const fadeStart = window.innerHeight * 0.0025;
            const fadeEnd = window.innerHeight * 0.25;
            if (scrollY <= fadeStart) return 1;
            if (scrollY >= fadeEnd) return 0;
            return 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
          })(),
          pointerEvents: scrollY >= window.innerHeight * 0.5 ? 'none' : undefined
        }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-blue-600 dark:text-blue-400 mb-2">{t('scrollDown')}</span>
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};