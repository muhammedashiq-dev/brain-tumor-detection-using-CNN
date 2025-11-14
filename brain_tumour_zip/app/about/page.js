"use client";

import { LandingNav, LaunchFooter } from "@/components/navigations";
import Image from "next/image";
import React, { useState } from "react";

function About() { // Changed component name to About
  const [selectedSection, setSelectedSection] = useState("section1"); // Changed variable name

  const sectionClass = (section) => { // Changed function name
    return `${selectedSection === section ? "bg-[#FFFFFF1A] border-opacity-20" : "border-opacity-5 text-opacity-60"} border border-white px-4 py-7 cursor-pointer rounded-xl text-white font-medium font-poppins flex justify-start items-center hover:bg-[#FFFFFF1A] hover:bg-opacity-60`;
  };

  const sectionDescription = (section) => { // Changed function name
    return `${selectedSection === section ? "grid about-section" : "hidden"} lg:col-span-2 gap-4`;
  };

  return (
    <div className="landing-page ">
      <LandingNav route={"About"} /> 
      <div className="min-h-screen pt-40 px-3 md:px-44">
        <div className="w-full flex flex-col gap-8 pb-16">
          <p className="text-white text-opacity-60 text-xl md:text-2xl font-medium font-poppins">
            ABOUT US 
          </p>
          <p className="text-white text-2xl lg:text-3xl lg:w-1/2 font-medium font-poppins tracking-wider">
            {/* Updated text */}
            Revolutionizing Brain Tumor Detection with AI-Powered Accuracy 
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 justify-center items-center w-full pb-16 border-b border-white border-opacity-20">
          <div className="flex justify-center lg:justify-end items-center">
            {/* Replace with a relevant image */}
            <Image
              src={"/cancer.png"} 
              width={200}
              height={200}
              alt="Brain Icon" 
              className="rotate-animation" 
            />
          </div>
          <div className="lg:col-span-2 grid gap-3 justify-center lg:justify-start text-justify">
            <p className="text-white text-xl font-bold font-poppins">
              {/* Updated heading */}
              Our Mission
            </p>
            <p className="text-white text-lg font-medium font-poppins lg:w-2/3">
              {/* Updated description */}
              To provide accessible, accurate, and early brain tumor detection 
              through innovative AI technology, improving patient outcomes and 
              advancing medical research.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 pb-10 mt-28">
          <p className="text-white text-opacity-60 text-xl md:text-2xl font-medium font-poppins">
            {/* Updated heading */}
            OUR APPROACH
          </p>
          <p className="text-white text-lg md:text-xl md:w-1/2 font-medium font-poppins tracking-wider">
            {/* Updated description */}
            Combining cutting-edge technology with medical expertise to deliver 
            reliable and timely predictions.
          </p>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 pt-10">
            <div className="grid gap-4">
              <div
                className={sectionClass("section1")} 
                onClick={() => setSelectedSection("section1")} 
              >
                {/* Updated section title */}
                AI-Powered Analysis
              </div>
              <div
                className={sectionClass("section2")}
                onClick={() => setSelectedSection("section2")}
              >
                {/* Updated section title */}
                Multi-Modal Integration
              </div>
              <div
                className={sectionClass("section3")}
                onClick={() => setSelectedSection("section3")}
              >
                {/* Updated section title */}
                Expert Collaboration
              </div>
            </div>
            <div className={sectionDescription("section1")}> 
              <p className="text-white text-2xl font-poppins font-semibold tracking-wider flex items-center">
                AI-Powered Analysis 
              </p>
              <p className="text-white text-opacity-60 text-base text-justify font-medium font-poppins lg:w-2/3">
                {/* Updated description */}
                Our platform utilizes advanced machine learning algorithms and 
                deep learning models to analyze medical images, such as MRI 
                and CT scans, with high accuracy.
              </p>
            </div>
            <div className={sectionDescription("section2")}> 
              <p className="text-white text-2xl font-poppins font-semibold tracking-wider flex items-center">
                Multi-Modal Integration 
              </p>
              <p className="text-white text-opacity-60 text-base text-justify font-medium font-poppins lg:w-2/3">
                {/* Updated description */}
                We integrate data from various imaging modalities (MRI, CT, PET) 
                to provide a comprehensive assessment and improve the 
                reliability of predictions.
              </p>
            </div>
            <div className={sectionDescription("section3")}> 
              <p className="text-white text-2xl font-poppins font-semibold tracking-wider flex items-center">
                Expert Collaboration 
              </p>
              <p className="text-white text-opacity-60 text-base text-justify font-medium font-poppins lg:w-2/3">
                {/* Updated description */}
                We work closely with leading medical professionals and 
                researchers to ensure our technology is aligned with clinical 
                practices and contributes to advancements in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LaunchFooter /> 
    </div>
  );
}

export default About;