import React from 'react';
import './Facilitators.css';
import facilitator1 from '../assets/images/facilitator-1.jpg';
import facilitator2 from '../assets/images/facilitator-2.jpg';
import facilitator3 from '../assets/images/facilitator-3.jpg';
import facilitator4 from '../assets/images/facilitator-4.jpg';

const Facilitators: React.FC = () => {
  return (
    <section className="facilitators">
      <div className="container">
        <div className="facilitators-header">
          <h2 className="section-subtitle">Your Hosts & Guides</h2>
          <h1 className="section-title">Meet Your Facilitators</h1>
        </div>
        
        <div className="facilitators-grid">
          <div className="facilitator-card">
            <div className="facilitator-image">
              <img src={facilitator1} alt="Amira Sullivan" />
            </div>
            <div className="facilitator-info">
              <h3 className="facilitator-name">Amira Sullivan</h3>
              <p className="facilitator-title">Creative Strategist & Group Facilitator</p>
              <p className="facilitator-description">
                With over a decade of guiding creative professionals, Amira brings clarity, structure, and a spark of inspiration to every session.
              </p>
            </div>
          </div>
          
          <div className="facilitator-card">
            <div className="facilitator-image">
              <img src={facilitator2} alt="Lucas Varela" />
            </div>
            <div className="facilitator-info">
              <h3 className="facilitator-name">Lucas Varela</h3>
              <p className="facilitator-title">Accountability Coach & Solopreneur</p>
              <p className="facilitator-description">
                Lucas helps members stay focused and follow through with intention. His calm energy and practical tools make progress feel possible.
              </p>
            </div>
          </div>
          
          <div className="facilitator-card">
            <div className="facilitator-image">
              <img src={facilitator3} alt="Elena Morozova" />
            </div>
            <div className="facilitator-info">
              <h3 className="facilitator-name">Elena Morozova</h3>
              <p className="facilitator-title">Mindset Coach & Community Builder</p>
              <p className="facilitator-description">
                Elena supports members through thoughtful reflection and honest conversation. Her strength lies in helping people see the bigger picture.
              </p>
            </div>
          </div>
          
          <div className="facilitator-card">
            <div className="facilitator-image">
              <img src={facilitator4} alt="Jason Kim" />
            </div>
            <div className="facilitator-info">
              <h3 className="facilitator-name">Jason Kim</h3>
              <p className="facilitator-title">Startup Mentor & Strategic Thinker</p>
              <p className="facilitator-description">
                With a background in tech and coaching, Jason brings sharp insight and a deep belief in peer-led growth. He's known for asking just the right questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilitators; 