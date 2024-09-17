import React from "react";
import SEOmarketing from "../Images/seo.png";
import ContentMarketingIcon from "../Images/ConentMarketing.png";
import SocialMedia from "../Images/socialMedia.png";
import PPCIcon from "../Images/PPCIcon.png";
import EmailMarketing from "../Images/emailmarketing.png";

const Services = () => {
  return (
    <div className="bg-black flex-row text-white py-16 px-4 md:px-0">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-2xl px-8 uppercase mb-4">Services</h2>
        <p className="text-xl  font-bold mb-4 text-gray-400">
          Strategic services drive digital success with tailored, comprehensive
          approaches.
        </p>
      </div>
      <div className="px-8 flex flex-col gap-8 items-center ">
        <div className="flex flex-col gap-8 items-start md:flex-row">
          <div className="w-64 h-64 flex flex-col items-center justify-center bg-lime-400 rounded-lg text-center ">
            <img
              src={SEOmarketing}
              alt="SEOmarketing"
              className="w-24  filter brightness-150"
            />
            <p className="text-black text-xl font-bold pt-4">SEO Marketing</p>
          </div>
          <div className="w-64 h-64 flex flex-col items-center justify-center bg-lime-400 rounded-lg text-center ">
            <img
              src={ContentMarketingIcon}
              alt="ContentMarketingIcon"
              className="w-24  filter brightness-150"
            />
            <p className="text-black text-xl font-bold pt-4">
              Content Marketing
            </p>
          </div>
          <div className="w-64 h-64 flex flex-col items-center justify-center bg-lime-400 rounded-lg text-center ">
            <img
              src={SocialMedia}
              alt="Social Media Management"
              className="w-24  filter brightness-150"
            />
            <p className="text-black text-xl font-bold pt-4 px-2">Social Media Management</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 relative md:flex-row">
          <div className="w-64 h-64 flex flex-col items-center justify-center bg-lime-400 rounded-lg text-center ">
            <img
              src={PPCIcon}
              alt="PPC Icon"
              className="w-24  filter brightness-150"
            />
            <p className="text-black text-xl font-bold pt-4">PPC</p>
          </div>
          <div className="w-64 h-64 flex flex-col items-center justify-center bg-lime-400 rounded-lg text-center ">
            <img
              src={EmailMarketing}
              alt="Email Marketing Icon"
              className="w-24  filter brightness-150"
            />
            <p className="text-black text-xl font-bold pt-4">Email Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
