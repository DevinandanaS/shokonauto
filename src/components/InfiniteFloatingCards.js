import React, { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './InfiniteFloatingCards.css';

const InfiniteFloatingCards = memo(({ cards }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current || cardsRef.current.length === 0) return;

    const animations = cardsRef.current.map((card, index) => {
      if (!card) return null;

      // Random float animation for each card
      const duration = 3 + Math.random() * 2; // 3-5 seconds
      const yOffset = 20 + Math.random() * 30; // 20-50px
      const rotation = -5 + Math.random() * 10; // -5 to 5 degrees
      const delay = index * 0.3; // Stagger start

      return gsap.to(card, {
        y: `+=${yOffset}`,
        rotation: rotation,
        duration: duration,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: delay
      });
    });

    return () => {
      animations.forEach(anim => anim?.kill());
    };
  }, [cards]);

  return (
    <div className="infinite-floating-cards" ref={containerRef}>
      <div className="floating-cards-track">
        {cards.map((card, index) => (
          <div
            key={index}
            className="floating-card"
            ref={el => (cardsRef.current[index] = el)}
          >
            <div className="floating-card-image">
              <img src={card.image} alt={card.title} />
              <div className="floating-card-overlay"></div>
            </div>
            <div className="floating-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="floating-card-footer">
                <span className="floating-price-tag">Premium Grade</span>
                <a href="#contact" className="floating-learn-more">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

InfiniteFloatingCards.displayName = 'InfiniteFloatingCards';

export default InfiniteFloatingCards;
