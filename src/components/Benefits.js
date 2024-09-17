import React from "react";

const Benefits = () => {
  return (
    <div className="bg-black flex-row text-white py-16 px-4 md:px-0">
      <h2 className="text-lime-400 text-sm px-8 uppercase mb-4">Benefits</h2>
      <div className="px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The design subscription that connects you to your dream team
          </h1>
        </div>
        <div className="flex flex-col items-start">
          <p className="mb-8">
            A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.
          </p>
          <button className="px-6 py-2 bg-lime-400 text-black font-semibold rounded-lg">
            See Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
