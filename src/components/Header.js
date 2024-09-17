import React, { useState } from 'react';
import logo from '../Images/ClickItLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({
    heroRef,
  partnersRef,
  servicesRef,
  testimonialRef,
  capabilitiesRef,
  benefitsRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-black">
      <div className="logo w-1/3 md:w-1/6">
        <img src={logo} alt="ClickIt Logo" className="w-full h-auto" />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-lime-400">
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row items-center top-28 space-y-4 md:space-y-0 md:space-x-8 absolute md:relative md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent p-5 md:p-0 transition-all duration-500 ease-in-out md:transition-none`}
      >
        {/* Menu Items with scrolling */}
        <div onClick={() => scrollToSection(partnersRef)} className="text-white cursor-pointer">
          Partners
        </div>
        <div onClick={() => scrollToSection(servicesRef)} className="text-white cursor-pointer">
          Services
        </div>
        <div onClick={() => scrollToSection(testimonialRef)} className="text-white cursor-pointer">
          Testimonial
        </div>
        <div onClick={() => scrollToSection(capabilitiesRef)} className="text-white cursor-pointer">
          Capabilities
        </div>
        <div onClick={() => scrollToSection(benefitsRef)} className="text-white cursor-pointer">
          Benefits
        </div>
        <div onClick={() => scrollToSection(heroRef)} className="bg-lime-400 text-black text-center font-bold py-2 px-4 rounded w-full md:w-32">
          Get Started
        </div>
      </nav>
    </header>
  );
};

export default Header;
