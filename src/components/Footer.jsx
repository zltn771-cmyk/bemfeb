import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-bg-alt)', padding: '3rem 0 1rem 0', marginTop: 'auto' }}>
      <div className="container">
        <div className="grid grid-cols-3" style={{ marginBottom: '2rem' }}>
          <div>
            <h3 className="text-gold" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>BEM FEB UNIB</h3>
            <p style={{ maxWidth: '300px', color: 'var(--color-text-muted)' }}>
              Gerakan kolektif mahasiswa yang adaptif, berprestasi, dan berdampak bagi kampus serta masyarakat.
            </p>
          </div>
          <div>
            <h4 className="text-gold">Tautan Cepat</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="/">Beranda</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/about">Tentang Kami</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/student-info">Info Mahasiswa</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/contact">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold">Sosial Media & Kontak</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <a href="https://instagram.com/bemfebunib" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
              </a>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
               <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  Tiktok
              </a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          <p>Copyright &copy; 2026 BEM FEB KBM UNIB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
