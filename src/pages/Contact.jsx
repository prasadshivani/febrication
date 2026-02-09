import React from "react";

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-gray-800/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Get in touch for fabrication & sliding work solutions
          </p>
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold px-4 py-1.5 rounded-full shadow-md mt-8 text-sm hover:shadow-lg transition-all duration-300">
            We're Here to Help
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 h-full">
            {/* CONTACT DETAILS */}
            <div className="lg:col-span-1 h-full">
              <div className="h-full p-6 lg:p-10 rounded-3xl shadow-2xl bg-black/40 backdrop-blur-xl border border-gray-800/50 hover:border-gray-700/70 hover:shadow-gray-800/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black mb-8 text-white">
                    <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent">
                      Contact Information
                    </span>
                  </h3>
                  <p className="text-gray-500 mb-10 text-base lg:text-lg leading-relaxed opacity-90">
                    We are available for residential, commercial and industrial fabrication and sliding work. Feel free to contact us.
                  </p>
                </div>

                <ul className="space-y-6">
                  <li className="group">
                    <div className="flex items-start mb-3">
                      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-2xl shadow-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-all duration-400">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <strong className="block text-white mb-2 font-bold text-base lg:text-lg">Address</strong>
                        <p className="text-gray-500 mb-0 leading-relaxed">Shop no.03, Madhav mahal building,near Kedney care hospital, Chulna bhabola road, vasai west.<br/><span className="text-gray-400">Serving Vasai-Virar & entire Maharashtra</span></p>
                      </div>
                    </div>
                  </li>
                 
                  <li className="group">
                    <div className="flex items-start mb-3">
                      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-2xl shadow-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-all duration-400">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <strong className="block text-white mb-2 font-bold text-base lg:text-lg">Phone</strong>
                        <a href="tel:+919970554276" className="text-gray-400 hover:text-white font-semibold text-lg block transition-colors">
                          +91 9970554276
                        </a>
                      </div>
                    </div>
                  </li>
                 
                  <li className="group">
                    <div className="flex items-start mb-3">
                      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-2xl shadow-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-all duration-400">
                        <span className="text-2xl">✉</span>
                      </div>
                      <div>
                        <strong className="block text-white mb-2 font-bold text-base lg:text-lg">Email</strong>
                        <a href="mailto:bbaliramprasad014@gmail.com" className="text-gray-400 hover:text-white font-semibold text-base lg:text-lg block transition-colors break-all">
                          bbaliramprasad014@gmail.com
                        </a>
                      </div>
                    </div>
                  </li>
                 
                  <li className="group">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-2xl shadow-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-all duration-400">
                        <span className="text-2xl">🕒</span>
                      </div>
                      <div>
                        <strong className="block text-white mb-2 font-bold text-base lg:text-lg">Working Hours</strong>
                        <p className="text-gray-500 mb-0 leading-relaxed">Mon – Sat<br/><span className="text-gray-400 font-semibold text-lg">9:00 AM – 7:00 PM</span></p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="lg:col-span-1 h-full">
              <div className="h-full shadow-2xl p-6 lg:p-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-gray-800/50 hover:border-gray-700/70 hover:shadow-gray-800/30 transition-all duration-500 flex flex-col justify-between">
                <h3 className="text-3xl lg:text-4xl font-black mb-10 text-white">
                  <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 bg-clip-text text-transparent">
                    Send Us a Message
                  </span>
                </h3>

                <form className="flex-1 flex flex-col justify-end">
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          className="w-full bg-black/50 border-2 border-gray-800/50 rounded-2xl py-3 px-4 text-white placeholder-gray-600 backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-4 focus:ring-gray-600/30 transition-all duration-400 text-sm hover:border-gray-700/70"
                          placeholder="Your Name *"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          className="w-full bg-black/50 border-2 border-gray-800/50 rounded-2xl py-3 px-4 text-white placeholder-gray-600 backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-4 focus:ring-gray-600/30 transition-all duration-400 text-sm hover:border-gray-700/70"
                          placeholder="Phone Number *"
                          required
                        />
                      </div>

                      <div className="md:col-span-2">
                        <input
                          type="email"
                          className="w-full bg-black/50 border-2 border-gray-800/50 rounded-2xl py-3 px-4 text-white placeholder-gray-600 backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-4 focus:ring-gray-600/30 transition-all duration-400 text-sm hover:border-gray-700/70"
                          placeholder="Email Address"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <textarea
                          className="w-full bg-black/50 border-2 border-gray-800/50 rounded-2xl py-3 px-4 text-white placeholder-gray-600 backdrop-blur-xl focus:outline-none focus:border-gray-700/70 focus:ring-4 focus:ring-gray-600/30 transition-all duration-400 text-sm resize-vertical h-28"
                          rows="4"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex px-6 py-2.5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-gray-600/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 border border-gray-700/50 items-center justify-center gap-1.5 group relative overflow-hidden self-start"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 w-[200%] h-full" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 pb-28 bg-gradient-to-t from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden bg-black/30 backdrop-blur-xl">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.475435395373!2d72.8044!3d19.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8d5f4e4f4f5%3A0x9c9e9e9e9e9e9e9e!2sVasai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                title="Our Location - Vasai, Maharashtra"
                allowFullScreen
                loading="lazy"
                className="border-0 w-full h-full rounded-3xl"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-lg mb-0">📍 Serving Vasai, Virar & entire Maharashtra</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
