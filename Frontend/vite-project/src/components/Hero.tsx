import React from 'react';
import './Hero.css';
import heroImage from '../assets/images/hero-image.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Level Up with a Curated Mastermind Circle
            </h1>
            <p className="hero-description">
              Alliatus connects ambitious people into small, handpicked groups for honest feedback, strategy sessions, and real accountability.
            </p>
            <div className="hero-rating">
              <span className="rating-text">4.9★ average rating</span>
              <span className="rating-subtitle">Feedback from real members across sessions.</span>
            </div>
            <div className="hero-tags">
              <span className="tag">Real conversations.</span>
              <span className="tag">Collective growth.</span>
              <span className="tag">Fresh insights.</span>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-secondary">Learn How It Works</button>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Alliatus Mastermind" className="hero-image" />
              <div className="hero-image-decoration">
                <div className="star-decoration star-1"></div>
                <div className="star-decoration star-2"></div>
                <div className="star-decoration star-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 