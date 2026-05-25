import React, { memo } from 'react';
import './WelcomeSection.css';
import { Award, Users, Globe, Briefcase } from 'lucide-react';

const WelcomeSection = memo(() => {
  const stats = [
    { icon: <Award />, count: "15+", label: "Years Experience" },
    { icon: <Users />, count: "5000+", label: "Happy Clients" },
    { icon: <Globe />, count: "12", label: "Global Partners" },
    { icon: <Briefcase />, count: "150+", label: "Projects Done" }
  ];

  return (
    <section className="welcome-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <h3>{stat.count}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="welcome-container">
          <div className="welcome-left">
            <div className="image-stack">
              <img src="https://shokonauto.com/wp-content/uploads/2023/10/we23.jpg" alt="Samurai Spirit" className="main-img" />
              <div className="accent-box"></div>
            </div>
          </div>
          <div className="welcome-right">
            <div className="welcome-content">
              <span className="section-subtitle">THE SAMURAI SPIRIT</span>
              <h2 className="welcome-main-title">
                Excellence Forged in <span className="gradient-text">Tradition</span>
              </h2>
              <p>
                The name <strong>Shokon</strong> signifies the Spirit of a Samurai. Our business excels through the same spirit that propelled the Japanese auto industry to global dominance.
              </p>
              <p>
                Qualities like determination, tenacity, and an eagerness to acquire knowledge allow us to create state-of-the-art features that separate the best from the ordinary.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WelcomeSection.displayName = 'WelcomeSection';

export default WelcomeSection;
