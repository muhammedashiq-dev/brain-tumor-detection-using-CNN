import { LandingNav, LaunchFooter } from "@/components/navigations";
import React from "react";

function FAQ() {
  return (
    <div className="landing-page ">
      <LandingNav route={"FAQ"} />
      <div className="min-h-screen pt-40 px-3 md:px-44">
        <div className="w-full flex">
          <p className="text-white text-xl md:text-2xl font-semibold tracking-wider font-poppins">
            Frequently Asked Questions
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 border-white border-b border-opacity-20 py-16">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wider font-poppins">
            What is this brain tumor grade prediction platform?
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            This platform is an AI-powered tool designed to assist medical professionals in predicting the grade of brain tumors. It utilizes advanced machine learning algorithms and medical image analysis to provide accurate and timely predictions, aiding in diagnosis and treatment planning.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 border-white border-b border-opacity-20 py-16">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wider font-poppins">
            How does the prediction work?
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            The platform analyzes medical images, such as MRI or CT scans, using deep learning models. These models are trained on a vast dataset of brain tumor images with known grades. By identifying patterns and features in the provided image, the platform can predict the grade of the tumor with high accuracy.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 border-white border-b border-opacity-20 py-16">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wider font-poppins">
            What types of brain tumors can be predicted?
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            The platform is currently capable of predicting the grades of gliomas, the most common type of brain tumor. We are continuously working to expand its capabilities to include other types of brain tumors in the future.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 border-white border-b border-opacity-20 py-16">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wider font-poppins">
            How accurate are the predictions?
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            The platform has been rigorously tested and validated on a large dataset of brain tumor images. It achieves a high level of accuracy, comparable to expert radiologists. However, it's important to note that the predictions are intended to assist medical professionals, not replace their judgment.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 py-16">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wider font-poppins">
            Who can use this platform?
          </p>
          <p className="text-white text-base md:text-lg font-medium text-opacity-60 tracking-wider font-poppins">
            This platform is intended for use by qualified medical professionals, including radiologists, oncologists, and neurosurgeons. It can be a valuable tool in their clinical practice for diagnosing and treating brain tumors.
          </p>
        </div>
      </div>
      <LaunchFooter />
    </div>
  );
}

export default FAQ;