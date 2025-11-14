"use client";

import { LandingNav, LaunchFooter } from "@/components/navigations";
import React from "react";
import { researchLinks, navigate } from "@/utils/constants"; // Import research data

function Research() { // Changed component name
  const cardFunctions = () => {
    return "grid gap-6 justify-start items-start border-[1px] border-white border-opacity-20 rounded-2xl bg-[#FFFFFF05] px-5 md:px-6 py-3 cursor-pointer hover:bg-opacity-20 z-30";
  };

  const researchItems = researchLinks.map((research, index) => { // Changed variable name
    return (
      <div
        key={index}
        className={cardFunctions()}
        onClick={() => navigate(research.link)} 
      >
        <p className="text-white cursor-pointer text-xl font-semibold tracking-wider font-poppins hover:text-opacity-60 flex gap-4">
          {research.icon} {research.title} 
        </p>
        <p className="font-poppins text-[#888D9B] text-sm md:text-lg font-semibold text-opacity-90 md:text-opacity-80">
          {research.description} 
        </p>
      </div>
    );
  });

  return (
    <div className="landing-page ">
      <LandingNav route={"Research"} /> 
      <div className="min-h-screen pt-40 px-3 md:px-20">
        <div className="w-full flex flex-col gap-8 pb-16 border-b border-white border-opacity-20">
          <p className="text-white text-opacity-60 text-xl md:text-2xl font-medium font-poppins">
            RESEARCH 
          </p>
          <p className="text-white text-2xl md:text-3xl md:w-1/2 font-medium font-poppins tracking-wider">
            {/* Updated text */}
            Explore the Scientific Foundation of Our Technology 
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 mt-16">
          <p className="text-white text-lg md:text-xl font-bold font-poppins">
            {/* Updated heading */}
            Our Publications and Findings
          </p>
          <p className="text-white text-lg md:w-1/2 font-medium font-poppins tracking-wider">
            {/* Updated description */}
            Delve into our research publications and explore the scientific 
            evidence behind our brain tumor prediction technology.
          </p>
        </div>
        <div className="mt-14 h-full grid lg:grid-cols-2 gap-3 py-2">
          {researchItems} 
        </div>
      </div>
      <LaunchFooter /> 
    </div>
  );
}

export default Research;