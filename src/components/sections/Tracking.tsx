import React, { useState } from 'react';
import { Search, Package } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Tracking: React.FC = () => {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | { status: string, location: string, date: string }>(null);

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setIsTracking(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Demo tracking result
      setTrackingResult({
        status: 'In Transit',
        location: 'Dubai, UAE',
        date: new Date().toLocaleDateString(),
      });
      setIsTracking(false);
    }, 1500);
  };

  return (
    <section id="tracking" className="min-h-screen flex items-center justify-center py-20 bg-blue-900 dark:bg-gray-900 text-white relative overflow-hidden" style={{ scrollMarginTop: '120px' }}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center w-full">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('trackingTitle')}
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 dark:text-gray-300 mb-4">
            {t('trackingDescription')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleTracking} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" style={{left: '12px'}} />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder={t('trackingPlaceholder')}
                  className="w-[350px] md:w-[400px] pl-14 pr-4 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isTracking}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isTracking ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Tracking...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    {t('trackButton')}
                  </span>
                )}
              </button>
            </div>
          </form>

          {trackingResult && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 animate-fade-in">
              <div className="bg-blue-600 dark:bg-blue-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Tracking Result</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between pb-4 border-b dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Tracking Number:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{trackingNumber}</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between py-3 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Status:</span>
                    <span className="font-semibold text-green-600">{trackingResult.status}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Location:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{trackingResult.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600 dark:text-gray-400">Last Update:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{trackingResult.date}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};