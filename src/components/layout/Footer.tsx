import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoWhite from '../../assets/maxline-white.png';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <img src={logoWhite} alt="MaxLine Global Logo" className="h-12 w-auto mb-4" />
            <p
              className="text-gray-400 mb-4"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
              style={{ textAlign: language === 'ar' ? 'right' : 'left' }}
            >
              {t('footerSlogan')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Maxline-Global-Logistic-Solutions/100064187105642/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={e => {
                    if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.localStorage.setItem('scrollToSection', 'about');
                      window.location.href = '/';
                    }
                  }}>
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={e => {
                    if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.localStorage.setItem('scrollToSection', 'services');
                      window.location.href = '/';
                    }
                  }}>
                  {t('services')}
                </a>
              </li>
              <li>
                <a href="/#tracking" className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={e => {
                    if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.localStorage.setItem('scrollToSection', 'tracking');
                      window.location.href = '/';
                    }
                  }}>
                  {t('tracking')}
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={e => {
                    if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.localStorage.setItem('scrollToSection', 'contact');
                      window.location.href = '/';
                    }
                  }}>
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services 1 */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/air-freight" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('airFreight')}
                </a>
              </li>
              <li>
                <a href="/services/ocean-freight" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('oceanFreight')}
                </a>
              </li>
              <li>
                <a href="/services/road-transport" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('roadTransport')}
                </a>
              </li>
              <li>
                <a href="/services/warehousing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('warehousing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services 2 */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/packing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('packing')}
                </a>
              </li>
              <li>
                <a href="/services/exhibition-cargo" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('exhibitionCargo')}
                </a>
              </li>
              <li>
                <a href="/services/project-forwarding" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('projectForwarding')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=Jebal+Ali+Freezone,+Dubai,+UAE" target="_blank" rel="noopener noreferrer" aria-label="View location on Google Maps" className="flex items-start group hover:text-blue-400 transition-colors">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-white group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-400 group-hover:text-blue-400">Jebal Ali Freezone, Dubai, UAE</span>
                </a>
              </li>
              <li>
                <a href="tel:+97142822022" aria-label="Call Maxline Global" className="flex items-center group hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-white group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-400 group-hover:text-blue-400">+971 4 282 2022</span>
                </a>
              </li>
              <li>
                <a href="mailto:reception@maxlineglobal.com" aria-label="Email Maxline Global" className="flex items-center group hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-white group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-400 group-hover:text-blue-400">reception@maxlineglobal.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-blue-500 my-8" />
        <div className="w-full flex justify-center">
          <p className="text-gray-500 text-sm text-center" dir="ltr" style={{textAlign: 'center'}}>
            &copy; {currentYear} Maxline Global. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};