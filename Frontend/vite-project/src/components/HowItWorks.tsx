import React from 'react';
import './HowItWorks.css';
import howItWorksImage from '../assets/images/how-it-works-image.jpg';

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <h2 className="section-subtitle">HOW IT WORKS</h2>
          <h1 className="section-title">
            From Lead to Qualified — <span className="title-emphasis">Step by Step</span>
          </h1>
        </div>
        
        <div className="layout">
          <div className="card apply-online">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>LEAD INTAKE</h3>
              <p>Collect leads from web forms, ads, or marketing platforms via n8n webhooks.</p>
            </div>
          </div>
          
          <div className="card get-matched">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>AI EVALUATION</h3>
              <p>LangGraph agents analyze leads based on budget, timeline, and business needs.</p>
            </div>
          </div>
          
          <div className="card join-sessions">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>VOICE FOLLOW-UP</h3>
              <p>VAPI automatically calls leads that need more information using natural voice AI.</p>
            </div>
          </div>
          
          <div className="card grow">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3>CRM SYNC & NOTIFY</h3>
              <p>Update lead scores in CRM and notify sales team of hot leads automatically.</p>
            </div>
          </div>
          
          <div className="card image-section">
            <img src={howItWorksImage} alt="How it works" className="main-image" />
          </div>
          
          <div className="card whats-included">
            <h3>WHAT'S INCLUDED</h3>
            <div className="included-content">
              <p>
                Smart lead qualification with LangGraph<br/>
                Voice-based follow-up using VAPI<br/>
                Real-time CRM integration (HubSpot, Zoho)<br/>
                Automated notifications & task creation<br/>
                Firebase-powered data storage & sync
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 