"use client";

import { LandingNav, LaunchFooter } from "@/components/navigations";
import Image from "next/image";
import React from "react";
import { LinkedinOutlined } from "@ant-design/icons";
import { navigate } from "@/utils/constants";
import { useRouter } from "next/navigation";

function Team() {
  const router = useRouter();
  const styles = {
    cardClasses:
      "border border-white border-opacity-20 rounded-2xl px-4 py-6 grid gap-5 justify-start hover:bg-[#FFFFFF05] cursor-pointer",
    cardTitle: "text-white text-lg font-poppins font-semibold tracking-wider",
    cardDescription:
      "text-white text-base text-opacity-60 font-poppins font-medium tracking-wider",
    Iconstyle: "text-white font-medium text-2xl flex justify-start",
  };

  return (
    <div className="landing-page ">
      <LandingNav route={"Team"} />
      <div className="min-h-screen pt-40 px-3 md:px-44">
        <div className="w-full flex flex-col gap-8 pb-16 border-b border-white border-opacity-20">
          <p className="text-white text-opacity-60 text-xl md:text-2xl font-medium font-poppins">
            OUR TEAM
          </p>
          <div className="w-full h-56 lg:h-80 relative rounded-2xl">
            <Image
              src={"/team_members.png"} // Updated image
              fill
              style={{ objectFit: "cover" }}
              alt="Team"
              className="w-full rounded-2xl"
            />
            <div className="absolute flex flex-col gap-4 ml-8 bottom-4 lg:w-1/2">
              <p className="text-white text-lg lg:text-xl font-semibold tracking-wider font-poppins">
                Meet the Experts Revolutionizing Brain Tumor Prediction
              </p>
              <p className="text-white text-base lg:text-lg font-medium tracking-wider font-poppins">
                A dedicated team of AI specialists, medical professionals, and
                researchers committed to advancing brain tumor diagnostics.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 pt-10">
            <div
              className={styles.cardClasses}
              onClick={() =>
                navigate("https://www.linkedin.com/in/john-doe/")
              }
            >
              <LinkedinOutlined className={styles.Iconstyle} />
              <p className={styles.cardTitle}>John Doe</p>
              <p className={styles.cardDescription}>
                Chief AI Scientist - Expertise in deep learning and medical
                image analysis.
              </p>
            </div>
            <div
              className={styles.cardClasses}
              onClick={() =>
                navigate("https://www.linkedin.com/in/jane-smith/")
              }
            >
              <LinkedinOutlined className={styles.Iconstyle} />
              <p className={styles.cardTitle}>Jane Smith</p>
              <p className={styles.cardDescription}>
                Lead Medical Advisor - Board-certified radiologist with
                expertise in neuroimaging.
              </p>
            </div>
            <div
              className={styles.cardClasses}
              onClick={() =>
                navigate("https://www.linkedin.com/in/david-lee/")
              }
            >
              <LinkedinOutlined className={styles.Iconstyle} />
              <p className={styles.cardTitle}>David Lee</p>
              <p className={styles.cardDescription}>
                Senior Research Scientist - PhD in Biomedical Engineering with a
                focus on tumor biology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LaunchFooter />
    </div>
  );
}

export default Team;