import React from 'react';
import './Numbers.css';

const Numbers: React.FC = () => {
  return (
    <section className="numbers">
      <div className="container">
        <div className="numbers-content">
          <div className="numbers-item">
            <div className="number">82%</div>
            <div className="number-description">
              of members say they gained clarity within the first 2 sessions
            </div>
          </div>
          
          <div className="numbers-item">
            <div className="number">93%</div>
            <div className="number-description">
              report feeling more accountable
            </div>
          </div>
          
          <div className="numbers-item">
            <div className="number">6</div>
            <div className="number-description">
              6-person circles. The sweet spot for focused, diverse conversations.
            </div>
          </div>
          
          <div className="numbers-item">
            <div className="number">1,200+</div>
            <div className="number-description">
              hours of mastermind sessions hosted
            </div>
          </div>
          
          <div className="numbers-item">
            <div className="number">75%</div>
            <div className="number-description">
              return for a second cycle
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers; 