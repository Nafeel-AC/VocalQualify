import React from 'react';
import './WhoItIsFor.css';
import whoItIsForImage1 from '../assets/images/who-it-is-for-1.jpg';
import whoItIsForImage2 from '../assets/images/who-it-is-for-2.jpg';

const WhoItIsFor: React.FC = () => {
  return (
    <section className="who-it-is-for">
      <div className="container">
        <div className="who-it-is-for-header">
          <h2 className="section-subtitle">Who It's For</h2>
          <h1 className="section-title">Made for People Like You</h1>
        </div>
        
        <div className="who-it-is-for-content">
          <div className="who-it-is-for-column">
            <div className="column-background">
              <img src={whoItIsForImage1} alt="Who it's for" />
            </div>
            <div className="column-content">
              <h3>This Is for You If...</h3>
              <div className="tags-container">
                <span className="tag">You're an entrepreneur, solopreneur, or freelancer</span>
                <span className="tag">You crave honest feedback and outside perspective</span>
                <span className="tag">You want to help others while evolving yourself</span>
                <span className="tag">You value real conversations over shallow networking</span>
              </div>
            </div>
          </div>
          
          <div className="who-it-is-for-column">
            <div className="column-background">
              <img src={whoItIsForImage2} alt="Who it's not for" />
            </div>
            <div className="column-content">
              <h3>This Is NOT for You If...</h3>
              <div className="tags-container">
                <span className="tag">You're just looking to promote your business</span>
                <span className="tag">You can't commit to regular attendance</span>
                <span className="tag">You're not open to giving or receiving feedback</span>
                <span className="tag">You prefer passive learning to active participation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor; 