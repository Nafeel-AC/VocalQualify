import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <h2>VocalQualify</h2>
            </div>
            
            <div className="footer-links">
              <div className="footer-links-column">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#how-it-works">How it works</a>
                <a href="#pricing">Pricing</a>
              </div>
              
              <div className="footer-links-column">
                <a href="#about">About</a>
                <a href="#faq">FAQ</a>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
            </div>
            
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="#303030"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="#303030"/>
                  <rect x="2" y="9" width="4" height="12" fill="#303030"/>
                  <circle cx="4" cy="4" r="2" fill="#303030"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#303030"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#303030" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="#303030" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#303030" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
            
            <div className="footer-copyright">
              <p>© 2025 VocalQualify. All rights reserved.</p>
              <p>AI-Powered Voice-Based Lead Qualification & CRM Automation</p>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-cta">
              <h3>Ready to Transform Your Lead Qualification?</h3>
              <p>
                Join hundreds of sales teams who have automated their lead qualification process with VocalQualify.
                <br /><br />
                Start qualifying leads faster today.
              </p>
              <button className="btn btn-primary">Get Started Free</button>
            </div>
            
            <div className="footer-decoration">
              <div className="star-decoration star-1"></div>
              <div className="star-decoration star-2"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 