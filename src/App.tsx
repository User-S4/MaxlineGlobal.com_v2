import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Tracking } from './components/sections/Tracking';
import { Contact } from './components/sections/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AirFreight from './pages/services/air-freight';
import OceanFreight from './pages/services/ocean-freight';
import RoadTransport from './pages/services/road-transport';
import Warehousing from './pages/services/warehousing';
import Packing from './pages/services/packing';
import ExhibitionCargo from './pages/services/exhibition-cargo';
import ProjectForwarding from './pages/services/project-forwarding';
import Login from './pages/login';

// Helper component for section scrolling
const HomeWithSectionScroll: React.FC = () => {
  React.useEffect(() => {
    const section = window.localStorage.getItem('scrollToSection');
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        window.localStorage.removeItem('scrollToSection');
      }, 200);
    }
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Tracking />
      <Contact />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={
                  <HomeWithSectionScroll />
                } />
                <Route path="/services/air-freight" element={<AirFreight />} />
                <Route path="/services/ocean-freight" element={<OceanFreight />} />
                <Route path="/services/road-transport" element={<RoadTransport />} />
                <Route path="/services/warehousing" element={<Warehousing />} />
                <Route path="/services/packing" element={<Packing />} />
                <Route path="/services/exhibition-cargo" element={<ExhibitionCargo />} />
                <Route path="/services/project-forwarding" element={<ProjectForwarding />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;