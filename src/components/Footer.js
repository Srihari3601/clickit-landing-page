// src/components/Footer.js
import React from 'react';
import clicItlogo from "../Images/ClickItLogo.png"
import linkedIn from "../Images/linkedin.svg"
import Facebook from "../Images/facebook.svg"
import Dribbble from "../Images/dribbble.svg"
import Instagram from "../Images/instagram.svg"


const Footer = ({
    partnersRef,
    servicesRef,
    testimonialRef,
    capabilitiesRef,
    benefitsRef,
  }) => {

    const scrollToSection=(ref)=>{
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Company Description */}
        <div>
          <img src={clicItlogo} alt='ClickIt'className="w-1/3"></img>
          <p className="mb-4 mt-6">
            Click It - is a leading digital marketing agency dedicated to driving success for businesses online. 
            With expertise in SEO, PPC, social media, content creation, and more, we offer tailored solutions to maximize ROI.
          </p>
          <p>
            In the USA, UK, and Canada working with top-tier clients, from start-ups to enterprises.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-4">Our Services</h3>
          <ul>
            <li className="mb-2 text-xl">SEO Marketing</li>
            <li className="mb-2 text-xl">Research Topic Trends</li>
            <li className="mb-2 text-xl">Email Marketing</li>
            <li className="mb-2 text-xl">Google PPC</li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-4">Our Location</h3>
          <ul>
            <li className="mb-2 text-xl">USA</li>
            <li className="mb-2 text-xl">UK</li>
            <li className="mb-2 text-xl">Canada</li>
            <li className="mb-2 text-xl">Virtual</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-4">Contact us</h3>
          <ul className="mb-4">
            <li className="flex items-center text-xl mb-2">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v1m-8-1v1m-4 0a8 8 0 0116 0v1a4 4 0 01-4 4H8a4 4 0 01-4-4v-1m16-1V9m-8-5h1a4 4 0 014 4v3H7V8a4 4 0 014-4h1z" />
              </svg>
              info@clickit.com
            </li>
            <li className="flex items-center text-xl mb-2">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l2 9h12l2-9h1m-6 9a3 3 0 01-6 0M4 10h16M5 6h14" />
              </svg>
              (001) 1231 3435
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <div href="#" aria-label="Facebook" className="text-green-400">
            <img src={Facebook} alt="Layers" className="w-8 filter brightness-150" />
            </div>
            <div href="#" aria-label="Instagram" className="text-green-400">
            <img src={Instagram} alt="Layers" className="w-8 filter brightness-150" />
            </div>
            <div href="#" aria-label="LinkedIn" className="text-green-400">
            <img src={linkedIn} alt="Layers" className="w-8 filter brightness-150" />
            </div>
            <div href="#" aria-label="Dribbble" className="text-green-400">
            <img src={Dribbble} alt="Layers" className="w-8 filter brightness-150" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
        <nav className="flex justify-center a space-x-4">
          <div onClick={() => scrollToSection(partnersRef)} className="text-gray-400 hover:text-green-400 hover:cursor-pointer">Partners</div>
          <div onClick={() => scrollToSection(servicesRef)} className="text-gray-400 hover:text-green-400 hover:cursor-pointer">Services</div>
          <div onClick={() => scrollToSection(testimonialRef)} className="text-gray-400 hover:text-green-400 hover:cursor-pointer">Testimonial</div>
          <div onClick={() => scrollToSection(capabilitiesRef)} className="text-gray-400 hover:text-green-400 hover:cursor-pointer">Capabilities</div>
          <div onClick={() => scrollToSection(benefitsRef)} className="text-gray-400 hover:text-green-400 hover:cursor-pointer">Benefits</div>
        </nav>
        <p className="text-gray-500 mt-4">© 2024 Srihari GC - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
