import React from "react";
import bussinessmeeting2 from "../Images/BussinesssMeeting2.jpg";
import bussinessmeeting3 from "../Images/BussinessMeeting3.jpg";
import people from "../Images/people-fill.svg";
import star from "../Images/star.svg"
import Rocket from "../Images/rocket.svg"

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-800 text-white py-12 px-8">
      <div className="text-4xl flex justify-center text-lime-300 mb-16 font-bold ">
        Why Choose Us?
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/8297067/pexels-photo-8297067.jpeg" // Replace with your image
            alt="Business meeting"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
            Solutions Tailored Specifically to Your Business Needs
          </h3>
          <p className="text-gray-400 mb-6">
            We provide customized solutions for your business needs, ensuring
            relevance and success.
          </p>
          <button className="bg-lime-500 hover:bg-lime-400 text-black font-semibold py-2 px-6 rounded-xl shadow-lg">
            Read More
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-11 flex flex-col-reverse md:flex-row items-center">
        {/* Right Text Section */}
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
            Creative Excellence Elevates Every Project
          </h3>
          <p className="text-gray-400 mb-6">
            Creative excellence drives our work. From concept to execution, we
            aim for exceptional results.
          </p>
          <button className="bg-lime-500 hover:bg-lime-400 text-black font-semibold py-2 px-6 rounded-xl shadow-lg">
            Read More
          </button>
        </div>

        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src={bussinessmeeting2} // Replace with your image
            alt="Business meeting"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-11 flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src={bussinessmeeting3} // Replace with your image
            alt="Business meeting"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        {/* Right Text Section */}
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
            Client Satisfaction is Our Main Focus
          </h3>
          <p className="text-gray-400 mb-6">
            Our main goal is your satisfaction, and we work tirelessly to ensure
            that you are pleased with the results we achieve together.
          </p>
          <button className="bg-lime-500 hover:bg-lime-400 text-black font-semibold py-2 px-6 rounded-xl shadow-lg">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-black text-white py-16 mt-8 rounded-xl">
        <h2 className="text-center text-gray-400 font-bold text-2xl mb-12">
          Work with Click It new Tech
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="bg-lime-400 rounded-full p-4 mb-4">
              <img src={people} className="w-8" alt="people"></img>
            </div>
            <h3 className="text-3xl font-bold">10,000+</h3>
            <p className="text-gray-300 mt-2">Happy Customers</p>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="bg-lime-400 rounded-full p-4 mb-4">
              <img src={Rocket} className="w-8" alt="people"></img>
            </div>
            <h3 className="text-3xl font-bold">20,000+</h3>
            <p className="text-gray-300 mt-2">Success Processes</p>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-lime-400 rounded-full p-4 mb-4">
              <img src={star} className="w-8" alt="people"></img>
            </div>
            <h3 className="text-3xl font-bold">10+ Years</h3>
            <p className="text-gray-300 mt-2">of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
