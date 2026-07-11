import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MessageSquare, Palette, Mic, HeartHandshake, Users, Flag } from 'lucide-react';
import Reveal from '../components/Reveal';

const programs = [
  {
    title: 'K.ARIR HUB',
    desc: 'Ekosistem persiapan karir & prestasi (Info lomba, pelatihan karya ilmiah, bimbingan S2/kerja).',
    icon: <Briefcase size={32} color="var(--color-gold)" />
  },
  {
    title: 'A.SPIRA',
    desc: 'Sistem pengelolaan aspirasi digital & forum konsolidasi.',
    icon: <MessageSquare size={32} color="var(--color-gold)" />
  },
  {
    title: 'R.AYA',
    desc: 'Ruang kreatif mahasiswa luar akademik.',
    icon: <Palette size={32} color="var(--color-gold)" />
  },
  {
    title: 'S.ERIASI',
    desc: 'Platform konten & podcast isu ekonomi/kampus.',
    icon: <Mic size={32} color="var(--color-gold)" />
  },
  {
    title: 'A.JARKAN',
    desc: 'Pengabdian masyarakat berbasis ilmu ekonomi (Literasi keuangan SMA, aksi sosial tematik).',
    icon: <HeartHandshake size={32} color="var(--color-gold)" />
  }
];

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <section className="section home-hero" style={{ 
        minHeight: '100vh', 
        display: 'flex',
        paddingBottom: '2rem',
        position: 'relative'
      }}>
        <div className="container animate-fade-in-up" style={{ textAlign: 'center', zIndex: 1 }}>
          <span style={{ color: 'var(--color-gold)', letterSpacing: '4px', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.25rem', display: 'block' }}>
            WELCOME TO
          </span>
          <h1 style={{ color: 'var(--color-gold)', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 7vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1 }}>
            BEM FEB KBM UNIB 2026
          </h1>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: '#FFF8D6', fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)', fontWeight: 400, marginBottom: '1.25rem' }}>
            Gerakan Kolektif Mahasiswa
          </h2>
          <p style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', color: 'var(--color-gray)', maxWidth: '700px', margin: '0 auto 1.5rem auto', fontWeight: 300, lineHeight: 1.6 }}>
            BEM FEB KBM UNIB adalah organisasi kemahasiswaan yang menjalankan fungsi eksekutif di lingkungan Fakultas Ekonomi dan Bisnis, Universitas Bengkulu. Kami bertujuan untuk aktif, responsif, dan konstruktif melalui berbagai program kerja, pengabdian, dan pelayanan.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link to="/about" style={{ 
              background: 'linear-gradient(135deg, rgba(212,177,90,0.9), rgba(229,194,107,0.7))',
              color: 'var(--color-black)',
              fontWeight: 600,
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              padding: '0.75rem 2rem', 
              fontSize: '0.95rem', 
              borderRadius: '50px', 
              boxShadow: '0 8px 20px rgba(212,177,90,0.2)',
              textDecoration: 'none'
            }}>
              Our Programs
            </Link>
          </div>

          <Reveal delay={200} className="grid grid-cols-2 grid-cols-2-mobile-keep" style={{ maxWidth: '800px', margin: '0 auto', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '16px' }}>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-white)', margin: 0 }}>120+</h3>
                <span style={{ color: 'var(--color-text-muted)' }}>Fungsionaris</span>
              </div>
              <Users size={36} color="var(--color-gold)" strokeWidth={1.5} />
            </div>
            <div className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '16px' }}>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-white)', margin: 0 }}>2026</h3>
                <span style={{ color: 'var(--color-text-muted)' }}>Periode</span>
              </div>
              <Flag size={36} color="var(--color-gold)" strokeWidth={1.5} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission Summary */}
      <section className="section bg-charcoal" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="glow-orb" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="glow-orb" style={{ bottom: '-10%', right: '-10%', animationDelay: '-7s' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal direction="up" className="glass-card card-float" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-gold heading-section">Visi Kami</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', fontStyle: 'italic', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              "BEM FEB KBM UNIB sebagai gerakan kolektif mahasiswa yang adaptif, berprestasi, dan berdampak bagi kampus serta masyarakat."
            </p>
            <Link to="/about" className="btn-outline">
              Baca Misi Selengkapnya
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="section" style={{ background: 'var(--color-black)' }}>
        <div className="container">
          <Reveal direction="down" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-gold" style={{ fontSize: '2.5rem' }}>Program Unggulan</h2>
            <div className="divider" style={{ width: '100px', margin: '1rem auto' }}></div>
          </Reveal>
          
          <div className="bento-grid">
            {programs.map((prog, index) => {
              // Asymmetrical Layout: index 0 and 3 are large
              const isLarge = index === 0 || index === 3;
              return (
                <Reveal 
                  key={index} 
                  delay={index * 100} 
                  direction="up"
                  className={`glass-card card-float ${isLarge ? 'bento-large' : ''}`}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <div style={{ marginBottom: '1.5rem', flexShrink: 0 }}>{prog.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', flexShrink: 0 }}>{prog.title}</h3>
                  <p style={{ flexGrow: 1, margin: 0 }}>{prog.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
