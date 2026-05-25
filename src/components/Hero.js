import React, { memo } from 'react';
import './Hero.css';
import TextPressure from './TextPressure';
import PixelTransition from './PixelTransition';

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
            Re-imagine Your <br />
            <span className="text-pressure-wrapper">
              <TextPressure
                text="DRIVING EXPERIENCE!!"
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
          <PixelTransition
            firstContent={
              <div className="car-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=80"
                  alt="Luxury Car Showcase"
                  className="car-image"
                />
              </div>
            }
            secondContent={
              <div className="car-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80"
                  alt="Luxury Car Detail"
                  className="car-image"
                />
              </div>
            }
            gridSize={10}
            pixelColor="#ff4500"
            animationStepDuration={0.4}
            once={false}
            aspectRatio="0"
            className="hero-pixel-transition"
          />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
