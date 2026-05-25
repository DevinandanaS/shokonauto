import React, { memo } from 'react';
import './ProductCard.css';
import { Plus } from 'lucide-react';

const ProductCard = memo(({ image, title, description }) => {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={image} alt={title} />
        <div className="card-overlay">
           <button className="btn-icon"><Plus size={24} /></button>
        </div>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-footer">
          <span className="price-tag">Premium Grade</span>
          <a href="#contact" className="learn-more">Enquire Now</a>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
