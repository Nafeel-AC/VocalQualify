import React from 'react';
import './Numbers.css';

const Numbers: React.FC = () => {
  return (
    <section className="numbers" id="numbers">
      <div className="container">
        <div className="numbers-content">
          <div className="number-item">
            <h2 className="number">95%</h2>
            <p className="number-label">Faster Lead Qualification</p>
          </div>
          
          <div className="number-item">
            <h2 className="number">10x</h2>
            <p className="number-label">More Efficient Follow-ups</p>
          </div>
          
          <div className="number-item">
            <h2 className="number">24/7</h2>
            <p className="number-label">Automated Lead Processing</p>
          </div>
          
          <div className="number-item">
            <h2 className="number">99%</h2>
            <p className="number-label">CRM Sync Accuracy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers; 