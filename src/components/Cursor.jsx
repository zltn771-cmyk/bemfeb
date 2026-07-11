import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  
  // Springy trailing position
  const [trailPos, setTrailPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Animation loop for trailing effect (smooth lerp)
  useEffect(() => {
    let animationFrameId;
    
    const render = () => {
      setTrailPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15, // 0.15 is the lerp factor (smoothness)
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Hide on mobile touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main tiny dot */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--color-gold)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isPointer ? 0.5 : 1})`,
          transition: 'transform 0.2s ease-out',
          boxShadow: '0 0 10px var(--color-gold)'
        }}
      />
      {/* Trailing larger ring */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: `1.5px solid ${isPointer ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0.3)'}`,
          backgroundColor: isPointer ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: `translate(${trailPos.x - 20}px, ${trailPos.y - 20}px) scale(${isPointer ? 1.5 : 1})`,
          transition: 'transform 0.3s ease-out, background-color 0.3s ease, border-color 0.3s ease',
        }}
      />
    </>
  );
};

export default Cursor;
