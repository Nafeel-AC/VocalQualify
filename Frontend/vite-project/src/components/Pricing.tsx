import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-subtitle">PRICING</h2>
          <h1 className="section-title">Plans That Fit You</h1>
        </div>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Starter</h3>
              <p className="plan-description">Perfect for trying things out.</p>
              <div className="plan-price">€49/mo</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>2 group sessions/month</li>
                <li>Community access</li>
                <li>Goal-tracking tools</li>
                <li>Session summaries</li>
                <li>Access to recordings</li>
              </ul>
            </div>
            <button className="btn btn-primary">Join Now</button>
          </div>
          
          <div className="pricing-card featured">
            <div className="pricing-card-header">
              <h3 className="plan-name">Growth</h3>
              <p className="plan-description">Our most popular membership.</p>
              <div className="plan-price">€89/mo</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Weekly group sessions</li>
                <li>Full community access</li>
                <li>Personalized session recaps</li>
                <li>Private messaging</li>
                <li>Priority support</li>
              </ul>
            </div>
            <button className="btn btn-primary">Start Growing</button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Circle+</h3>
              <p className="plan-description">For full support & 1:1 coaching</p>
              <div className="plan-price">€149/mo</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Everything in Growth</li>
                <li>Monthly 1:1 coaching</li>
                <li>VIP Q&A calls</li>
                <li>Early event access</li>
                <li>Priority support</li>
              </ul>
            </div>
            <button className="btn btn-primary">Join Circle+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 