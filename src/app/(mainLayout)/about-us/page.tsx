import AboutUsHero from "@/components/AboutUs/AboutUsHero/AboutUsHero";
import Details from "@/components/AboutUs/Details/Details";
import MissionSection from "@/components/AboutUs/MissionSection/MissionSection";
import ReusableHeading from "@/components/Reusable/Heading/Heading";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-center mt-4 mb-8">
        <ReusableHeading highlight="About Us" />
      </div>
      <AboutUsHero />
      <Details />
      <MissionSection/>
    </div>
  );
};

export default AboutUs;
