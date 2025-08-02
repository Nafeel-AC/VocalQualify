import React from 'react';
import './HowItWorks.css';
import howItWorksImage from '../assets/images/how-it-works-image.jpg';

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <h2 className="section-subtitle">How It Works</h2>
          <h1 className="section-title">From Application to Transformation — Step by Step</h1>
        </div>
        
        <div className="how-it-works-content">
          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Apply Online</h3>
                <p>Tell us about your goals, background, and what kind of support you're seeking.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Get Matched</h3>
                <p>We carefully place you in a mastermind circle of 5–6 aligned members.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Join Bi-Weekly Sessions</h3>
                <p>Meet over Zoom for structured, focused conversations led by a trained host.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Grow With Accountability</h3>
                <p>Set goals, stay on track, and get continuous feedback from your circle.</p>
              </div>
            </div>
          </div>
          
          <div className="how-it-works-image">
            <img src={howItWorksImage} alt="How it works" className="rounded-image" />
            <div className="image-decoration">
              <div className="star-decoration"></div>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="whats-included">
          <h3>what's included</h3>
          <div className="included-content">
            <p>
              Private online community<br/>
              Goal-tracking and reflection tools<br/>
              Access to session recordings (optional for privacy)<br/>
              Session prep templates & prompts<br/>
              Library of expert resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 