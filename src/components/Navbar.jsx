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
      background: scrolled ? 'rgba(26, 26, 26, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      padding: scrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left side: Desktop Menu & Mobile Hamburger */}
        <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{
                color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-white)',
                fontWeight: location.pathname === link.path ? 600 : 400
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button on Left */}
        <div className="mobile-menu-btn" style={{ display: 'none', cursor: 'pointer' }} onClick={toggleMenu}>
          {isOpen ? <X color="var(--color-gold)" /> : <Menu color="var(--color-gold)" />}
        </div>

        {/* Right side: Logo */}
        <Link to="/" style={{ 
          fontSize: '1rem', 
          fontWeight: 'bold', 
          color: 'var(--color-gold)', 
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textAlign: 'right'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span className="text-shimmer" style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>BEM FEB UNIB</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>Kabinet Karsa Adhiyasa</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img 
              src="/kabinet-karsa-adhiyasa.jpg" 
              alt="Logo Kabinet Karsa Adhiyasa" 
              style={{ 
                height: '38px', 
                width: '38px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '1px solid var(--color-gold)',
                boxShadow: '0 0 10px rgba(212,177,90,0.3)'
              }} 
              onError={(e) => e.target.style.display = 'none'}
            />
            <img 
              src="/icons.svg" 
              alt="Logo BEM FEB" 
              style={{ 
                height: '38px', 
                width: 'auto',
                filter: 'drop-shadow(0 0 10px rgba(212,177,90,0.3))'
              }} 
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </Link>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'var(--color-charcoal)',
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
                color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-white)',
                fontWeight: location.pathname === link.path ? 600 : 400,
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
