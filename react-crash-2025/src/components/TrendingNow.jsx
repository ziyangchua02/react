import React from 'react';
import './TrendingNow.css';

const TrendingNow = () => {
  return (
    <section className="trending-now">
      <h2 className="trending-title">🔥 Trending Now</h2>
      
      <div className="skills-container">
        <div className="skill-box">
          <div className="skill-emoji">🎸</div>
          <p className="skill-name">Guitar</p>
          <p className="skill-description">Popular among learners this week</p>
        </div>
        
        <div className="skill-box">
          <div className="skill-emoji">💻</div>
          <p className="skill-name">Web Development</p>
          <p className="skill-description">Popular among learners this week</p>
        </div>
        
        <div className="skill-box">
          <div className="skill-emoji">🧘</div>
          <p className="skill-name">Yoga</p>
          <p className="skill-description">Popular among learners this week</p>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
