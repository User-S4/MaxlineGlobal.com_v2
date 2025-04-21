import React from 'react';

import { useLanguage } from '../../contexts/LanguageContext';

const AirFreight: React.FC = () => {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 pt-8 md:pt-16 pb-16">
      {/* Hero Section */}
      <section className="relative w-full h-72 flex items-center justify-center mb-16 overflow-hidden rounded-b-3xl shadow-xl">
        <img
          src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt="Air Freight Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 dark:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-700/20 to-transparent dark:from-gray-900/90 dark:via-blue-900/30" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-2xl tracking-tight animate-fade-in">
          <span className="inline-block align-middle mr-3">
            <svg className="inline w-10 h-10 text-blue-200 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 16l3.6-1.2a2 2 0 0 1 2.1.5l2.5 2.5a2 2 0 0 0 2.8 0l7.3-7.3a2 2 0 0 0 0-2.8l-2.5-2.5a2 2 0 0 0-2.1-.5L8 6.5" /></svg>
          </span>
          {t('airFreight')}
        </h1>
      </section>

      {/* Content Card */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Illustration */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://img.freepik.com/free-vector/parcels-with-parachute-delivery-concept_1284-16899.jpg?w=900&t=st=1713510000~exp=1713510600~hmac=6e1a7b6e0e9b2e2d7e5c7b0c2a2e8b4e6b1a7b7e6c7e8e9b4c7e6e7b7e6e9b4"
              alt="Air Freight Illustration"
              className="rounded-xl shadow-xl border-2 border-blue-100 dark:border-blue-900 max-w-xs w-full bg-white dark:bg-gray-900 mb-4"
            />
            <span className="mt-2 text-blue-700 dark:text-blue-300 font-semibold text-base tracking-wide">{t('airFreight')} Service</span>
          </div>
          {/* Description and Features */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-800 dark:text-gray-100 text-lg mb-6 leading-relaxed font-medium">
              {t('airFreightLongDesc1')} <br />
              <span className="text-blue-600 dark:text-blue-300 font-semibold">{t('airFreightLongDesc2')}</span>
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
                <span className="inline-block mt-1 text-blue-500 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-base">{t('airFreightFeature1')}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
                <span className="inline-block mt-1 text-blue-500 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-base">{t('airFreightFeature2')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Add extra bottom spacing before footer */}
      <div className="h-12 md:h-20" />
    </main>
  );
}

export default AirFreight;
