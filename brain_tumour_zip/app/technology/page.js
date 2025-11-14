"use client";

import { LandingNav, LaunchFooter } from "@/components/navigations";
import { TechnologyData } from "@/utils/technology"; // Import technology data
import React from "react";

function Technology() { // Changed component name
  const Technologies = TechnologyData.map((tech, index) => { // Changed variable name
    return (
      <div
        key={index}
        // onClick={() => navigate(tech.link)} 
        className="border border-white border-opacity-20 rounded-2xl technology-card px-2 py-2 grid gap-2 justify-start items-start w-full relative cursor-pointer" 
      >
        <div className="flex  w-full">
          {/* Use an appropriate icon for each technology */}
          <img src={tech.icon} className="w-24 h-24 rounded-lg" alt="icon" /> 
          {/* You might want to categorize technologies (optional) */}
          <p className="text-base text-white font-poppins font-medium bg-black px-2 py-1 my-auto rounded-lg absolute right-2">
            {tech.category} 
          </p>
        </div>
        <p className="text-lg font-semibold tracking-wide text-white font-poppins">
          {tech.name} 
        </p>
        <p className="text-base font-medium tracking-wide text-white text-opacity-60 font-poppins">
          {tech.description} 
        </p>
      </div>
    );
  });

  return (
    <div className="landing-page ">
      <LandingNav route={"Technology"} /> 
      <div className="min-h-screen pt-40 px-2 md:px-20">
        <div className="w-full flex flex-col gap-8 ">
          <p className="text-white text-2xl md:text-4xl font-medium font-poppins">
            {/* Updated heading */}
            Our Technology
          </p>
          <p className="text-white text-lg md:text-xl md:w-1/2 font-medium font-poppins">
            {/* Updated description */}
            We leverage cutting-edge AI and machine learning technologies to 
            power accurate and efficient brain tumor prediction.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4 pt-10">
          {Technologies} 
        </div>
      </div>
      <LaunchFooter /> 
    </div>
  );
}

export default Technology;