import React, { memo } from 'react';
import './ContactForm.css';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import MagicBento from './MagicBento';

const ContactForm = memo(() => {
  return (
    <section id="contact" className="contact-form-section">
      <div className="container">
        <div className="contact-header-section">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">
            Schedule an <span className="gradient-text">Appointment</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-cards">
            <div className="info-card">
              <MapPin className="info-icon" />
              <h3>Visit Us</h3>
              <p>Ras Al Khor, Dubai, UAE</p>
            </div>
            <div className="info-card">
              <Phone className="info-icon" />
              <h3>Call Us</h3>
              <p>+971 4 2322 971</p>
            </div>
            <div className="info-card">
              <Mail className="info-icon" />
              <h3>Email Us</h3>
              <p>info@shokonauto.com</p>
            </div>
          </div>

          <div className="form-wrapper">
            <form className="query-form">
              <div className="form-row">
                <div className="input-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="input-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="input-group">
                  <select>
                    <option>Select Service</option>
                    <option>Exterior Upgrade</option>
                    <option>Interior Upgrade</option>
                    <option>Full Customization</option>
                  </select>
                </div>
              </div>
              <div className="input-group">
                <textarea placeholder="Tell us about your vehicle..." rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Magic Bento Grid */}
        <div className="magic-bento-section">
          <h3 className="bento-section-title">Why Choose Us</h3>
          <MagicBento
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="255, 69, 0"
            spotlightRadius={300}
            particleCount={12}
          />
        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;
