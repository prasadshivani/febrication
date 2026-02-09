import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="services-hero py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Subtle metallic pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#6b7280_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#4b5563_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-8/12 xl:w-7/12 px-4">
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white drop-shadow-2xl leading-tight">
                <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-300 font-light max-w-2xl leading-relaxed">
                We provide strong, durable and custom fabrication & sliding solutions for residential, commercial and industrial projects.
              </p>
            </div>
            <div className="w-full lg:w-4/12 px-4 mt-8 lg:mt-0 text-center lg:text-right">
              <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-500 text-white font-bold px-5 py-2.5 rounded-2xl shadow-xl text-lg">
                Precision Engineering
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* FABRICATION */}
            <div className="group">
              <div className="service-card h-full p-6 lg:p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-500/70 hover:shadow-gray-400/20 hover:-translate-y-3 transition-all duration-700">
                <div className="inline-block p-3.5 rounded-2xl mb-6 bg-gradient-to-r from-gray-600 to-gray-400 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl font-bold text-gray-900">🔩</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-6 text-white group-hover:text-gray-300 transition-colors duration-500">
                  Fabrication Work
                </h3>
                <p className="text-gray-300 mb-6 text-base lg:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-500">
                  We offer high-quality steel fabrication using advanced tools and skilled workmanship to ensure strength, safety and long-lasting performance.
                </p>
                <ul className="space-y-3 mb-0">
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    MS & SS Fabrication
                  </li>
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    Steel Welding & Cutting
                  </li>
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    Industrial & Residential Sheds
                  </li>
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    Staircases & Structural Frames
                  </li>
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    Railings, Grills & Safety Works
                  </li>
                </ul>
              </div>
            </div>

            {/* SLIDING WORK */}
            <div className="group">
              <div className="service-card h-full p-6 lg:p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-500/70 hover:shadow-gray-400/20 hover:-translate-y-3 transition-all duration-700">
                <div className="inline-block p-3.5 rounded-2xl mb-6 bg-gradient-to-r from-gray-600 to-gray-400 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl font-bold text-gray-900">🚪</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-6 text-white group-hover:text-gray-300 transition-colors duration-500">
                  Sliding Work
                </h3>
                <p className="text-gray-300 mb-6 text-base lg:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-500">
                  Our sliding solutions are designed for smooth operation, modern looks and heavy-duty use with precision fitting.
                </p>
                <ul className="space-y-3 mb-0">
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    Sliding Gates (Manual & Automatic)
                  </li>
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    Sliding Doors & Partitions
                  </li>
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    Heavy-Duty Channel & Track Systems
                  </li>
                  <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group-hover:text-gray-200 text-sm">
                    <span className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">✓</span>
                    Custom Sliding Fabrication
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-black/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
              <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
                Why Choose Us?
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gray-500 to-gray-400 mx-auto rounded-full shadow-lg"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: "🛠️", title: "Quality Material", desc: "We use high-grade Iron and accessories.", color: "from-gray-600 to-gray-400" },
              { icon: "👷", title: "Experienced Team", desc: "Skilled fabricators with years of experience.", color: "from-gray-600 to-gray-400" },
              { icon: "📐", title: "Custom Design", desc: "Work according to your requirement & space.", color: "from-gray-600 to-gray-400" },
              { icon: "⚡", title: "On-Time Delivery", desc: "Fast and reliable project completion.", color: "from-gray-600 to-gray-400" }
            ].map((item, index) => (
              <div className="group h-full" key={index}>
                <div className="feature-card p-6 lg:p-8 rounded-3xl shadow-xl bg-gradient-to-b from-gray-900/80 to-black/60 backdrop-blur-xl border border-gray-700/50 hover:border-gray-500/70 hover:shadow-gray-400/30 hover:-translate-y-2 transition-all duration-700 h-full flex flex-col justify-between">
                  <div>
                    <div className={`flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl mb-6 bg-gradient-to-r ${item.color} shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto`}>
                      <span className="text-2xl lg:text-3xl">{item.icon}</span>
                    </div>
                    <h5 className="text-xl lg:text-2xl font-black mb-4 text-white group-hover:text-gray-300 transition-colors text-center">{item.title}</h5>
                    <p className="text-gray-400 mb-0 leading-relaxed group-hover:text-gray-300 transition-colors text-sm lg:text-base text-center">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMALLER CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-tl from-gray-900 via-black to-gray-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#6b7280_0%,transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white drop-shadow-2xl">
              Need Fabrication or Sliding Work?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Contact us today for a free site visit and quotation.
            </p>
            <Link 
              to="/quotation"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 font-black py-3 px-8 rounded-2xl shadow-xl hover:shadow-gray-400/50 hover:scale-105 hover:-translate-y-1 transition-all duration-400 border-2 border-gray-500/50 group text-lg"
            >
              <span>Get Quote</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
