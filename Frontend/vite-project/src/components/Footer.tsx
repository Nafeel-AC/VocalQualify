import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <h2>Alliatus</h2>
            </div>
            
            <div className="footer-links">
              <div className="footer-links-column">
                <a href="#home">Home</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#member-stories">Member Stories</a>
                <a href="#events">Events</a>
              </div>
              
              <div className="footer-links-column">
                <a href="#about">About</a>
                <a href="#faq">FAQ</a>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
            </div>
            
            <div className="footer-social">
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 9H14V4H5V21H19V9Z" fill="#303030"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 9H14V4H5V21H19V9Z" fill="#303030"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 9H14V4H5V21H19V9Z" fill="#303030"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 9H14V4H5V21H19V9Z" fill="#303030"/>
                </svg>
              </a>
            </div>
            
            <div className="footer-copyright">
              <p>© 2025 Alliatus. All rights reserved.</p>
              <p>Powered by connection, clarity, and community.</p>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-cta">
              <h3>Let's Get Started!</h3>
              <p>
                Join a supportive circle of minds and start growing with intention.
                <br /><br />
                There's a seat at the table waiting for you.
              </p>
              <button className="btn btn-primary">Join Alliatus</button>
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