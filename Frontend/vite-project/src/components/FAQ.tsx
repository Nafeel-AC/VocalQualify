import React, { useState } from 'react';
import './FAQ.css';
import faqImage from '../assets/images/faq-image.jpg';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const FAQ: React.FC = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: "How do the group sessions work?",
      answer: "Each session takes place on Zoom and follows a guided structure, including check-ins, goal sharing, and peer feedback. You'll always know what to expect.",
      isOpen: true
    },
    {
      id: 2,
      question: "Can I join from anywhere?",
      answer: "Yes! All sessions are conducted online via Zoom, so you can participate from anywhere in the world with a stable internet connection.",
      isOpen: false
    },
    {
      id: 3,
      question: "What if I can't make a live session?",
      answer: "We understand life happens. While we encourage live attendance for the best experience, we provide session recordings and summaries for missed sessions.",
      isOpen: false
    },
    {
      id: 4,
      question: "Is there a long-term commitment?",
      answer: "No long-term commitment required. You can join for as little as one cycle (3 months) or stay as long as you find value in the community.",
      isOpen: false
    },
    {
      id: 5,
      question: "Who are the other members?",
      answer: "Members are carefully matched based on your goals, experience level, and mindset. You'll be in a circle of 5-6 like-minded individuals.",
      isOpen: false
    }
  ]);

  const toggleFAQ = (id: number) => {
    setFaqItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-content">
          <div className="faq-text">
            <h2 className="section-subtitle">Need More Info?</h2>
            <h1 className="section-title">Frequently Asked Questions</h1>
            
            <div className="faq-list">
              {faqItems.map((item) => (
                <div key={item.id} className={`faq-item ${item.isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(item.id)}
                  >
                    {item.question}
                    <span className="faq-toggle">
                      {item.isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {item.isOpen && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="faq-image">
            <img src={faqImage} alt="FAQ" className="rounded-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 