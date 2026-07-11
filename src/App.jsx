import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import StudentInfo from './pages/StudentInfo';
import Contact from './pages/Contact';
import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Luxury Preloader Component
const Preloader = ({ isLoading }) => {
  return (
    <div className={`preloader ${!isLoading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <h1 className="text-shimmer" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', letterSpacing: '2px' }}>
          BEM FEB UNIB
        </h1>
        <div className="loading-line"></div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate loading time for the luxury entrance effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Scroll Progress Logic
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Preloader isLoading={isLoading} />
      <ScrollToTop />
      
      {/* Scroll Progress Indicator */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-hover))',
          width: `${scrollProgress * 100}%`,
          zIndex: 9999,
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px rgba(200, 145, 22, 0.5)'
        }}
      />

      <div className="bg-animated"></div>
      <div className="bg-overlay"></div>
      
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
