import React, { memo } from 'react';
import ProductCard from './ProductCard';
import './ProductSection.css';
import { LayoutGrid } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const ProductSection = memo(({ subtitle, title, products, bgColor }) => {
  return (
    <section className="product-section" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="section-head">
          <div className="head-left">
            <span className="section-subtitle">{subtitle}</span>
            <ScrollFloat 
              containerClassName="product-section-title"
              scrollStart="top bottom-=10%"
              scrollEnd="center center"
            >
              {title}
            </ScrollFloat>
          </div>
          <button className="btn btn-outline hide-mobile">
            <LayoutGrid size={18} /> View Catalog
          </button>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="mobile-view-all">
           <button className="btn btn-primary">View All Products</button>
        </div>
      </div>
    </section>
  );
});

ProductSection.displayName = 'ProductSection';

export default ProductSection;
