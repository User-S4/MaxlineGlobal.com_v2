import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProjectForwarding: React.FC = () => {
  const { t } = useLanguage();
  return (
  <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 md:pt-16 pb-16">
    {/* Header with background image and large title */}
    <div className="relative w-full h-64 md:h-72 flex items-center justify-center mb-12 pt-8 md:pt-6">
      <img
        src="https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&w=1260&h=750"
        alt="Project Forwarding Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">{t('projectForwarding')}</h1>
    </div>
    {/* Two-column layout */}
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Illustration */}
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/construction-project-concept-illustration_114360-2576.jpg?w=900&t=st=1713510000~exp=1713510600~hmac=6e1a7b6e0e9b2e2d7e5c7b0c2a2e8b4e6b1a7b7e6c7e8e9b4c7e6e7b7e6e9b4"
          alt="Project Forwarding Illustration"
          className="rounded-lg shadow-2xl border-4 border-blue-200 max-w-md w-full bg-white"
        />
      </div>
      {/* Description */}
      <div>
        <p className="text-gray-800 dark:text-gray-100 text-lg mb-5 leading-relaxed">
          {t('projectForwardingDescription')}
        </p>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-200 mb-2">
          <li>{t('projectForwardingFeature1')}</li>
          <li>{t('projectForwardingFeature2')}</li>
          <li>{t('projectForwardingFeature3')}</li>
          <li>{t('projectForwardingFeature4')}</li>
        </ul>
      </div>
    </div>
    {/* Add extra bottom spacing before footer */}
    <div className="h-12 md:h-20" />
  </main>
  );
};

export default ProjectForwarding;
