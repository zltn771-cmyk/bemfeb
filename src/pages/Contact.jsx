import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <section className="section" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up">
            <h1 className="text-shimmer heading-display" style={{ marginBottom: '1rem' }}>Mari Berkolaborasi</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Punya ide brilian, pertanyaan, atau ingin menjalin kemitraan? Jangan ragu untuk menghubungi kami melalui kontak di bawah ini.
            </p>
            <div className="divider" style={{ width: '100px', margin: '2rem auto' }}></div>
          </div>

          <div className="grid grid-cols-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Email */}
            <div className="glass-card animate-fade-in-up delay-100" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--color-gold)', padding: '1rem', borderRadius: '12px' }}>
                <Mail size={32} color="var(--color-black)" />
              </div>
              <div>
                <h3 className="text-gold" style={{ marginBottom: '0.5rem' }}>Email</h3>
                <a href="mailto:bemfebunib2026@gmail.com" style={{ fontSize: '1.1rem' }}>bemfebunib2026@gmail.com</a>
              </div>
            </div>

            {/* Sekretaris Kabinet 2 */}
            <div className="glass-card animate-fade-in-up delay-200" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--color-gold)', padding: '1rem', borderRadius: '12px' }}>
                <Phone size={32} color="var(--color-black)" />
              </div>
              <div>
                <h3 className="text-gold" style={{ marginBottom: '0.5rem' }}>Sekretaris Kabinet 2</h3>
                <a href="https://wa.me/6282376231935" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem' }}>+62 823-7623-1935</a>
              </div>
            </div>

            {/* Partnership */}
            <div className="glass-card animate-fade-in-up delay-300" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--color-gold)', padding: '1rem', borderRadius: '12px' }}>
                <Phone size={32} color="var(--color-black)" />
              </div>
              <div>
                <h3 className="text-gold" style={{ marginBottom: '0.5rem' }}>Partnership</h3>
                <a href="https://wa.me/6283121762110" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem' }}>+62 831-2176-2110</a>
              </div>
            </div>

            {/* Media Partner */}
            <div className="glass-card animate-fade-in-up delay-400" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--color-gold)', padding: '1rem', borderRadius: '12px' }}>
                <Phone size={32} color="var(--color-black)" />
              </div>
              <div>
                <h3 className="text-gold" style={{ marginBottom: '0.5rem' }}>Media Partner</h3>
                <a href="https://wa.me/6282183878727" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem' }}>+62 821-8387-8727</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
