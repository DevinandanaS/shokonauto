import React from 'react';
import './Footer.css';
import { Heart, Share2, Mail, MessageCircle, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about-col">
            <div className="footer-logo-wrapper">
              <Car className="footer-car-icon" />
              <h2>SHOKON<span className="gradient-text">AUTO</span></h2>
            </div>
            <p>
              Shokon Auto is a team of inquisitive minds. We are a committed dynamic, diversified firm offering innovative solutions with a drive to excel in the interest of its customers.
            </p>
            <div className="social-links">
              <a href="#"><Heart size={20} /></a>
              <a href="#"><Share2 size={20} /></a>
              <a href="#"><Mail size={20} /></a>
              <a href="#"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-col services-col">
             <h3>Services</h3>
            <ul>
              <li><a href="#">Exterior Tuning</a></li>
              <li><a href="#">Interior Customization</a></li>
              <li><a href="#">Smart Electronics</a></li>
              <li><a href="#">Performance Kits</a></li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h3>Newsletter</h3>
            <p>Subscribe to get latest updates and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button type="submit" className="btn btn-primary btn-sm">Join</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Shokon Auto. All Rights Reserved. Engineered by Spirit of Samurai.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
