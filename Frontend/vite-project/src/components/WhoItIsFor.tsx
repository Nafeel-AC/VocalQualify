import React from 'react';
import './WhoItIsFor.css';
import illustration1 from '../assets/images/who-it-is-for-1.jpg';
import illustration2 from '../assets/images/who-it-is-for-2.jpg';

const WhoItIsFor: React.FC = () => {
  return (
    <section className="who-its-for-section" id="who-its-for">
      <div className="container">
        <h4>WHO IT'S FOR</h4>
        <h2>Made for <em>Sales Teams Like Yours</em></h2>
        
        <div className="cards-wrapper">
          {/* Left Card */}
          <div className="card for-you">
            <h3>This <em>Is for You</em> If...</h3>
            <ul>
              <li>You're a <strong>sales team drowning in unqualified leads</strong></li>
              <li>You crave <strong>automated lead qualification</strong> and scoring</li>
              <li>You want to <strong>focus on hot leads</strong> while AI handles the rest</li>
              <li>You value <strong>voice-first follow-up</strong> over repetitive emails</li>
            </ul>
            <img src={illustration1} alt="For you illustration" />
          </div>

          {/* Right Card */}
          <div className="card not-for-you">
            <h3>This Is <em>NOT</em> for You If...</h3>
            <ul>
              <li>You're just looking to promote your business</li>
              <li>You can't commit to CRM integration</li>
              <li>You're not open to AI-powered automation</li>
              <li>You prefer manual lead sorting to smart workflows</li>
            </ul>
            <img src={illustration2} alt="Not for you illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor; 