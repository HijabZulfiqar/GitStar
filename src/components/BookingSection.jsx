import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const BookingSection = () => {
  return (
    <div className="relative flex flex-col gap-8 w-full max-w-7xl mx-auto px-6 py-12">
      {/* Main Content */}
      <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
        Receive Bookings and Manage Patient Cases Through GitStar Mobile App
      </h3>

      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
        {/* Features List */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Online Payment Feature */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="text-[#FF7900]">
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Online Payment
              </h2>
            </div>
            <p className="text-gray-600 pl-12">
              Accept all major online payment methods, including Visa,
              Mastercard, STC Pay, and Apple Pay.
            </p>
            <div className="border-b border-[#363737] w-full mt-2"></div>
          </div>

          {/* Absher Integration Feature */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="text-[#FF7900]">
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Absher Integration
              </h2>
            </div>
            <p className="text-gray-600 pl-12">
              Seamlessly access insurance benefits according to patient plans.
            </p>
            <div className="border-b border-[#363737] w-full mt-2"></div>
          </div>

          {/* Appointment Management Feature */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="text-[#FF7900]">
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Appointment Management
              </h2>
            </div>
            <p className="text-gray-600 pl-12">
              Improve scheduling efficiency for better patient care.
            </p>
            <div className="border-b border-[#363737] w-full mt-2"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-end">
          <img
            alt="gitstar Mobile App Interface"
            src="/booking.png"
            className="h-[600px] w-auto object-contain"
          />
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-4">
        <button className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors">
          <MessageCircle size={24} />
        </button>
        <button className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
};

export default BookingSection;
