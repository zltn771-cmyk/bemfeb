import React, { useMemo } from 'react';

const Particles = () => {
  // Generate random particles only once
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({
        id: i,
        size: Math.random() * 4 + 1, // 1px to 5px
        left: Math.random() * 100, // 0% to 100%
        duration: Math.random() * 20 + 10, // 10s to 30s
        delay: Math.random() * 10, // 0s to 10s
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    return arr;
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
