import React, { memo } from 'react';
import './StatsSection.css';
import { Award, Users, Globe, Briefcase } from 'lucide-react';

const StatsSection = memo(() => {
  const stats = [
    { icon: <Award />, count: "15+", label: "Years Experience" },
    { icon: <Users />, count: "5000+", label: "Happy Clients" },
    { icon: <Globe />, count: "12", label: "Global Partners" },
    { icon: <Briefcase />, count: "150+", label: "Projects Done" }
  ];

  return (
    <section className="stats-section">
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
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;
