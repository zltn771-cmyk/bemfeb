import React from 'react';
import { Target, Lightbulb, Users, Shield, TrendingUp, Zap } from 'lucide-react';

const orgRows = [
  // Row 1 (2)
  [
    { role: 'Gubernur', id: '1IpErB4LLWbVa6s0on6TFw6jEiBEaCLsm' },
    { role: 'Wakil Gubernur', id: '10M4Hf78lEtkb7iv9naNTARkc9ApwEp1f' }
  ],
  // Row 2 (3)
  [
    { role: 'Sekretaris Kabinet 1', id: '1K0OEUGBvn5IHrZsyTVlx8CGh_tzqCiVY' },
    { role: 'Bendahara Kabinet', id: '1r46dnQWCAJO_DczCd_0lGRfJEMjkyQWN' },
    { role: 'Sekretaris Kabinet 2', id: '1D8xpNPFSwftlgZ5EMu70ydZPsmKS8BSL' }
  ],
  // Row 3 (3)
  [
    { role: 'Biro Internal', id: '15hpiQ6CbMqbTrcviUKxUXn5uy5d5nCDp' },
    { role: 'Dinas PSDM', id: '1Ti1zWzID0vWa4sUmkDQlRpjkSvJ1zaL0' },
    { role: 'Dinas Advokesma', id: '1FnTt2z9rcNKP2bFdOjwvh76s4lYn-o8v' }
  ],
  // Row 4 (3)
  [
    { role: 'Dinas Sosmas', id: '14WRE5aHk3vbge20wLbszRFZGKfJ7GYRz' },
    { role: 'Dinas Kastrat', id: '1mtxlbsb8O7u9OnAkiByTL1LWqIJH37Ey' },
    { role: 'Dinas Eksternal', id: '1uJV6pNPWu183GyT0qbT0wMj7feXawLot' }
  ],
  // Row 5 (3)
  [
    { role: 'Dinas Medinfo', id: '1ll0jRLRsykv4jFc6j_SCJvIAqLwGjJCF' },
    { role: 'Dinas Ekobis', id: '1-jZ1OxOitc4zraVGtAiBgSHwekmtXr3o' },
    { role: 'Dinas Perempuan', id: '1jlXPwhdsWzJgaAH7xoCA4QT8q7d6uOXi' }
  ]
];

const values = [
  { name: 'Inklusif', icon: <Users size={24} color="var(--color-black)" /> },
  { name: 'Responsif', icon: <Zap size={24} color="var(--color-black)" /> },
  { name: 'Transparan', icon: <Shield size={24} color="var(--color-black)" /> },
  { name: 'Berkelanjutan', icon: <TrendingUp size={24} color="var(--color-black)" /> },
  { name: 'Berdampak', icon: <Target size={24} color="var(--color-black)" /> }
];

const MemberCard = ({ member, delay, colCount }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div 
      className={`animate-fade-in-up team-card`}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        aspectRatio: '3/4',
        background: 'var(--color-bg-alt)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        cursor: 'pointer',
        width: '100%',
        animationDelay: `${delay}ms`
      }}
    >
      {!imgError ? (
        <img 
          src={`https://lh3.googleusercontent.com/d/${member.id}=w1000?authuser=0`} 
          alt={member.role}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: 'contrast(1.1) brightness(0.9)'
          }}
          className="team-img"
          onError={() => setImgError(true)}
        />
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--color-bg-alt), var(--color-black))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        }} className="team-img">
          <div style={{ 
            background: 'linear-gradient(135deg, var(--color-gold), #FFF8D6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            <Users size={64} color="var(--color-gold)" strokeWidth={1.5} />
          </div>
          <span style={{ color: 'var(--color-gray)', fontSize: '0.8rem', opacity: 0.6 }}>Akses Foto Dibatasi</span>
        </div>
      )}
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '70%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: 'var(--member-inset, 20px)',
        left: 'var(--member-inset, 20px)',
        right: 'var(--member-inset, 20px)',
        zIndex: 3,
        textAlign: 'center',
        padding: 'var(--member-padding, 0.75rem)',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
        backdropFilter: 'blur(5px)',
        background: 'rgba(0, 0, 0, 0.4)',
        transition: 'all 0.4s ease',
        transform: 'translateY(10px)',
        opacity: 0.9
      }} className="team-info">
        <h3 style={{ 
          fontSize: colCount === 3 ? 'var(--member-text-size-3, clamp(0.6rem, 1.2vw, 0.9rem))' : 'var(--member-text-size-2, clamp(0.75rem, 1.5vw, 1rem))', 
          margin: 0, 
          color: 'var(--color-gold)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.5px',
          fontWeight: 700,
          lineHeight: 1.15,
          wordBreak: 'break-word'
        }}>
          {member.role}
        </h3>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        border: '1px solid rgba(212, 175, 55, 0)',
        borderRadius: '12px',
        zIndex: 4,
        transition: 'border-color 0.4s ease',
        pointerEvents: 'none'
      }} className="team-border"></div>
    </div>
  );
};

const About = () => {
  let delayCounter = 0;

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="section about-hero">
        <div className="container animate-fade-in-up">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="text-shimmer heading-display" style={{ marginBottom: '1rem' }}>Tentang BEM FEB KBM UNIB 2026</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)' }}>
              Mengenal lebih dekat arah gerak, nilai-nilai, dan orang-orang di balik layar.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="glass-card animate-fade-in-up delay-100">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Lightbulb size={32} color="var(--color-gold)" />
                <h2 style={{ marginBottom: 0 }}>Visi</h2>
              </div>
              <p style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.8 }}>
                "BEM FEB KBM UNIB sebagai gerakan kolektif mahasiswa yang adaptif, berprestasi, dan berdampak bagi kampus serta masyarakat."
              </p>
            </div>
            
            <div className="glass-card animate-fade-in-up delay-200">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Target size={32} color="var(--color-gold)" />
                <h2 style={{ marginBottom: 0 }}>Misi</h2>
              </div>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-gray)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>Menciptakan ruang yang inklusif serta membuka partisipasi luas bagi seluruh elemen mahasiswa Fakultas Ekonomi dan Bisnis untuk berkolaborasi secara sinergis.</li>
                <li>Mengoptimalkan peran BEM FEB dalam memperjuangkan hak dan menyalurkan aspirasi mahasiswa melalui advokasi yang solutif, responsif, dan transparan.</li>
                <li>Meningkatkan kapasitas mahasiswa FEB melalui program pengembangan akademik, nonakademik, dan karier yang terstruktur, inovatif, dan relevan dengan tantangan masa depan.</li>
                <li>Mengimplementasikan program pengabdian kepada masyarakat berbasis keilmuan ekonomi dan bisnis yang berkelanjutan guna memberikan manfaat nyata bagi lingkungan sekitar.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section" style={{ background: 'var(--color-black)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="text-gold" style={{ fontSize: '2.5rem' }}>Nilai Inti (Our Values)</h2>
            <div className="divider" style={{ width: '100px', margin: '1rem auto' }}></div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className={`animate-fade-in-up delay-${(idx+1)*100}`} style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-hover))',
                color: 'var(--color-white)',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(201, 154, 60, 0.2)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.3)';
              }}
              >
                {val.icon}
                <span style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}>{val.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Org Structure */}
      <section className="section bg-charcoal">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="text-shimmer heading-section" style={{ letterSpacing: '1px' }}>Struktur Organisasi</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray)' }}>Wajah-wajah penggerak di balik BEM FEB KBM UNIB 2026</p>
            <div className="divider" style={{ width: '120px', margin: '1.5rem auto' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
            {orgRows.map((row, rowIdx) => {
              const colCount = row.length;
              return (
                <div 
                  key={rowIdx} 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: `repeat(${colCount}, 1fr)`, 
                    gap: 'clamp(0.5rem, 2vw, 2.5rem)', 
                    width: '100%', 
                    maxWidth: colCount === 2 ? '700px' : '900px' 
                  }}
                >
                  {row.map((member) => {
                    delayCounter += 100;
                    return <MemberCard key={member.id} member={member} delay={delayCounter} colCount={colCount} />
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CSS for custom elegant animations */}
      <style>{`
        .team-card:hover .team-img {
          transform: scale(1.08);
        }
        .team-card:hover .team-info {
          transform: translateY(0);
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.8);
          opacity: 1;
        }
        .team-card:hover .team-border {
          border-color: rgba(212, 175, 55, 0.4);
        }
        @media (max-width: 768px) {
          .team-card .team-info {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }
        }
        @media (max-width: 480px) {
          .team-card {
            --member-text-size-2: 0.75rem;
            --member-text-size-3: 0.55rem;
            --member-padding: 0.25rem;
            --member-inset: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
