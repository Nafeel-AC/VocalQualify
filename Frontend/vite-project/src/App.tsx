import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Numbers from './components/Numbers';
import About from './components/About';
import WhoItIsFor from './components/WhoItIsFor';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Facilitators from './components/Facilitators';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Numbers />
      <About />
      <WhoItIsFor />
      <HowItWorks />
      <Testimonials />
      <Facilitators />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
