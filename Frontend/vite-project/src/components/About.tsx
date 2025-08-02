import React from 'react';
import './About.css';
import aboutImage from '../assets/images/about-image.jpg';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-subtitle">What is Alliatus?</h2>
            <h1 className="section-title">Not Your Typical Networking Group.</h1>
            <p className="about-description">
              Alliatus is a curated mastermind platform that brings together motivated individuals in small groups for deep conversation, honest feedback, and collective accountability.
            </p>
          </div>
          
          <div className="about-image">
            <img src={aboutImage} alt="Alliatus Mastermind Group" className="rounded-image" />
            <div className="about-image-decoration">
              <div className="star-decoration star-1"></div>
              <div className="star-decoration star-2"></div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <h3>Small, Handpicked Circles</h3>
              <p>You're matched with 5–6 people who are aligned with your stage, goals, and mindset.</p>
            </div>
            
            <div className="feature-card">
              <h3>Real Conversations</h3>
              <p>No fluff. Get feedback, ask for help, and brainstorm challenges in structured calls.</p>
            </div>
            
            <div className="feature-card">
              <h3>Consistent Growth</h3>
              <p>Ongoing sessions to help you stay accountable, make bold moves, and reach goals faster.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 