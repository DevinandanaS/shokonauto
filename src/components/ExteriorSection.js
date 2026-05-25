import React, { memo } from 'react';
import CardSwap, { Card } from './CardSwap';
import ScrollFloat from './ScrollFloat';
import './ExteriorSection.css';

const ExteriorSection = memo(({ products }) => {
  return (
    <section className="exterior-section">
      <div className="container">
        <div className="section-head">
          <div className="head-left">
            <span className="section-subtitle">PREMIUM UPGRADES</span>
            <ScrollFloat 
              containerClassName="exterior-section-title"
              scrollStart="top bottom-=10%"
              scrollEnd="center center"
            >
              EXTERIOR ESSENTIALS
            </ScrollFloat>
          </div>
        </div>

        <div className="card-swap-wrapper">
          <CardSwap
            width={400}
            height={500}
            cardDistance={40}
            verticalDistance={50}
            delay={4000}
            pauseOnHover={true}
            skewAmount={4}
            easing="elastic"
          >
            {products.map((product, index) => (
              <Card key={index} customClass="exterior-card">
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="card-footer">
                    <span className="price-tag">Premium Grade</span>
                    <a href="#contact" className="learn-more">Enquire Now</a>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
});

ExteriorSection.displayName = 'ExteriorSection';

export default ExteriorSection;
