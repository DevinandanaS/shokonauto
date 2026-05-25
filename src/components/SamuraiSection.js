import React, { memo } from 'react';
import './SamuraiSection.css';
import { TextGenerateEffect } from './TextGenerateEffect';

const SamuraiSection = memo(() => {
  return (
    <section className="samurai-section">
      <div className="container">
        <div className="samurai-container">
          <div className="samurai-left">
            <div className="image-stack">
              <img src="https://shokonauto.com/wp-content/uploads/2023/10/we23.jpg" alt="Samurai Spirit" className="main-img" />
              <div className="accent-box"></div>
            </div>
          </div>
          <div className="samurai-right">
            <div className="samurai-content">
              <span className="section-subtitle">THE SAMURAI SPIRIT</span>
              <h2 className="samurai-main-title">
                Excellence Forged in <span className="gradient-text">Tradition</span>
              </h2>
              <TextGenerateEffect 
                words="The name Shokon signifies the Spirit of a Samurai. Our business excels through the same spirit that propelled the Japanese auto industry to global dominance."
                className="samurai-paragraph"
              />
              <TextGenerateEffect 
                words="Qualities like determination, tenacity, and an eagerness to acquire knowledge allow us to create state-of-the-art features that separate the best from the ordinary."
                className="samurai-paragraph"
              />
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SamuraiSection.displayName = 'SamuraiSection';

export default SamuraiSection;
