import React, { useState } from 'react';
import { Plane, Ship, Truck, Warehouse } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Plane className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      slug: 'air-freight',
      title: t('airFreight'),
      description: t('airFreightDesc'),
      image: "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    },
    {
      icon: <Ship className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      slug: 'ocean-freight',
      title: t('oceanFreight'),
      description: t('oceanFreightDesc'),
      image: "https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      slug: 'road-transport',
      title: t('roadTransport'),
      description: t('roadTransportDesc'),
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    },
    {
      icon: <Warehouse className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      slug: 'warehousing',
      title: t('warehousing'),
      description: t('warehousingDesc'),
      image: "https://images.pexels.com/photos/4481572/pexels-photo-4481572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    },
  ];

  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  const handleLearnMore = (service: any, index: number) => {
    setAnimatingIndex(index);
    setTimeout(() => {
      window.location.href = `/services/${service.slug}`;
    }, 800); // Fallback for multi-page navigation
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${animatingIndex === index ? 'z-30 animate-popout' : ''}`}
              style={animatingIndex === index ? { position: 'relative' } : {}}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="bg-white dark:bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md group-hover:bg-blue-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <a
                  href={`/services/${service.slug}`}
                  onClick={e => {
                    if (animatingIndex === null) {
                      e.preventDefault();
                      handleLearnMore(service, index);
                    } else {
                      e.preventDefault();
                    }
                  }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors focus:outline-none"
                  style={animatingIndex !== null ? { pointerEvents: 'none', opacity: 0.6 } : {}}
                  rel="noopener noreferrer"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .animate-popout {
            animation: popout-zoom 0.8s cubic-bezier(.24,1.69,.57,.94) forwards;
          }
          @keyframes popout-zoom {
            0% { transform: scale(1); box-shadow: 0 4px 24px rgba(0,0,0,0.12); opacity: 1; }
            50% { transform: scale(1.12); box-shadow: 0 16px 64px rgba(0,0,0,0.25); opacity: 1; }
            80% { transform: scale(0.5); box-shadow: 0 2px 8px rgba(0,0,0,0.10); opacity: 0.7; }
            100% { transform: scale(0.2); box-shadow: 0 0px 0px rgba(0,0,0,0); opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
};