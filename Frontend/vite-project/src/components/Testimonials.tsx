import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-grid-container">
        {/* Heading as first grid item */}
        <div className="testimonial-heading scroll-fade-in">
          <h4>TESTIMONIALS</h4>
          <h2>
            What Our <br />
            Members <em>Are Saying</em>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="testimonial-card card-stagger">
          "I joined on a whim, but it's become a constant in my growth. Everyone brings such honest energy — I leave every session clearer and more focused."
          <p>— Taylor B. / Creative Coach</p>
        </div>
        <div className="testimonial-card card-stagger">
          "It's rare to find a space that's this structured and this human. I've made more progress in 3 months than I had in a year alone."
          <p>— Samir R. / Indie Developer</p>
        </div>
        <div className="testimonial-card card-stagger">
          "The feedback is gold. Supportive, but not sugarcoated. I always feel seen and challenged in the best way."
          <p>— Renee L. / Marketing Strategist</p>
        </div>
        <div className="testimonial-card card-stagger">
          "I used to overthink every move in my business. Now I have a circle that keeps me grounded, focused, and—honestly—excited to show up."
          <p>— Alex M. / Wellness Entrepreneur</p>
        </div>
        <div className="testimonial-card card-stagger">
          "This isn't just another online group — it feels like a team. The accountability and support have helped me stay consistent like never before."
          <p>— Jordan K. / Freelance Illustrator</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 