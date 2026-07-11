import React from 'react';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';

const StudentInfo = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <section className="section" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up">
            <h1 className="text-shimmer heading-display" style={{ marginBottom: '1rem' }}>Informasi Mahasiswa</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Pusat informasi prestasi dan peluang akademik bagi seluruh mahasiswa Fakultas Ekonomi dan Bisnis Universitas Bengkulu.
            </p>
          </div>

          <div className="grid grid-cols-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Banner 1 */}
            <a 
              href="https://drive.google.com/drive/folders/1FLJfDPpM0CgXn7_fW2oseAscCDLiOn3j"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card animate-fade-in-up delay-100"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--color-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '2rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Award size={64} color="var(--color-gold)" />
              </div>
              <h2 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Archive Mahasiswa Berprestasi</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Temukan daftar dan arsip mahasiswa berprestasi FEB UNIB
              </p>
              <span className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Akses Folder <ExternalLink size={18} />
              </span>
            </a>

            {/* Banner 2 */}
            <a 
              href="https://drive.google.com/drive/folders/15T7VIMX7yPhnFq-ckiJD3bVRnLX6SK09"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card animate-fade-in-up delay-200"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--color-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '2rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <GraduationCap size={64} color="var(--color-gold)" />
              </div>
              <h2 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Info Beasiswa Terkini</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Akses direktori beasiswa terbaru untuk mendukung perjalanan akademikmu
              </p>
              <span className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Akses Folder <ExternalLink size={18} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentInfo;
