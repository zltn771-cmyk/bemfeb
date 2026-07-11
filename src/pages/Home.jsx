import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MessageSquare, Palette, Mic, HeartHandshake } from 'lucide-react';

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
      <section className="section" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative'
      }}>
        <div className="container animate-fade-in-up" style={{ textAlign: 'center', zIndex: 1 }}>
          <h1 className="text-shimmer heading-display" style={{ marginBottom: '1.5rem' }}>
            BEM FEB KBM UNIB 2026
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 3rem auto', fontWeight: 300 }}>
            Gerakan kolektif mahasiswa yang adaptif, berprestasi, dan berdampak.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              Kenali Kami Lebih Dekat <ArrowRight size={20} />
            </Link>
            <Link to="/student-info" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              Info Mahasiswa
            </Link>
          </div>
        </div>
      </section>

      {/* Identitas Kabinet */}
      <section className="section" style={{ background: '#FDFBF7', color: 'var(--color-black)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate-fade-in-up delay-100" style={{ textAlign: 'center' }}>
              <img 
                src="/kabinet-karsa-adhiyasa.jpg" 
                alt="Logo Kabinet Karsa Adhiyasa" 
                className="animate-float"
                style={{ 
                  width: '100%', 
                  maxWidth: '450px', 
                  height: 'auto', 
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 20px 40px rgba(201,154,60,0.15))'
                }} 
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '1rem', color: 'var(--color-black)', fontWeight: '800' }}>
                Kabinet <span style={{ color: 'var(--color-gold)' }}>Karsa Adhiyasa</span>
              </h2>
              <div className="divider" style={{ width: '80px', margin: '0 0 1.5rem 0', background: 'var(--color-gold)' }}></div>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444', marginBottom: '1.5rem' }}>
                <strong>"Karsa"</strong> melambangkan kehendak yang kuat, dedikasi, dan cita-cita luhur mahasiswa untuk membawa perubahan positif yang berdampak nyata.
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444' }}>
                <strong>"Adhiyasa"</strong> merepresentasikan sinergi, ketangguhan, keadilan, dan keberanian dalam mengabdi kepada nusa, bangsa, serta almamater Universitas Bengkulu tercinta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identitas Kabinet */}
      <section className="section" style={{ background: '#FDFBF7', color: '#1A202C' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate-fade-in-up delay-100" style={{ textAlign: 'center' }}>
              <img 
                src="/kabinet-karsa-adhiyasa.jpg" 
                alt="Logo Kabinet Karsa Adhiyasa" 
                className="animate-float"
                style={{ 
                  width: '100%', 
                  maxWidth: '450px', 
                  height: 'auto', 
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 20px 40px rgba(201,154,60,0.15))'
                }} 
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '1rem', color: '#1A202C', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                Kabinet <span style={{ color: 'var(--color-gold)' }}>Karsa Adhiyasa</span>
              </h2>
              <div className="divider" style={{ width: '80px', margin: '0 0 1.5rem 0', background: 'var(--color-gold)' }}></div>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444', marginBottom: '1.5rem', fontWeight: 400 }}>
                <strong>"Karsa"</strong> melambangkan kehendak yang kuat, dedikasi, dan cita-cita luhur mahasiswa untuk membawa perubahan positif yang berdampak nyata.
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444', fontWeight: 400 }}>
                <strong>"Adhiyasa"</strong> merepresentasikan sinergi, ketangguhan, keadilan, dan keberanian dalam mengabdi kepada nusa, bangsa, serta almamater Universitas Bengkulu tercinta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Summary */}
      <section className="section bg-charcoal">
        <div className="container">
          <div className="glass-card animate-fade-in-up delay-200" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-gold heading-section">Visi Kami</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', fontStyle: 'italic', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              "BEM FEB KBM UNIB sebagai gerakan kolektif mahasiswa yang adaptif, berprestasi, dan berdampak bagi kampus serta masyarakat."
            </p>
            <Link to="/about" className="btn-outline">
              Baca Misi Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="section" style={{ background: 'var(--color-black)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up delay-100">
            <h2 className="text-gold" style={{ fontSize: '2.5rem' }}>Program Unggulan</h2>
            <div className="divider" style={{ width: '100px', margin: '1rem auto' }}></div>
          </div>
          
          <div className="grid grid-cols-3">
            {programs.slice(0, 3).map((prog, index) => (
              <div key={index} className={`glass-card animate-fade-in-up delay-${(index+1)*100}`}>
                <div style={{ marginBottom: '1.5rem' }}>{prog.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{prog.title}</h3>
                <p>{prog.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2" style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto 0 auto' }}>
            {programs.slice(3, 5).map((prog, index) => (
              <div key={index} className={`glass-card animate-fade-in-up delay-${(index+4)*100}`}>
                <div style={{ marginBottom: '1.5rem' }}>{prog.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{prog.title}</h3>
                <p>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
