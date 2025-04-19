import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const OceanFreight: React.FC = () => {
  const { t } = useLanguage();
  return (
  <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 md:pt-16 pb-16">
    {/* Header with background image and large title */}
    <div className="relative w-screen max-w-full overflow-x-hidden h-64 md:h-72 flex items-center justify-center mb-12 pt-8 md:pt-6">
      <img
        src="https://images.pexels.com/photos/3279303/pexels-photo-3279303.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
        alt="Ocean Freight Background"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-80"
        style={{objectPosition: 'center'}}
      />
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent" />
      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">{t('oceanFreight')}</h1>
    </div>
    {/* Two-column layout */}
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Illustration */}
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/port-container-terminal-illustration_1284-16898.jpg?w=900"
          alt="Sea Freight Illustration"
          className="rounded-lg shadow-2xl border-4 border-blue-200 max-w-md w-full bg-white"
        />
      </div>
      {/* Description */}
      <div>
        <p className="text-gray-800 dark:text-gray-100 text-lg mb-5 leading-relaxed">
          {t('oceanFreightLongDesc1')}<br/><br/>{t('oceanFreightLongDesc2')}
        </p>
      </div>
    </div>
    <div className="h-12 md:h-20" />
  </main>
  );
}

export default OceanFreight;
