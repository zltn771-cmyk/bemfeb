import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, delay = 0, direction = 'up', className = '', style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      case 'scale': return 'scale(0.9)';
      default: return 'translateY(40px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0px, 0px) scale(1)' : getTransform(),
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.25, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
