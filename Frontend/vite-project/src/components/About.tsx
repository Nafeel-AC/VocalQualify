import React from 'react';
import './About.css';
import aboutImage from '../assets/images/about-image.jpg';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header scroll-fade-in">
          <h2 className="section-subtitle">WHAT IS VOCALQUALIFY?</h2>
          <h1 className="section-title">
            <span className="title-emphasis">AI-Powered</span> Voice-Based Lead Qualification System
          </h1>
        </div>
        
        <div className="about-content">
          <div className="about-image scroll-fade-left">
            <img src={aboutImage} alt="VocalQualify AI Lead Qualification" className="about-main-image" />
            <div className="about-image-decoration">
              <div className="star-decoration star-1"></div>
              <div className="star-decoration star-2"></div>
            </div>
          </div>
          
          <div className="about-text scroll-fade-right">
            <p className="about-description">
              VocalQualify is a full-stack, AI-powered lead qualification system that combines intelligent agent workflows, voice AI, and CRM automation to help businesses qualify leads more efficiently and follow up in a personalized, voice-first way.
            </p>
            
            <div className="about-features">
              <div className="feature-card card-stagger">
                <h3>SMART LEAD INTAKE</h3>
                <p>Collect leads from web forms or marketing platforms and push them to Firebase and CRM in real-time.</p>
              </div>
              
              <div className="feature-card card-stagger">
                <h3>INTELLIGENT QUALIFICATION</h3>
                <p>Use LangGraph agents to evaluate leads based on budget, timeline, business need, and engagement tone.</p>
              </div>
              
              <div className="feature-card card-stagger">
                <h3>VOICE-BASED FOLLOW-UP</h3>
                <p>Automatically initiate voice calls using VAPI to gather answers through conversational agents.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 