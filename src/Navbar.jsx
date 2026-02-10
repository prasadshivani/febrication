import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "./assets/image1/image.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-3">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-white hover:text-yellow-400 transition-colors" // Reduced gap
          >
            <img
              src={image} // Ensure high-res PNG: import logoPng from "./assets/logo.png";
              alt="Gupta Fabrication"
              className="h-16 w-24 lg:h-20 lg:w-32 object-contain rounded-lg shadow-md self-center [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges] select-none"
            />
            <span className="hidden lg:inline">Gupta Fabrication</span>
          </NavLink>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={toggleNavbar}
          >
            <svg
              className={`w-6 h-6 transition-all ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8 ml-auto">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-yellow-400 bg-yellow-400/10 border-b-2 border-yellow-400"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            {/* About Us Dropdown */}
            <li className="relative group">
              <NavLink to="/about">
                <span className="px-4 py-2 text-lg font-semibold text-gray-300 cursor-pointer group-hover:text-white transition-colors flex items-center gap-1">
                  About Us
                  <svg
                    className="w-4 h-4 group-hover:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </NavLink>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-3">
                {[
                  "Steel Fabrication",
                  "Sliding Windows",
                  "Sliding Doors",
                  "Gates & Grills",
                  "Railings",
                ].map((service, index) => (
                  <NavLink
                    key={index}
                    to="#"
                    className="block px-6 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-700/50 transition-all duration-200 text-sm font-medium flex items-center gap-3 rounded-xl mx-2"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="text-xl opacity-80">
                      {["🔥", "🚪", "🚪", "🚪", "⚙️"][index]}
                    </span>
                    {service}
                  </NavLink>
                ))}
              </div>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-yellow-400 bg-yellow-400/10 border-b-2 border-yellow-400"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-yellow-400 bg-yellow-400/10 border-b-2 border-yellow-400"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`
                }
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-yellow-400 bg-yellow-400/10 border-b-2 border-yellow-400"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* CTA Button */}
          <NavLink
            to="/quotation"
            className="hidden lg:inline-flex ml-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-800 pb-8 pt-4">
            <div className="space-y-4 px-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              <div>
                <h3 className="px-6 py-3 text-lg font-semibold text-gray-300 mb-4">
                  About Us
                </h3>
                <div className="grid grid-cols-2 gap-3 px-4">
                  {[
                    "Steel Fabrication",
                    "Sliding Windows",
                    "Sliding Doors",
                    "Gates & Grills",
                    "Railings",
                  ].map((service, index) => (
                    <NavLink
                      key={index}
                      to="#"
                      className="block px-4 py-3 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white rounded-xl transition-all duration-200 flex items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                      }}
                    >
                      <span className="text-lg">
                        {["🔥", "🚪", "🚪", "🚪", "⚙️"][index]}
                      </span>
                      {service}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `block px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>

              <NavLink
                to="/quotation"
                className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl py-5 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
