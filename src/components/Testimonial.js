// src/components/Testimonial.js
import React from 'react';
import portrait from "../Images/Portrait.jpg"

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md  ">
      {/* Header Section */}
      <h2 className="text-gray-700 text-lg font-semibold uppercase mb-2">Testimonial</h2>
      <div className="text-4xl font-bold text-center mb-4 w-80 text-gray-900" style={{ width: '24rem' }}>Customer is Our Top Priority</div>
      <p className="text-gray-500 text-center mb-8" style={{ width: '26rem' }}>We survey all of our clients, the results of which go directly to our CEO.</p>

      {/* Testimonial Card */}
      <div className="bg-gray-50 p-6 max-w-2/4 rounded-lg shadow-lg" >
        <div className="flex items-center flex-col md:flex-row">
          {/* Profile Image */}
          <div className="w-3/4 h-80 rounded-full overflow-hidden border-4 border-gray-200 mr-6">
            <img src={portrait} alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Testimonial Text */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!
            </h3>
            <p className="text-gray-600 mb-4">
              I recently hired <span className="font-semibold">Ideapeel</span> for a custom web development project and couldn't be happier with the results. 
              The team was able to bring my unique ideas to life and create a website that truly stands out.
            </p>
            <p className="text-gray-700 font-semibold">Diana Loreza</p>
            <p className="text-gray-500">Director of <span className="font-semibold">GYMSTORY</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
