import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Contact info for the card (with links and hover effects)
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transform group-hover:scale-110 transition-all duration-200" />,
      text: 'reception@maxlineglobal.com',
      link: 'mailto:reception@maxlineglobal.com',
      label: 'Email Maxline Global',
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transform group-hover:scale-110 transition-all duration-200" />,
      text: '+971 4 282 2022',
      link: 'tel:+97142822022',
      label: 'Call Maxline Global',
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transform group-hover:scale-110 transition-all duration-200" />,
      text: 'Jebal Ali Freezone, Dubai, UAE',
      link: 'https://www.google.com/maps/search/?api=1&query=Jebal+Ali+Freezone,+Dubai,+UAE',
      label: 'View location on Google Maps',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 scroll-mt-4">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contactTitle')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contactFormHeading')}
            </h3>
            
            {submitted ? (
              <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 text-green-700 dark:text-green-200 p-4 mb-6 rounded animate-fade-in">
                <p>Thank you for your message. We'll get back to you soon!</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('formPhone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    {t('formSubmit')}
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contactInfoHeading')}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    aria-label={item.label}
                    className="flex items-center group hover:text-blue-600 transition-colors"
                  >
                    <span
                      className="mr-4 flex items-center justify-center rounded-full shadow-md bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-blue-900/40 dark:via-blue-800/60 dark:to-blue-700/40 group-hover:shadow-lg transition-all duration-200"
                      style={{ width: '48px', height: '48px' }}
                    >
                      {item.icon}
                    </span>
                    <span className="block text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('businessHoursHeading')}</h4>
                <div className="text-gray-700 dark:text-gray-300">
                  {t('businessHoursWeekdays')}<br />
                  {t('businessHoursWeekends')}
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe
                title="Jebal Ali Freezone, Dubai, UAE Map"
                src="https://www.google.com/maps?q=Jebal+Ali+Freezone,+Dubai,+UAE&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ minHeight: '100%', minWidth: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};