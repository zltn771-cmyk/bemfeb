import React from 'react';
import Reveal from './Reveal';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'rgba(24, 24, 27, 0.9)', 
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(212, 177, 90, 0.1)', 
      padding: '4rem 0 2rem 0', 
      marginTop: 'auto',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <Reveal delay={100} className="grid grid-cols-3" style={{ marginBottom: '3rem' }}>
          <div>
            <h3 className="text-gold" style={{ fontSize: '1.8rem', marginBottom: '1rem', letterSpacing: '1px' }}>BEM FEB UNIB</h3>
            <p style={{ maxWidth: '300px', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              Gerakan kolektif mahasiswa yang adaptif, berprestasi, dan berdampak bagi kampus serta masyarakat.
            </p>
          </div>
          <div>
            <h4 className="text-white" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Tautan Cepat</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="/" style={{ color: 'var(--color-text-muted)' }}>Beranda</a></li>
              <li><a href="/about" style={{ color: 'var(--color-text-muted)' }}>Tentang Kami</a></li>
              <li><a href="/student-info" style={{ color: 'var(--color-text-muted)' }}>Info Mahasiswa</a></li>
              <li><a href="/contact" style={{ color: 'var(--color-text-muted)' }}>Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Hubungi Kami</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="https://instagram.com/bemfebunib" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                <Instagram size={20} color="var(--color-gold)" /> @bemfebunib
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                Tiktok BEM FEB
              </a>
            </div>
          </div>
        </Reveal>
        <div className="divider" style={{ width: '100%', opacity: 0.2, margin: '2rem 0' }}></div>
        <Reveal delay={300} direction="up" style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem', opacity: 0.7 }}>
          <p>Copyright &copy; 2026 BEM FEB KBM UNIB. Hak Cipta Dilindungi.</p>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
