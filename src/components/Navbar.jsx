import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="border-b py-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Mobile menu icon */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
                type="button"
                aria-haspopup="menu"
                aria-expanded={isMenuOpen}
                data-state={isMenuOpen ? "open" : "closed"}
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                <img
                  alt="supergit Logo"
                  src="/supergit-01.png"
                  className="h-16 md:h-20 w-[150px] md:w-[250px] object-contain"
                />
              </a>
            </div>

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="#features" // Updated to point to features section
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F4] hover:text-accent-foreground h-9 md:h-11 rounded-md px-3 md:px-8 text-base"
              >
                Features
              </a>
              <a
                href="#products" // Updated to point to products section
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F4] hover:text-accent-foreground h-9 md:h-11 rounded-md px-3 md:px-8 text-base"
              >
                Products
              </a>
              <a
                href="#clients" // Updated to point to clients section
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F4] hover:text-accent-foreground h-9 md:h-11 rounded-md px-3 md:px-8 text-base"
              >
                Clients
              </a>
            </div>

            {/* Contact and language options */}
            <div className="flex gap-16 pr-4 items-center">
              <div className="flex flex-col gap-2 w-full">
                <p className="text-nowrap text-xs md:text-sm">
                  Speak with a rep!
                </p>
                <p className="text-nowrap text-xs md:text-sm text-gray-700 hover:text-primary cursor-pointer">
                  +966 559 748 864
                </p>
              </div>

              {/* <div className="hidden md:flex gap-2 items-center">
                <button className="text-primary underline-offset-4 h-10 px-4 py-2 hover:no-underline">
                  العربية
                </button>
                <a href="/login">Login</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="flex flex-col py-4">
            <div className="flex flex-col space-y-3 px-6">
              <a
                href="#features" // Updated to point to features section
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#products" // Updated to point to products section
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Products
              </a>
              <a
                href="#clients" // Updated to point to clients section
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Clients
              </a>
              <a
                href="/login"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Login
              </a>
            </div>
            <div className="mt-4 pt-4 border-t px-6">
              <button className="text-primary hover:text-primary/80 transition-colors">
                العربية
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
