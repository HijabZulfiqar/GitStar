import React from "react";

const KeyFeatures = () => {
  return (
    <div className="text-white py-16 px-4 md:px-24">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 text-[#FD6924] text-center">
        Comprehensive Healthcare ERP Solution
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Feature: Cloud-Based System */}
        <div className="bg-[#424242] rounded-lg p-6 shadow-lg text-center hover:bg-[#525252] transition duration-300">
          <img
            src="https://img.icons8.com/ios-filled/50/FD6924/cloud.png"
            alt="Cloud-Based System"
            className="w-12 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-[#FD6924]">
            Cloud-Based System
          </h3>
          <p className="text-sm text-[#D1D1D1]">
            Access GitStar from anywhere with our secure cloud technology,
            providing enhanced mobility and communication.
          </p>
        </div>
        {/* Feature: Flexible Integration */}
        <div className="bg-[#424242] rounded-lg p-6 shadow-lg text-center hover:bg-[#525252] transition duration-300">
          <img
            src="https://img.icons8.com/ios-filled/50/FD6924/api-settings.png"
            alt="Flexible Integration"
            className="w-12 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-[#FD6924]">
            Flexible Integration
          </h3>
          <p className="text-sm text-[#D1D1D1]">
            Seamlessly integrates with NPHIES and other healthcare systems,
            ensuring smooth operations and easy implementation.
          </p>
        </div>
        {/* Feature: 24/7 Customer Care */}
        <div className="bg-[#424242] rounded-lg p-6 shadow-lg text-center hover:bg-[#525252] transition duration-300">
          <img
            src="https://img.icons8.com/ios-filled/50/FD6924/customer-support.png"
            alt="24/7 Customer Care"
            className="w-12 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-[#FD6924]">
            24/7 Customer Care
          </h3>
          <p className="text-sm text-[#D1D1D1]">
            Get round-the-clock support from our dedicated team, ensuring you
            have help whenever you need it.
          </p>
        </div>
        {/* Feature: Code Mapping */}
        <div className="bg-[#424242] rounded-lg p-6 shadow-lg text-center hover:bg-[#525252] transition duration-300">
          <img
            src="https://img.icons8.com/ios-filled/50/FD6924/code.png"
            alt="Code Mapping"
            className="w-12 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-[#FD6924]">Code Mapping</h3>
          <p className="text-sm text-[#D1D1D1]">
            Advanced code mapping to improve accuracy, interoperability, and
            regulatory compliance within your operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
