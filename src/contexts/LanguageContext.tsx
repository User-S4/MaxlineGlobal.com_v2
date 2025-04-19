import React, { createContext, useContext, useState, useEffect } from 'react';
import { enUS, arSA } from '../locales';

export type Language = 'en' | 'ar';
type TranslationKeys = keyof typeof enUS;

interface LanguageContextType {
  language: Language;
  dir: 'ltr' | 'rtl';
  t: (key: TranslationKeys) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage as Language) || 'en';
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ar' : 'en');
  };

  const t = (key: TranslationKeys): string => {
    const translations = language === 'en' ? enUS : arSA;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, dir, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};