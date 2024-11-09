// HeroSection.js
import React from "react";
import FeaturesGrid from "./FeaturesGrid";
import Footer from "./Footer";
import Partners from "./Partners";
import Clients from "./Clients";
import TestimonialsSection from "./TestimonialsSection";
import BookingSection from "./BookingSection";
import Products from "./Products";
import KeyFeatures from "./keyFeatures"; // Import the new component

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col md:gap-8 gap-4 items-center justify-center text-center mt-6">
        <div className="flex flex-col gap-4 md:px-24">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[85px] font-bold"
            style={{
              color: "#3A3541",
              lineHeight: "1.2",
              letterSpacing: "0.5px",
            }}
          >
            Benefits of nphies Integration in Healthcare using AI
          </h1>
          <h5 className="text-sm md:text-xl">
            iCenna is a healthcare solution leveraging Artificial Intelligence
            and Machine Learning, designed for both providers and patients,
            utilizing the NPHIES framework.
          </h5>
        </div>
        <KeyFeatures />

        <div className="w-full overflow-hidden">
          <Partners />
          <Products />
        </div>

        <FeaturesGrid />
        <Clients />
        <BookingSection />
      </div>

      <div>
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
