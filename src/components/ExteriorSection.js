import React, { memo } from 'react';
import CardSwap, { Card } from './CardSwap';
import ScrollFloat from './ScrollFloat';
import './ExteriorSection.css';

const ExteriorSection = memo(({ products }) => {
  const [currentCard, setCurrentCard] = React.useState(0);
  const [manualControl, setManualControl] = React.useState(false);
  const timeoutRef = React.useRef(null);

  const handleCardClick = (index) => {
    setCurrentCard(index);
    setManualControl(true);
    
    // Resume auto-play after 5 seconds
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setManualControl(false), 5000);
  };

  const handlePrevCard = () => {
    const newIndex = currentCard === 0 ? products.length - 1 : currentCard - 1;
    setCurrentCard(newIndex);
    setManualControl(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setManualControl(false), 5000);
  };

  const handleNextCard = () => {
    const newIndex = currentCard === products.length - 1 ? 0 : currentCard + 1;
    setCurrentCard(newIndex);
    setManualControl(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setManualControl(false), 5000);
  };

  const handleIndicatorClick = (index) => {
    setCurrentCard(index);
    setManualControl(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setManualControl(false), 5000);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
            delay={manualControl ? 999999 : 2500}
            pauseOnHover={true}
            skewAmount={4}
            easing="elastic"
            onCardClick={handleCardClick}
            key={currentCard}
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
          
          <div className="card-navigation">
            <button className="nav-btn prev-btn" onClick={handlePrevCard} aria-label="Previous card">
              ‹
            </button>
            <div className="card-indicators">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentCard ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
            <button className="nav-btn next-btn" onClick={handleNextCard} aria-label="Next card">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

ExteriorSection.displayName = 'ExteriorSection';

export default ExteriorSection;
