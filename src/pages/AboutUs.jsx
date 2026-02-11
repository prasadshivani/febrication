import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION - Enhanced with particles & parallax */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-950 text-white relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent)],bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent)]" />
          <div
            className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-slate-300 via-white to-slate-400 bg-clip-text text-transparent drop-shadow-2xl pb-4 relative">
              About Us
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-sm opacity-75" />
            </h1>
          </div>
          <p className="text-2xl lg:text-3xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed mb-12 backdrop-blur-sm bg-black/20 py-6 px-8 rounded-3xl border border-slate-800/50">
            Precision engineering meets unmatched craftsmanship.
            <span className="block text-white font-bold text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Serving Maharashtra with excellence since 2015.
            </span>
          </p>
          {/* Floating scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-5 h-9 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY - Split screen with floating elements */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-950/80 via-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="relative">
                <h2 className="text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-300 via-white to-emerald-400 bg-clip-text text-transparent">
                  Our Journey
                </h2>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full" />
              </div>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 backdrop-blur-sm bg-slate-900/50 py-6 px-8 rounded-2xl border border-slate-800/50">
                Founded in 2015 in{" "}
                <span className="font-bold text-emerald-400">
                  Vasai, Maharashtra
                </span>
                , we began as a 
                <span className="font-bold text-white">{" "}
                  family-run workshop
                </span>{" "}
                with just 2 craftsmen and a simple dream: build quality
                fabrication that local businesses could actually afford.
                <span className="block mt-3 text-emerald-300">
                  Today, our small team proudly serves 50+ loyal Virar-Vasai
                  clients with honest work and zero shortcuts.
                </span>
              </p>

              {/* Enhanced Stats Cards */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  {
                    num: "500+",
                    label: "Projects Completed",
                    color: "from-emerald-500 to-teal-500",
                  },
                  {
                    num: "15+",
                    label: "Years Experience",
                    color: "from-purple-500 to-indigo-500",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group relative p-8 bg-gradient-to-br from-slate-900/50 to-transparent rounded-3xl border border-slate-800/50 backdrop-blur-xl hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div
                      className={`text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}
                    >
                      {stat.num}
                    </div>
                    <div className="text-slate-400 text-sm font-bold tracking-wide uppercase">
                      {stat.label}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-slate-300 font-bold rounded-2xl text-sm shadow-xl border border-slate-700/50 backdrop-blur-sm hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Trusted by 200+ Industrial Clients
              </div>
            </div>

            <div className="lg:order-1 relative">
              {/* Enhanced 3D card with floating elements */}
              <div className="relative group">
                <div className="relative w-full h-80 lg:h-[450px] bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-slate-950/60 rounded-3xl backdrop-blur-2xl border-2 border-slate-700/70 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 hover:-rotate-1 hover:scale-[1.02] p-8 flex items-center justify-center overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-7xl animate-bounce">🏭</div>
                    <div className="mt-6 text-2xl font-black text-slate-300 tracking-wide">
                      Crafting Excellence
                    </div>
                  </div>

                  {/* Floating geometric shapes */}
                  <div className="absolute top-8 left-8 w-20 h-20 border-2 border-purple-500/30 rounded-full group-hover:animate-spin-slow" />
                  <div className="absolute bottom-12 right-12 w-16 h-16 bg-emerald-500/20 rounded-2xl group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-transparent rounded-3xl backdrop-blur-xl border border-purple-500/40 shadow-2xl flex items-center justify-center text-lg font-bold text-white animate-pulse">
                    2015
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHTS - 3D card hover effects */}
      <section className="py-24 lg:py-32 bg-gradient-to-t from-slate-950 via-black/50 to-slate-900 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto mb-20">
            <h3 className="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-300 via-white to-emerald-400 bg-clip-text text-transparent relative">
              What We Do Best
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full blur opacity-75" />
            </h3>
            <p className="text-xl text-slate-400 backdrop-blur-sm bg-slate-900/30 py-6 px-8 rounded-2xl border border-slate-800/50 mx-auto max-w-2xl">
              From industrial sheds to precision gates, we handle every project
              with German engineering standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: "🚪",
                title: "MS/SS Gates",
                desc: "Sliding, swing, and automated gates with lifetime warranty",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "📦",
                title: "Sliding Doors",
                desc: "Heavy-duty partitions and sliding systems for factories",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "🔧",
                title: "Fabrication Works",
                desc: "Complete metal fabrication for industrial applications",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: "✅",
                title: "Site Installation",
                desc: "Free site visits + professional installation included",
                color: "from-emerald-400 to-green-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative h-full p-10 rounded-3xl bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-xl border border-slate-800/50 hover:border-white/30 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-4 hover:rotate-1 transition-all duration-700 overflow-hidden"
              >
                {/* Background shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Icon container */}
                <div
                  className={`relative w-24 h-24 mx-auto mb-8 bg-gradient-to-r ${service.color} rounded-3xl shadow-2xl group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-500 flex items-center justify-center shadow-purple-500/25 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-white/10 before:to-transparent before:-skew-x-12 before:-translate-x-full group-hover:before:translate-x-full before:transition-transform before:duration-1000`}
                >
                  <span className="text-4xl drop-shadow-lg relative z-10">
                    {service.icon}
                  </span>
                </div>

                <h4 className="text-2xl font-black mb-6 text-white group-hover:text-slate-200 transition-all duration-300 relative z-10">
                  {service.title}
                </h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-all duration-300 relative z-10">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Feature cards with morphing effects */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-950 to-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h3 className="text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-slate-300 via-white to-emerald-400 bg-clip-text text-transparent">
              Why Maharashtra Chooses Us
            </h3>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto backdrop-blur-sm bg-slate-900/40 py-6 px-8 rounded-3xl border border-slate-800/50">
              We're not just fabricators. We're your long-term partner in
              industrial excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "⚡",
                  title: "Lightning Fast Delivery",
                  desc: "Quick response on quotations and efficient project execution. We ensure timely completion of projects without compromising on quality.",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: "🎯",
                  title: "Zero Compromise Quality",
                  desc: "We follow high engineering standards to deliver strong, durable, and precisely fabricated structures. Our work is built to last and designed for long-term performance.",
                  color: "from-emerald-500 to-teal-500",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 p-8 lg:p-10 bg-gradient-to-br from-slate-900/60 to-transparent rounded-3xl border border-slate-800/50 backdrop-blur-xl hover:border-emerald-500/50 hover:shadow-emerald-500/10 hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <span className="text-2xl drop-shadow-lg">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                      {feature.title}
                    </h5>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                  {/* Morphing background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-emerald-500 mb-12 relative">
                100% Satisfaction
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full blur-sm" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    num: "₹20L+",
                    label: "Yearly Turnover",
                    color: "from-emerald-500 to-teal-500",
                  },
                  {
                    num: "0%",
                    label: "Rejection Rate",
                    color: "from-rose-500 to-pink-500",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group p-10 bg-gradient-to-br from-slate-900/60 to-transparent rounded-3xl backdrop-blur-xl border-2 border-slate-800/50 hover:border-emerald-500/50 shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-4 transition-all duration-500 relative overflow-hidden"
                  >
                    <div
                      className={`text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500`}
                    >
                      {stat.num}
                    </div>
                    <div className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED CTA - Glassmorphism with mega hover effects */}
      <section className="py-24 lg:py-32 bg-gradient-to-t from-black via-slate-950/50 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_20%,rgba(120,119,198,0.15),transparent)],bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.08),transparent)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-slate-300 via-white to-emerald-400 bg-clip-text text-transparent drop-shadow-2xl">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 backdrop-blur-xl bg-white/5 py-8 px-10 rounded-3xl border border-white/10 shadow-2xl">
              Join 200+ satisfied clients across Maharashtra. Get your free
              quotation today.
            </p>

            <Link
              to="/quotation"
              className="group relative inline-flex items-center px-8 lg:px-12 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-emerald-500/50 hover:shadow-2xl border border-emerald-500/50 backdrop-blur-xl overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                <i className="fas fa-calculator text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                Get Free Quote Now
                <div className="w-3 h-3 bg-white/30 rounded-full group-hover:animate-ping" />
              </span>

              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {/* Pulse ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
