import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-screen 2xl:h-[90vh] overflow-hidden">
      <img
        src="/hero4.png"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSection;
