import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PartnersPage } from './pages/PartnersPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { EnrollmentPage } from './pages/EnrollmentPage';
import { SeminarPage } from './pages/SeminarPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { LanguageProvider } from './context/LanguageContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-brand-black text-white overflow-x-hidden selection:bg-brand-beige selection:text-black scroll-smooth">
          {/* Background radial gradient */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-beige/5 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/why-us" element={<WhyUsPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/enroll" element={<EnrollmentPage />} />
                <Route path="/seminar" element={<SeminarPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
              </Routes>
            </main>
            <Footer />
          </div>

          {/* Decorative lines */}
          <div className="fixed top-1/4 left-0 w-full h-[1px] bg-white/5 -rotate-6 pointer-events-none z-0"></div>
          <div className="fixed top-3/4 right-0 w-2/3 h-[1px] bg-white/5 rotate-12 pointer-events-none z-0"></div>
        </div>
        <Analytics />
      </Router>
    </LanguageProvider>
  );
};

export default App;