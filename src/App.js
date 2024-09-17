import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Capabilities from './components/Capabilities';
import Benefits from './components/Benefits';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  const heroref = useRef(null);
  const partnersRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const benefitsRef = useRef(null);

  return (
    <div className="bg-black text-white">
      {/* Pass refs as props to Header for scrolling */}
      <Header
        heroRef={heroref}
        partnersRef={partnersRef}
        servicesRef={servicesRef}
        testimonialRef={testimonialRef}
        capabilitiesRef={capabilitiesRef}
        benefitsRef={benefitsRef}
      />
      <div ref={heroref}>
        <Hero />
      </div>
      <div ref={partnersRef}>
        <Partners />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
      <div ref={capabilitiesRef}>
        <Capabilities />
      </div>
      <div ref={benefitsRef}>
        <Benefits />
      </div>
      <WhyChooseUs />
      <Footer
        partnersRef={partnersRef}
        servicesRef={servicesRef}
        testimonialRef={testimonialRef}
        capabilitiesRef={capabilitiesRef}
        benefitsRef={benefitsRef}
      />
    </div>
  );
}

export default App;
