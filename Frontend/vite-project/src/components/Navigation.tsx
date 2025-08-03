import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <h1>VocalQualify</h1>
          </div>
          
          <div className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          <div className="nav-auth">
            <a href="#login" className="nav-link">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 