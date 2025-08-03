import React, { useState } from 'react';
import './FAQ.css';

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const faqData = [
    {
      question: "HOW DO THE GROUP SESSIONS WORK?",
      answer: "Each session takes place on Zoom and follows a guided structure, including check-ins, goal sharing, and peer feedback. You'll always know what to expect."
    },
    {
      question: "CAN I JOIN FROM ANYWHERE?",
      answer: "Yes! Our community is global and all sessions are conducted online via Zoom, so you can participate from anywhere in the world."
    },
    {
      question: "IS THERE A LONG-TERM COMMITMENT?",
      answer: "No long-term commitment required. You can cancel your membership at any time, though most members find value in staying for at least 3-6 months."
    },
    {
      question: "WHAT IF I CAN'T MAKE A LIVE SESSION?",
      answer: "All sessions are recorded and available in your member portal. You can watch replays and catch up on any sessions you miss."
    },
    {
      question: "WHO ARE THE OTHER MEMBERS?",
      answer: "Our community includes entrepreneurs, freelancers, and professionals from various industries who are committed to personal and professional growth."
    }
  ];

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <p className="faq-subtitle">NEED MORE INFO?</p>
          <h2 className="faq-title">Frequently Asked <span>Questions</span></h2>
        </div>

        <div className="faq-grid-layout">
          {/* Row 1: First FAQ + Illustration */}
          <div className="faq-grid-row">
            <div 
              className={`faq-item featured ${activeItem === 0 ? 'active' : ''}`}
              onClick={() => toggleItem(0)}
            >
              <button className="faq-question">
                {faqData[0].question}
                <span className="faq-icon">
                  {activeItem === 0 ? '↑' : '↓'}
                </span>
              </button>
              {activeItem === 0 && (
                <div className="faq-answer">
                  {faqData[0].answer}
                </div>
              )}
            </div>
            
            <div className="faq-illustration">
              <img src="/src/assets/images/faq-image.jpg" alt="FAQ Illustration" />
            </div>
          </div>

          {/* Row 2: Second FAQ + Third FAQ */}
          <div className="faq-grid-row">
            <div 
              className={`faq-item ${activeItem === 1 ? 'active' : ''}`}
              onClick={() => toggleItem(1)}
            >
              <button className="faq-question">
                {faqData[1].question}
                <span className="faq-icon">
                  {activeItem === 1 ? '↑' : '↓'}
                </span>
              </button>
              {activeItem === 1 && (
                <div className="faq-answer">
                  {faqData[1].answer}
                </div>
              )}
            </div>
            
            <div 
              className={`faq-item ${activeItem === 2 ? 'active' : ''}`}
              onClick={() => toggleItem(2)}
            >
              <button className="faq-question">
                {faqData[2].question}
                <span className="faq-icon">
                  {activeItem === 2 ? '↑' : '↓'}
                </span>
              </button>
              {activeItem === 2 && (
                <div className="faq-answer">
                  {faqData[2].answer}
                </div>
              )}
            </div>
          </div>

          {/* Row 3: Fourth FAQ + Fifth FAQ */}
          <div className="faq-grid-row">
            <div 
              className={`faq-item ${activeItem === 3 ? 'active' : ''}`}
              onClick={() => toggleItem(3)}
            >
              <button className="faq-question">
                {faqData[3].question}
                <span className="faq-icon">
                  {activeItem === 3 ? '↑' : '↓'}
                </span>
              </button>
              {activeItem === 3 && (
                <div className="faq-answer">
                  {faqData[3].answer}
                </div>
              )}
            </div>
            
            <div 
              className={`faq-item ${activeItem === 4 ? 'active' : ''}`}
              onClick={() => toggleItem(4)}
            >
              <button className="faq-question">
                {faqData[4].question}
                <span className="faq-icon">
                  {activeItem === 4 ? '↑' : '↓'}
                </span>
              </button>
              {activeItem === 4 && (
                <div className="faq-answer">
                  {faqData[4].answer}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 