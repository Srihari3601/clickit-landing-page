import React from "react";

const Capabilities = () => {
  const capabilities = [
    "Web design & UI",
    "Social media visuals",
    "Infographics",
    "Design system",
    "Email design",
    "Stationery",
    "Icons",
    "Packaging & merch",
    "Signage",
    "Brochures",
    "Logos & branding",
    "Digital ads",
    "Wireframes",
  ];

  return (
    <div className="bg-black text-white py-16">
      <h2 className="text-center text-sm text-lime-400 uppercase mb-4">Our Capabilities</h2>
      <h1 className="text-center text-3xl font-bold mb-8">We can help you with...</h1>
      <div className="px-9 grid grid-cols-2 gap-4  md:grid-cols-7">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className=" p-3 bg-lime-400 text-black rounded-lg  text-center font-semibold"
          >
            {capability}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
