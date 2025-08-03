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
              <span className="hero-title-emphasis">AI-Powered</span> Voice-Based Lead Qualification
            </h1>
            <p className="hero-description">
              VocalQualify automates lead qualification using intelligent voice AI, helping sales teams focus only on leads that matter while the system does the talking, scoring, and syncing.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">See How It Works</button>
            </div>
            <div className="hero-rating">
              <span className="rating-text">95% faster lead qualification</span>
              <span className="rating-subtitle">Trusted by sales teams worldwide</span>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="VocalQualify AI Lead Qualification" className="hero-image" />
              <div className="hero-image-decoration">
                <div className="star-decoration star-1"></div>
                <div className="star-decoration star-2"></div>
                <div className="star-decoration star-3"></div>
              </div>
              <div className="hero-image-tags">
                <span className="image-tag tag-1">Voice AI</span>
                <span className="image-tag tag-2">Smart Scoring</span>
                <span className="image-tag tag-3">CRM Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 