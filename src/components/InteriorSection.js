import React, { memo } from 'react';
import InfiniteFloatingCards from './InfiniteFloatingCards';
import ScrollFloat from './ScrollFloat';
import './InteriorSection.css';

const InteriorSection = memo(({ products }) => {
  return (
    <section className="interior-section">
      <div className="container">
        <div className="section-head">
          <div className="head-left">
            <span className="section-subtitle">LUXURY COMFORT</span>
            <ScrollFloat 
              containerClassName="interior-section-title"
              scrollStart="top bottom-=10%"
              scrollEnd="center center"
            >
              INTERIOR INNOVATIONS
            </ScrollFloat>
          </div>
        </div>

        <InfiniteFloatingCards cards={products} />
      </div>
    </section>
  );
});

InteriorSection.displayName = 'InteriorSection';

export default InteriorSection;
