import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-subtitle">PRICING</h2>
          <h1 className="section-title">Plans That <em>Fit You</em></h1>
        </div>
        
        <div className="pricing-content">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Starter</h3>
              <p className="plan-description">PERFECT FOR TRYING THINGS OUT.</p>
              <div className="plan-price">
                <span className="currency">€</span>
                <span className="amount">49</span>
                <span className="period">/mo</span>
              </div>
            </div>
            
            <div className="pricing-features">
              <ul>
                <li>2 group sessions/month</li>
                <li>Community access</li>
                <li>Session summaries</li>
                <li>Private messaging</li>
              </ul>
            </div>
            
            <button className="btn btn-primary">Join Now</button>
          </div>
          
          <div className="pricing-card featured">
            <div className="pricing-card-header">
              <h3 className="plan-name">Growth</h3>
              <p className="plan-description">OUR MOST POPULAR MEMBERSHIP.</p>
              <div className="plan-price">
                <span className="currency">€</span>
                <span className="amount">89</span>
                <span className="period">/mo</span>
              </div>
            </div>
            
            <div className="pricing-features">
              <ul>
                <li>Weekly group sessions</li>
                <li>Goal-tracking tools</li>
                <li>Full community access</li>
                <li>Access to recordings</li>
                <li>Priority support</li>
              </ul>
            </div>
            
            <button className="btn btn-primary">Start Growing</button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Circle+</h3>
              <p className="plan-description">FOR FULL SUPPORT & 1:1 COACHING</p>
              <div className="plan-price">
                <span className="currency">€</span>
                <span className="amount">149</span>
                <span className="period">/mo</span>
              </div>
            </div>
            
            <div className="pricing-features">
              <ul>
                <li>Everything in Growth</li>
                <li>Monthly 1:1 coaching</li>
                <li>Personalized session recaps</li>
                <li>VIP Q&A calls</li>
                <li>Early event access</li>
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