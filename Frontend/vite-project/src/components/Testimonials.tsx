import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-subtitle">testimonials</h2>
          <h1 className="section-title">What Our Members Are Saying</h1>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "I joined on a whim, but it's become a constant in my growth. Everyone brings such honest energy — I leave every session clearer and more focused."
            </p>
            <p className="testimonial-author">— Taylor B. / Creative Coach</p>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The feedback is gold. Supportive, but not sugarcoated. I always feel seen and challenged in the best way."
            </p>
            <p className="testimonial-author">— Renee L. / Marketing Strategist</p>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "I used to overthink every move in my business. Now I have a circle that keeps me grounded, focused, and—honestly—excited to show up."
            </p>
            <p className="testimonial-author">— Alex M. / Wellness Entrepreneur</p>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "This isn't just another online group — it feels like a team. The accountability and support have helped me stay consistent like never before."
            </p>
            <p className="testimonial-author">— Jordan K. / Freelance Illustrator</p>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "It's rare to find a space that's this structured and this human. I've made more progress in 3 months than I had in a year alone."
            </p>
            <p className="testimonial-author">— Samir R. / Indie Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 