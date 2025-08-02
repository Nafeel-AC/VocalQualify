import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <h1>Alliatus</h1>
          </div>
          
          <div className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#member-stories" className="nav-link">Member stories</a>
            <a href="#events" className="nav-link">Events</a>
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