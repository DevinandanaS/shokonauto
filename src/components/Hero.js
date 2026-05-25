import React, { memo } from 'react';
import './Hero.css';
import { ChevronRight, Shield, Zap, Sparkles } from 'lucide-react';

const Hero = memo(() => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow-circle top"></div>
        <div className="glow-circle bottom"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <Sparkles size={14} />
            <span>Premium Auto Solutions</span>
          </div>
          <h1>
            Reimagine Your <br />
            <span className="gradient-text">Driving Experience</span>
          </h1>
          <p>
            Shokon Auto is the automotive aftermarket design, manufacture and distribution company based in Dubai, United Arab Emirates. We bring next-gen innovation to your vehicle.
          </p>
          
          <div className="hero-btns">
            <button className="btn btn-primary">
              Explore Products <ChevronRight size={18} />
            </button>
            <button className="btn btn-outline">Our Services</button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <Shield className="stat-icon" />
              <span>Certified Quality</span>
            </div>
            <div className="hero-stat-item">
              <Zap className="stat-icon" />
              <span>Fast Response</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="car-placeholder">
            <div className="placeholder-content">
              <div className="car-icon">🚗</div>
              <h3>Premium Showcase</h3>
              <p>3D Visualization Coming Soon</p>
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
