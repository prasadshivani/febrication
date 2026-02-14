import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "./assets/image1/image.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // NEW: About dropdown state

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setIsAboutOpen(false); // Close about dropdown too
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleClickOutside = () => {
    setIsOpen(false);
    setIsAboutOpen(false);
  };

  const toggleAboutDropdown = () => setIsAboutOpen(!isAboutOpen);

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-4 lg:py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 font-bold text-xl text-white hover:text-yellow-400 transition-colors">
            <img 
              src={image} 
              alt="Gupta Fabrication" 
              className="h-12 w-20 sm:h-14 sm:w-24 lg:h-20 lg:w-32 object-contain rounded-lg shadow-md self-center [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges] select-none" 
            />
            <span className="hidden lg:inline">Gupta Fabrication</span>
          </NavLink>

          {/* Hamburger Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-300 hover:text-white"
            onClick={toggleNavbar}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className={`w-6 h-6 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "opacity-0" : "opacity-100"} d="M4 6h16M4 12h16M4 18h16" />
              <path strokeLinecap="round" strokeLinejoin="round" className={`opacity-0 ${isOpen ? "opacity-100" : ""}`} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Desktop Navigation - UNCHANGED */}
          <ul className="hidden lg:flex xl:space-x-10 items-center ml-auto">
            <li>
              <NavLink to="/" className={({ isActive }) => `px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-200 ${isActive ? "text-yellow-400 bg-yellow-400/10 border-b-2 border-yellow-400" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}>
                Home
              </NavLink>
            </li>
            <li className="relative group">
              <span className="px-4 py-2 text-lg font-semibold text-gray-300 cursor-pointer group-hover:text-white transition-colors flex items-center gap-1">
                About Us
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3">
                {["Steel Fabrication", "Sliding Windows", "Sliding Doors", "Gates & Grills", "Railings"].map((service, index) => (
                  <a key={index} href="#" className="block px-6 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-700/50 transition-all duration-200 text-sm font-medium flex items-center gap-3 rounded-xl mx-2 first:mt-1 last:mb-1">
                    <span className="text-xl opacity-80 flex-shrink-0">{["🔥", "🚪", "🚪", "🚪", "⚙️"][index]}</span>
                    {service}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => `px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-200 ${isActive ? "text-yellow-400 bg-yellow-400/10 border-b-2 border-yellow-400" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => `px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-200 ${isActive ? "text-yellow-400 bg-yellow-400/10 border-b-2 border-yellow-400" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}>
                Gallery
              </NavLink>
            </li>
          </ul>

          <NavLink to="/quotation" className="hidden lg:inline-flex ml-6 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300" onClick={() => setIsOpen(false)}>
            Get a Quote
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200" onClick={handleClickOutside} />
            <div className="lg:hidden relative border-t border-gray-800 pb-8 pt-4 animate-in slide-in-from-top-4 duration-200 z-50">
              <div className="space-y-4 px-4 bg-gray-900/95 backdrop-blur-md rounded-2xl mt-2">
                
                <NavLink to="/" className={({ isActive }) => `block px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-200 ${isActive ? "bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`} onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>

                {/* NEW PROPER MOBILE DROPDOWN */}
                <div className="space-y-2">
                  <button
                    onClick={toggleAboutDropdown}
                    className="w-full flex items-center justify-between px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-200 text-gray-300 hover:bg-gray-800 hover:text-white group"
                  >
                    <span>About Us</span>
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Animated Dropdown Items */}
                  <div className={`overflow-hidden transition-all duration-300 ${isAboutOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-8 py-2 space-y-2">
                      {[
                        "Steel Fabrication", "Sliding Windows", 
                        "Sliding Doors", "Gates & Grills", "Railings"
                      ].map((service, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-3 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white rounded-xl transition-all duration-200 flex items-center gap-3"
                          onClick={() => {
                            setIsOpen(false);
                            setIsAboutOpen(false);
                          }}
                        >
                          <span className="text-lg flex-shrink-0">
                            {["🔥", "🚪", "🚪", "🚪", "⚙️"][index]}
                          </span>
                          {service}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <NavLink to="/services" className={({ isActive }) => `block px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-200 ${isActive ? "bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`} onClick={() => setIsOpen(false)}>
                  Services
                </NavLink>

                <NavLink to="/gallery" className={({ isActive }) => `block px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-200 ${isActive ? "bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`} onClick={() => setIsOpen(false)}>
                  Gallery
                </NavLink>

                <NavLink to="/quotation" className="block w-full text-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold text-xl py-5 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
