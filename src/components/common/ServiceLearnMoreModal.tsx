import React from 'react';

interface ServiceLearnMoreModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceLearnMoreModal: React.FC<ServiceLearnMoreModalProps> = ({ open, onClose, title, description, image, link }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-8 max-w-lg w-full relative animate-popup">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-2xl">&times;</button>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-6" />
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-2">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
        <a href={link} className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={onClose}>
          Go to Page
        </a>
      </div>
      <style>{`
        .animate-popup {animation: popup 0.4s cubic-bezier(.24,1.69,.57,.94);}
        @keyframes popup {0%{transform:scale(0.7); opacity:0;} 100%{transform:scale(1); opacity:1;}}
        .animate-fade-in {animation: fadeIn 0.3s;}
        @keyframes fadeIn {from{opacity:0;} to{opacity:1;}}
      `}</style>
    </div>
  );
};

export default ServiceLearnMoreModal;
