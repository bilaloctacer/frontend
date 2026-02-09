import React from "react";
import HeroSection from "../../HeroSection/Index";
import AboutRasd from "../../AboutRasd/Index";

const About = () => {
  return (
    <>
      <HeroSection
        heading="Platform Overview"
        text="A brief overview of the platform, its purpose, and how it supports portfolio governance and delivery accountability."
        fBtn={{ label: "Request Access", link: "/access" }}
        sBtn={{ label: "Learn More", link: "/more" }}
      />
      <AboutRasd />
    </>
  );
};

export default About;
