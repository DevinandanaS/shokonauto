import React, { memo } from 'react';
import './Hero.css';
import TextPressure from './TextPressure';

const Hero = memo(() => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow-circle top"></div>
        <div className="glow-circle bottom"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Reimagine Your <br />
            <span className="text-pressure-wrapper">
              <TextPressure
                text="DRIVING EXPERIENCE"
                textColor="#ff4500"
                minFontSize={40}
                width={true}
                weight={true}
                italic={false}
                alpha={false}
                flex={false}
                stroke={false}
                scale={false}
              />
            </span>
          </h1>
          <p>
            Shokon Auto is the automotive aftermarket design, manufacture and distribution company based in Dubai, United Arab Emirates. We bring next-gen innovation to your vehicle.
          </p>
          
          <div className="hero-btns">
            <button className="btn btn-primary">
              Explore Products
            </button>
            <button className="btn btn-outline">Our Services</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="car-placeholder">
            <div className="placeholder-content">
              <div className="car-icon">🚗</div>
              <h3>Premium Showcase</h3>
              <p>3D Visualization Space</p>
            </div>
          </div>
          <div className="visual-caption">
            <span className="pulse-dot"></span>
            Interactive 3D Model Space
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
