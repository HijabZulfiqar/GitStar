import React from "react";

const FeaturesGrid = () => {
  return (
    <div id="features" className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-[#363737] text-white shadow-sm border">
          <div className="space-y-1.5 text-[#FD6924] p-6 flex flex-row gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cloud-drizzle text-primary"
            >
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
              <path d="M8 19v1"></path>
              <path d="M8 14v1"></path>
              <path d="M16 19v1"></path>
              <path d="M16 14v1"></path>
              <path d="M12 21v1"></path>
              <path d="M12 16v1"></path>
            </svg>
            <h3
              className="text-base md:text-xl font-bold"
              style={{ color: "rgba(58, 53, 65, 0.87)" }}
            >
              Cloud
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-base">
              Efficiently utilize Gitstar from anywhere using cloud technology
              to enhance mobility and communication.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#363737] text-white shadow-sm border-none">
          <div className="space-y-1.5 p-6 text-[#FD6924] flex flex-row gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-check text-primary"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <h3
              className="text-base md:text-xl font-bold"
              style={{ color: "rgba(58, 53, 65, 0.87)" }}
            >
              Privacy
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-base">
              Your privacy comes first. We adhere to strict policies to
              safeguard your data and carefully define access levels.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#363737] text-white shadow-sm border-none">
          <div className="space-y-1.5 p-6 text-[#FD6924] flex flex-row gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-alert text-primary"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
            <h3
              className="text-base md:text-xl font-bold"
              style={{ color: "rgba(58, 53, 65, 0.87)" }}
            >
              Protection
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-base">
              Ensure the safety of your data. We employ the latest technologies
              for encryption and perpetual data protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
