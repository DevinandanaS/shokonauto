import React, { useEffect, useState } from 'react';
import './IntroPage.css';
import { Car } from 'lucide-react';

const IntroPage = ({ onFinish }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(onFinish, 1000); // Wait for exit animation
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`intro-container ${exit ? 'exit' : ''}`}>
      <div className="intro-content">
        <div className="logo-wrapper">
          <Car className="intro-icon" size={80} />
          <div className="logo-ring"></div>
        </div>
        <h1 className="intro-text">
          SHOKON<span className="gradient-text">AUTO</span>
        </h1>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
