import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-gray-800/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
            Precision engineering meets unmatched craftsmanship. 
            <span className="text-white font-bold"> Serving Maharashtra with excellence since 2015.</span>
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent">
                  Our Journey
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Founded in 2015 in Virar, Maharashtra, we started as a small fabrication workshop with 
                a simple mission: deliver industrial-grade quality at honest prices. Today, we're proud 
                to be the region's leading fabricators for gates, sheds, staircases, and custom metalwork.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="text-center p-6 bg-black/30 rounded-2xl border border-gray-800/50">
                  <div className="text-4xl font-black text-gray-400 mb-2">500+</div>
                  <div className="text-gray-500 text-sm font-bold">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-black/30 rounded-2xl border border-gray-800/50">
                  <div className="text-4xl font-black text-gray-300 mb-2">15+</div>
                  <div className="text-gray-500 text-sm font-bold">Years Experience</div>
                </div>
              </div>
              {/* SMALL BUTTON */}
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold rounded-full text-xs shadow-md hover:shadow-lg transition-all duration-300">
                Trusted by 200+ Industrial Clients
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-3xl backdrop-blur-xl border-2 border-gray-800/50 shadow-2xl flex items-center justify-center">
                  <div className="text-6xl">🏭</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold text-white animate-pulse">
                  2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHTS */}
      <section className="py-20 lg:py-28 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl lg:text-5xl font-black mb-4 text-white">
            What We Do Best
          </h3>
          <p className="text-xl text-gray-500 mb-20 max-w-3xl mx-auto">
            From industrial sheds to precision gates, we handle every project with German engineering standards
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🚪", title: "MS/SS Gates", desc: "Sliding, swing, and automated gates with lifetime warranty" },
              { icon: "🏭", title: "Industrial Sheds", desc: "Pune-grade steel structures built to last 25+ years" },
              { icon: "⚙️", title: "Staircase Fabrication", desc: "Custom SS/MS staircases with perfect laser-cut precision" },
              { icon: "📦", title: "Sliding Doors", desc: "Heavy-duty partitions and sliding systems for factories" },
              { icon: "🔧", title: "Fabrication Works", desc: "Complete metal fabrication for industrial applications" },
              { icon: "✅", title: "Site Installation", desc: "Free site visits + professional installation included" }
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-black/30 backdrop-blur-xl border border-gray-800/50 hover:border-gray-600/70 hover:shadow-gray-800/30 hover:-translate-y-3 transition-all duration-500 h-full">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl shadow-xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center text-3xl font-bold text-gray-900">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 text-white group-hover:text-gray-300 transition-colors">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-4xl lg:text-5xl font-black mb-6 text-white">
              <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent">
                Why Maharashtra Chooses Us
              </span>
            </h3>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              We're not just fabricators. We're your long-term partner in industrial excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-black/40 rounded-2xl border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-2">Lightning Fast Delivery</h5>
                    <p className="text-gray-500">Quotations in 2 hours. Projects delivered 20% faster than industry average.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-black/40 rounded-2xl border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-2">Zero Compromise Quality</h5>
                    <p className="text-gray-500">German engineering standards. Lifetime structural warranty on all fabrications.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 mb-8">
                100% Satisfaction
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-black/30 rounded-2xl backdrop-blur-xl border-2 border-gray-700/50 shadow-xl">
                  <div className="text-3xl font-black text-gray-400 mb-2">₹50L+</div>
                  <div className="text-gray-500 text-sm">Yearly Turnover</div>
                </div>
                <div className="text-center p-6 bg-black/30 rounded-2xl backdrop-blur-xl border-2 border-gray-700/50 shadow-xl">
                  <div className="text-3xl font-black text-gray-300 mb-2">0%</div>
                  <div className="text-gray-500 text-sm">Rejection Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Join 200+ satisfied clients across Maharashtra. Get your free quotation today.
          </p>
          {/* SMALL CTA BUTTON */}
          <Link
            to="/quotation"
            className="inline-flex px-6 py-2.5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-gray-600/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 border border-gray-700/50 items-center justify-center gap-1.5 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <i className="fas fa-calculator text-xs"></i>
              Get Free Quote
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 w-[200%] h-full" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
