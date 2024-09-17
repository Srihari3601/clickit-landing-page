import React from 'react';
import layers from '../Images/layers-fill.svg';
import quotient from '../Images/quora.svg';
import circooles from '../Images/circooles.svg';
import hourglass from '../Images/hourglass-split.svg';
import commandR from '../Images/strava.svg';

const Partners = () => {
  return (
    <section className="flex flex-col justify-around items-center py-8 gap-8 bg-black md:flex-row ">
      <div className="partner">
        <img src={layers} alt="Layers" className="w-10 filter brightness-150" />
        <p className="ml-4" >Layers</p>
      </div>
      <div className="partner">
        <img src={quotient} alt="Quotient" className="w-10 filter brightness-150" />
        <p className="ml-4">Quotient</p>
      </div>
      <div className="partner">
        <img src={circooles} alt="Circooles" className="w-10 filter brightness-150" />
        <p className="ml-4">Circooles</p>
      </div>
      <div className="partner">
        <img src={hourglass} alt="Hourglass" className="w-10 filter brightness-150" />
        <p className="ml-4">Hourglass</p>
      </div>
      <div className="partner">
        <img src={commandR} alt="Command+R" className="w-10 filter brightness-150" />
        <p className="ml-4">Command+R</p>
      </div>
    </section>
  );
};

export default Partners;
