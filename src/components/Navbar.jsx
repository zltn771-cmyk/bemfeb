import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Student Info', path: '/student-info' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
      padding: scrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: 'var(--color-gold)', 
            letterSpacing: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <img 
              src="/icons.svg" 
              alt="Logo Kabinet Karsa Adhiyasa" 
              style={{ 
                height: '40px', 
                width: 'auto',
                filter: 'drop-shadow(0 0 10px rgba(200,145,22,0.3))'
              }} 
              onError={(e) => {
                e.target.style.display = 'none'; // Sembunyikan jika file belum ada
              }}
            />
            <span className="text-shimmer" style={{ fontFamily: 'var(--font-heading)' }}>BEM FEB UNIB</span>
          </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{
                color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-text-main)',
                fontWeight: location.pathname === link.path ? 600 : 500
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - simplified styling inline for now */}
        <div className="mobile-menu-btn" style={{ display: 'none', cursor: 'pointer' }} onClick={toggleMenu}>
          {isOpen ? <X color="var(--color-gold)" /> : <Menu color="var(--color-gold)" />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'var(--color-white)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderBottom: '1px solid var(--color-gold)'
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-text-main)',
                fontWeight: location.pathname === link.path ? 600 : 500,
                padding: '0.5rem'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
