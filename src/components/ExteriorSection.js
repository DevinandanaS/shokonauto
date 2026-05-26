import React, { memo } from 'react';
import CardSwap, { Card } from './CardSwap';
import ScrollFloat from './ScrollFloat';
import './ExteriorSection.css';

const ExteriorSection = memo(({ products }) => {
  const [forceUpdate, setForceUpdate] = React.useState(0);

  // Reorder products array based on which card should be in front
  const reorderedProducts = React.useMemo(() => {
    const order = [...products];
    // Move clicked card to front by rotating array
    for (let i = 0; i < forceUpdate % products.length; i++) {
      order.push(order.shift());
    }
    return order;
  }, [products, forceUpdate]);

  const handlePrevCard = () => {
    setForceUpdate(prev => prev - 1);
  };

  const handleNextCard = () => {
    setForceUpdate(prev => prev + 1);
  };

  const handleIndicatorClick = (index) => {
    setForceUpdate(index);
  };

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
            delay={2500}
            pauseOnHover={true}
            skewAmount={4}
            easing="elastic"
          >
            {reorderedProducts.map((product, index) => (
              <Card key={product.title} customClass="exterior-card">
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
              {products.map((product, index) => (
                <button
                  key={index}
                  className={`indicator ${index === (forceUpdate % products.length) ? 'active' : ''}`}
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
