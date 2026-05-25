import React, { useState, useEffect } from 'react';
import './Header.css';
import { Phone, Mail, Car } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Car className="header-car-icon" />
          <h1>SHOKON<span className="gradient-text">AUTO</span></h1>
        </div>
        
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-contact">
          <div className="contact-item">
            <Phone size={18} />
            <div className="contact-details">
              <span>CALL US</span>
              <a href="tel:+97142322971">+971 4 2322 971</a>
            </div>
          </div>
          <div className="contact-item hide-mobile">
            <Mail size={18} />
            <div className="contact-details">
              <span>EMAIL US</span>
              <a href="mailto:info@shokonauto.com">info@shokonauto.com</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
