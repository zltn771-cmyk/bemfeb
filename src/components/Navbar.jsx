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
        
        {/* Left side: Logo */}
        <Link to="/" style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img 
              src="/kabinet-karsa-adhiyasa.jpg" 
              alt="Logo Kabinet" 
              style={{ 
                height: '42px', 
                width: '42px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '1px solid var(--color-gold)'
              }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="nav-text-container">
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.2rem', 
              fontWeight: '700', 
              color: 'var(--color-white)', 
              lineHeight: '1.2', 
              whiteSpace: 'nowrap',
              textShadow: '0 2px 10px rgba(0,0,0,0.9)'
            }}>
              BEM FEB UNIB
            </span>
            <span className="nav-subtext" style={{ 
              fontSize: '0.75rem', 
              color: 'var(--color-text-muted)', 
              fontWeight: 500, 
              whiteSpace: 'nowrap' 
            }}>
              Kabinet Karsa Adhiyasa
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
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

        {/* Right side: Mobile Menu Button */}
        <div 
          className="mobile-menu-btn" 
          style={{ 
            display: 'none', 
            cursor: 'pointer',
            background: 'linear-gradient(135deg, rgba(212,177,90,0.8), rgba(229,194,107,0.4))',
            padding: '0.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(212,177,90,0.3)'
          }} 
          onClick={toggleMenu}
        >
          {isOpen ? <X color="var(--color-black)" size={28} /> : <Menu color="var(--color-black)" size={28} />}
        </div>

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
        @media (max-width: 480px) {
          .nav-subtext { display: none !important; }
          .nav-text-container span.text-shimmer { font-size: 0.95rem !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
