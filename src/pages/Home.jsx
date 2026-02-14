import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ServicesPreview from "./components/ServicesPreview";
import GalleryPreview from "./components/GalleryPreview";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const heroInView = useInView(heroRef, { threshold: 0.1 });
  const cardsInView = useInView(cardsRef, { threshold: 0.1 });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Quote sent! We'll call ${formData.phone} within 2 hours`);
    setFormData({ name: "", phone: "", service: "" });
    setShowForm(false);
  };

  const services = [
    {
      title: "Welding",
      icon: "https://media.istockphoto.com/id/1310455312/photo/welding-argon-results-welding-on-the-metal-of-the-foreground.jpg?s=612x612&w=0&k=20&c=Wn3VToZYmGRsPE2by7r3ODy9D_pfgaFv9bWVWfaVtok=",
      desc: "TIG/MIG Perfect",
      color: "from-gray-400 to-gray-200",
    },
    {
      title: "Gates",
      icon: "https://5.imimg.com/data5/SELLER/Default/2021/2/XU/HP/NU/119914703/11.png",
      desc: "Auto-Sliding",
      color: "from-gray-400 to-gray-200",
    },
    {
      title: "Sheds",
      icon: "https://www.valleystructures.com/wp-content/uploads/2021/05/20210526_161952-scaled.jpg",
      desc: "50T Capacity",
      color: "from-gray-400 to-gray-200",
    },
    {
      title: "Window",
      icon: "https://cms.interiorcompany.com/wp-content/uploads/2024/07/sliding-window-frame-material-varieties.jpg",
      desc: "Custom Design",
      color: "from-blue-400 to-blue-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      {/* MOBILE-OPTIMIZED HERO SECTION */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#6b7280_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#4b5563_0%,transparent_50%)] sm:bg-[radial-gradient(circle_at_50%_20%,#6b7280_0%,transparent_70%)]"></div>
        </div>

        <motion.div
          ref={heroRef}
          className="container mx-auto h-[80vh] sm:h-[85vh] lg:h-screen px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start relative z-10 py-12 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <div className="w-full lg:w-3/4 xl:w-2/3 space-y-8 lg:space-y-12 text-center lg:text-left">
            {/* MOBILE-FRIENDLY HERO TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-tight mb-4 sm:mb-6 drop-shadow-2xl px-2 lg:px-0">
                <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-4xl">
                  METAL WORKS
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide max-w-xl sm:max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2">
                Industrial Fabrication • Precision Engineering • 24/7 Operations
              </p>
            </motion.div>

            {/* RESPONSIVE SERVICE CARDS */}
            <motion.div
              ref={cardsRef}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 px-2 lg:px-0"
              variants={containerVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-xl border-2 border-gray-700/50 overflow-hidden cursor-pointer transition-all duration-400 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-xl lg:hover:shadow-2xl hover:shadow-gray-400/20 hover:border-gray-400/50 ${
                    hoveredCard === index
                      ? "ring-2 lg:ring-4 ring-gray-400/30 scale-[1.02] lg:scale-105 shadow-2xl lg:shadow-3xl shadow-gray-400/40 bg-gray-800/70"
                      : "bg-gray-900/60 lg:hover:bg-gray-800/80"
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-gray-300/20 to-gray-400/10 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 h-full w-[200%] lg:w-[200%]" />
                  
                  <div className="relative z-10 text-center space-y-3 h-full flex flex-col justify-center">
                    <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl group-hover:scale-105 transition-all duration-400 bg-gray-800/50 border border-gray-700/50">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <h3 className="text-base sm:text-lg lg:text-xl font-black text-white mb-1 group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-semibold leading-tight">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* MOBILE CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 lg:px-0 max-w-md mx-auto lg:mx-0">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/quotation"
                  className="group relative bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 text-gray-900 font-black text-base sm:text-lg py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg lg:shadow-xl shadow-gray-400/40 hover:shadow-xl lg:hover:shadow-2xl hover:shadow-gray-400/60 hover:-translate-y-1 transition-all duration-400 border border-gray-400/50 hover:border-gray-300/70 flex items-center justify-center gap-2 font-mono tracking-wider w-full sm:w-auto"
                >
                  <span className="relative z-10">🚀 Start Project</span>
                </Link>
              </motion.div>
            </div>

            {/* RESPONSIVE STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-8 px-2 lg:px-0">
              {[
                { num: "1,500+", label: "Projects", color: "from-gray-400 to-gray-200" },
                { num: "99.9%", label: "Accuracy", color: "from-gray-500 to-gray-300" },
                { num: "24/7", label: "Support", color: "from-gray-400 to-gray-200" },
                { num: "<2HRS", label: "Response", color: "from-gray-500 to-gray-300" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group p-3 sm:p-4 md:p-6 bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl text-center hover:bg-gray-800/80 hover:shadow-lg hover:shadow-gray-400/20 transition-all duration-400 hover:border-gray-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <div className={`text-lg sm:text-xl md:text-2xl font-black ${stat.color} bg-gradient-to-r bg-clip-text text-transparent mb-1 sm:mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.num}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-semibold group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MOBILE FRIENDLY FORM - Uncomment if needed */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:left-12 md:right-12 md:bottom-12 max-w-2xl mx-auto backdrop-blur-3xl bg-gray-900/95 border-2 border-gray-700/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/50 z-50"
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="md:col-span-2 space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full p-3 sm:p-4 bg-gray-900/80 border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-500 backdrop-blur-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 text-sm sm:text-base hover:border-gray-600/70"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Phone Number"
                    className="w-full p-3 sm:p-4 bg-gray-900/80 border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-500 backdrop-blur-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 text-sm sm:text-base hover:border-gray-600/70"
                  />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 bg-gray-900/80 border-2 border-gray-700/50 rounded-xl text-white backdrop-blur-xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 text-sm sm:text-base hover:border-gray-600/70"
                  >
                    <option value="">Select Service</option>
                    <option value="gates">Gates & Grills</option>
                    <option value="sheds">Industrial Sheds</option>
                    <option value="stairs">Staircases</option>
                    <option value="custom">Custom Work</option>
                  </select>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 text-gray-900 font-black py-3 px-4 sm:py-3.5 sm:px-6 rounded-xl sm:rounded-2xl text-sm sm:text-base shadow-lg shadow-gray-400/40 hover:shadow-xl hover:shadow-gray-400/60 hover:-translate-y-1 transition-all duration-300 border border-gray-400/50 hover:border-gray-300/70 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Quote
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <ServicesPreview />
      <GalleryPreview />
    </>
  );
};

export default Home;
