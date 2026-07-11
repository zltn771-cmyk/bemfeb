import React from 'react';
import './Marquee.css';

const Marquee = ({ text }) => {
  // We duplicate the text multiple times to ensure seamless infinite scrolling
  const repeatedText = Array(10).fill(text).join(' • ');

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <span className="marquee-text">{repeatedText}</span>
        {/* Duplicate span for seamless looping */}
        <span className="marquee-text">{repeatedText}</span>
      </div>
    </div>
  );
};

export default Marquee;
