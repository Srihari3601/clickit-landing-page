import React, { useRef, useEffect } from 'react';
import 'animate.css';
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
  const headerRef = useRef(null)

  useEffect(() => {
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroref.current) {
            entry.target.classList.add('animate__animated', 'animate__slideInRight');
          } else if (entry.target === partnersRef.current) {
            entry.target.classList.add('animate__animated', 'animate__slideInLeft');
          } else if (entry.target === servicesRef.current) {
            entry.target.classList.add('animate__animated', 'animate__slideInRight');
          } else if (entry.target === testimonialRef.current) {
            entry.target.classList.add('animate__animated', 'animate__pulse');
          } else if (entry.target === capabilitiesRef.current) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          } else if (entry.target === benefitsRef.current) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          } else if (entry.target === headerRef.current) {
            entry.target.classList.add('animate__animated', 'animate__fadeInDown');
          }
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.2,
    });
  
    const sections = [headerRef.current,heroref.current, partnersRef.current, servicesRef.current, testimonialRef.current,capabilitiesRef.current,benefitsRef.current];
    sections.forEach((section) => observer.observe(section));
  
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Pass refs as props to Header for scrolling */}
      <div ref={headerRef} >
      <Header
        heroRef={heroref}
        partnersRef={partnersRef}
        servicesRef={servicesRef}
        testimonialRef={testimonialRef}
        capabilitiesRef={capabilitiesRef}
        benefitsRef={benefitsRef}
      />
      </div>

      {/* Adding Animation on Render */}
      <div ref={heroref} >
        <Hero />
      </div>
      <div ref={partnersRef} >
        <Partners />
      </div>
      <div ref={servicesRef} >
        <Services />
      </div>
      <div ref={testimonialRef} >
        <Testimonial />
      </div>
      <div ref={capabilitiesRef} >
        <Capabilities />
      </div>
      <div ref={benefitsRef} >
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
