import React from "react";
import Home from "./assets/auction.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full bg-[#000131] py-16 px-4 section " id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <Image className="w-[400px] h-[400px] mx-auto my-6" src={Home} alt="CricketPlayer..." />
        
        <div className="flex flex-col justify-center">
          <p className="text-[#f4cb33] text-xl font-extrabold font-bodyFont">ABOUT IPL Auction</p>
          <h1 className="md:text-4xl sm:3xl text-2xl font-extrabold font-bodyFont py-4 text-white">Unleash the thrill of the game, bid for your champions at the IPL auction.</h1>
          <p className="text-white">
            Write something about IPL Auction 23 
          </p>
          <button className="text-[#00000] w-[200px] rounded-md my-8 mx-auto md:mx-0 py-3 bg-[#f4cb33] hover:scale-105 hover:text-white duration-200 font-bodyFont font-bold"><a href='#form'>Register Now</a></button>
        </div>
      </div>
    </div>
  );
};

export default About;
