import React from 'react';
import { Award, Users, Globe, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Clock className="w-8 h-8 text-blue-600 mb-3" />, value: "15+", label: t('yearsExperience') },
    { icon: <Globe className="w-8 h-8 text-blue-600 mb-3" />, value: "50+", label: t('countriesServed') },
    { icon: <Users className="w-8 h-8 text-blue-600 mb-3" />, value: "1000+", label: t('happyClients') },
    { icon: <Award className="w-8 h-8 text-blue-600 mb-3" />, value: "25K+", label: t('shipmentsMoved') },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 scroll-mt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('aboutTitle')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('aboutDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3843284/pexels-photo-3843284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="About Maxline Global" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg font-semibold">
                &quot;{t('aboutQuote')}&quot;
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('aboutTrustedHeading')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('aboutTrustedDesc1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t('aboutTrustedDesc2')}
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              {t('aboutReadMore')}
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 text-center transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center">{stat.icon}</div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h4>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};