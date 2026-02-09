import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Quotation = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("oEqIj4aF9kTudVX9W");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_p0tw29a",
        "template_t3i5tmv",
        formRef.current,
        "oEqIj4aF9kTudVX9W",
      )
      .then((result) => {
        alert("Email sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Failed:", error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      {/* HERO */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-gray-800/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent">
              Get a Free Quotation
            </span>
          </h1>
          <p className="text-2xl lg:text-4xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Tell us your requirement and we'll provide the best price within 2
            hours
          </p>
          <div className="inline-block mt-8 px-4 py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300">
            Instant Quote • Free Site Visit
          </div>
        </div>
      </section>

      {/* COMPACT QUOTATION FORM */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="p-6 lg:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-gray-800/50 hover:border-gray-700/70 shadow-2xl hover:shadow-gray-800/30 transition-all duration-500">
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-black mb-3 text-white">
                    <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent">
                      Quick Quote Form
                    </span>
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-700 to-gray-600 mx-auto rounded-full shadow-md mb-3"></div>
                  <p className="text-gray-500 text-sm">
                    Get your project priced in minutes
                  </p>
                </div>

                <form onSubmit={handleSubmit} ref={formRef}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        name="user_name"
                        className="w-full bg-black/50 border-2 border-gray-800/50 rounded-xl py-2.5 px-4 text-white placeholder-gray-600 text-sm backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-2 focus:ring-gray-600/30 transition-all duration-300 hover:border-gray-700/70"
                        placeholder="Your Name *"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <input
                        type="tel"
                        name="user_phone"
                        className="w-full bg-black/50 border-2 border-gray-800/50 rounded-xl py-2.5 px-4 text-white placeholder-gray-600 text-sm backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-2 focus:ring-gray-600/30 transition-all duration-300 hover:border-gray-700/70"
                        placeholder="Phone Number *"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="md:col-span-2">
                      <input
                        type="email"
                        name="user_email"
                        className="w-full bg-black/50 border-2 border-gray-800/50 rounded-xl py-2.5 px-4 text-white placeholder-gray-600 text-sm backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-2 focus:ring-gray-600/30 transition-all duration-300 hover:border-gray-700/70"
                        placeholder="Email Address *"
                        required
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <select
                        name="service_type"
                        className="w-full bg-black/50 border-2 border-gray-800/50 rounded-xl py-2.5 px-4 text-white text-sm backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-2 focus:ring-gray-600/30 transition-all duration-300 hover:border-gray-700/70 appearance-none"
                        required
                      >
                        <option value="">Select Service *</option>
                        <option value="fabrication">Fabrication Work</option>
                        <option value="sliding-gate">Sliding Gate</option>
                        <option value="industrial-shed">Industrial Shed</option>
                        <option value="ms-ss-gate">MS / SS Gate</option>
                        <option value="staircase">Staircase Fabrication</option>
                        <option value="sliding-door">
                          Sliding Door / Partition
                        </option>
                      </select>
                    </div>

                    {/* Location */}
                    <div>
                      <input
                        type="text"
                        name="project_location"
                        className="w-full bg-black/50 border-2 border-gray-800/50 rounded-xl py-2.5 px-4 text-white placeholder-gray-600 text-sm backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-2 focus:ring-gray-600/30 transition-all duration-300 hover:border-gray-700/70"
                        placeholder="Project Location"
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <textarea
                        name="user_message"
                        className="w-full bg-black/50 border-2 border-gray-800/50 rounded-xl py-2.5 px-4 text-white placeholder-gray-600 text-sm backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-2 focus:ring-gray-600/30 transition-all duration-300 resize-vertical h-24"
                        rows="4"
                        placeholder="Describe your requirement..."
                        required
                      />
                    </div>

                    {/* Status Message */}
                    {status && (
                      <div className="md:col-span-2 text-center pt-2">
                        <p
                          className={`text-sm ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}
                        >
                          {status}
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="md:col-span-2 text-center pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex px-6 py-2.5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-gray-600/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 border border-gray-700/50 items-center justify-center gap-1.5 group relative overflow-hidden w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        <span className="relative z-10 flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          {loading ? "Sending..." : "Request Quote"}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 w-[200%] h-full" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-5xl lg:text-6xl font-black mb-12 text-white">
            <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
              How It Works
            </span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Submit Details",
                desc: "Fill the quotation form with your project requirements and specifications.",
                icon: "📝",
              },
              {
                step: "2",
                title: "Site Visit",
                desc: "We arrange a free site visit if required to assess your project.",
                icon: "👷",
              },
              {
                step: "3",
                title: "Get Quotation",
                desc: "Receive your detailed quotation within 2 hours with best pricing.",
                icon: "⚡",
              },
            ].map((item, index) => (
              <div key={index} className="h-full">
                <div className="p-8 lg:p-10 rounded-3xl shadow-xl bg-gradient-to-b from-gray-950/80 to-black/60 backdrop-blur-xl border border-gray-800/50 hover:border-gray-700/70 hover:shadow-gray-800/30 hover:-translate-y-4 transition-all duration-700 group h-full flex flex-col">
                  <div className="w-20 h-20 rounded-3xl mb-6 bg-gradient-to-r from-gray-800 to-gray-700 shadow-2xl group-hover:scale-110 transition-all duration-500 mx-auto flex items-center justify-center text-3xl font-bold text-gray-900">
                    {item.icon}
                  </div>
                  <div className="mb-4 text-4xl font-black bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent mx-auto block w-fit">
                    {item.step}
                  </div>
                  <h6 className="text-2xl font-black mb-6 text-white group-hover:text-gray-300 transition-colors flex-1">
                    {item.title}
                  </h6>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold rounded-full text-xs shadow-md hover:shadow-lg transition-all duration-300">
              {/* Response Time: < 2 Hours */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quotation;
