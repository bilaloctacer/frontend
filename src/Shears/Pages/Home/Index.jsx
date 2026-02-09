import React from "react";
import HeroSection from "../../HeroSection/Index";
import PlatformCapabilities from "../../PlatformCapabilities/PlatformCapabilities";
import AccessRoles from "../../AccessRoles/AccessRoles";
import OperatingModel from "../../OperatingModel/OperatingModel";

const Index = () => {
  return (
    <div>
      <HeroSection
        heading="Enterprise Portfolio Governance"
        text="A centralized executive view that consolidates projects, performance, and risks to ensure strategic priorities are actively governed, not passively reported."
        fBtn={{ label: "Learn More", link: "/tutorial" }}
        sBtn={{ label: "Request Access", link: "/register" }}
        classHeading={`sm:text-4xl md:text-5xl lg:text-6xl`}
      />
      <PlatformCapabilities />
      <AccessRoles />
      <OperatingModel />
      <HeroSection
        heading="A New Standard for Portfolio Governance"
        text="Request access to RASD to witness its portfolio health strengthening and delivery discipline capabilities."
        fBtn={{ label: "Request Access", link: "/access" }}
        sBtn={{ label: "Learn More", link: "/more" }}
        classHeading={`sm:text-xl md:text-4xl lg:text-6xl`}
      />
    </div>
  );
};

export default Index;
