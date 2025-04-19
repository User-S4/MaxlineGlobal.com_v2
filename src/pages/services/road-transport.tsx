import React from 'react';

import { useLanguage } from '../../contexts/LanguageContext';

const RoadTransport: React.FC = () => {
  const { t } = useLanguage();
  return (
  <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 md:pt-16 pb-16">
    {/* Header with background image and large title */}
    <div className="relative w-full h-64 md:h-72 flex items-center justify-center mb-12 pt-8 md:pt-6">
      <img
        src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
        alt={t('landFreightBackgroundAlt')}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">{t('roadTransport')}</h1>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
    {/* Two-column layout */}
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Illustration */}
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/delivery-truck-illustration_1284-17015.jpg?w=900"
          alt="Land Freight Illustration"
          className="rounded-lg shadow-2xl border-4 border-blue-200 max-w-md w-full bg-white"
        />
      </div>
      {/* Description */}
      <div>
        <p className="text-gray-800 dark:text-gray-100 text-lg mb-5 leading-relaxed">
          {t('roadTransportLongDesc1')}
        </p>
      </div>
    </div>
    <div className="h-12 md:h-20" />
  </main>
  );
}

export default RoadTransport;
