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
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-900">
        {/* Subtle metallic pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#6b7280_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#4b5563_0%,transparent_50%)]"></div>
        </div>

        <motion.div
          ref={heroRef}
          className="container mx-auto h-screen px-4 lg:px-8 flex items-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <div className="w-full lg:w-3/4 xl:w-2/3 space-y-12">
            {/* HERO TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
                <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-4xl">
                  METAL WORKS
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide max-w-2xl leading-relaxed">
                Industrial Fabrication • Precision Engineering • 24/7 Operations
              </p>
            </motion.div>

            {/* SERVICE CARDS */}
            <motion.div
              ref={cardsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-8 rounded-3xl backdrop-blur-xl border-2 border-gray-700/50 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-400/30 hover:border-gray-400/50 ${
                    hoveredCard === index
                      ? "ring-4 ring-gray-400/40 scale-105 shadow-3xl shadow-gray-400/50 bg-gray-800/80"
                      : "bg-gray-900/70 hover:bg-gray-800/90"
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  variants={cardVariants}
                  whileHover={{
                    y: -20,
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 via-gray-300/40 to-gray-400/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 h-full w-[200%]" />

                  <div className="relative z-10 text-center space-y-4 h-full flex flex-col justify-center">
                    {/* CENTERED SERVICE IMAGE */}
                    <div className="mx-auto w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-110 transition-all duration-500 bg-gray-800/50 border-2 border-gray-700/50">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-lg lg:text-xl font-black text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-semibold">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* SMALLER CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/quotation"
                  className="group relative bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 text-gray-900 font-black text-lg py-4 px-8 rounded-2xl shadow-xl shadow-gray-400/50 hover:shadow-2xl hover:shadow-gray-400/70 hover:-translate-y-1 transition-all duration-400 font-mono tracking-wider border-2 border-gray-400/50 hover:border-gray-300/70 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">🚀 Start Project</span>
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-gray-200/50 -skew-x-12 -translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 rounded-2xl" /> */}
                </Link>
              </motion.div>
{/* 
              <motion.button
                className="group bg-gray-900/70 backdrop-blur-xl border-2 border-gray-600/50 text-white font-bold text-lg py-4 px-8 rounded-2xl hover:bg-gray-800/90 hover:border-gray-400/70 hover:shadow-xl hover:shadow-gray-400/30 hover:-translate-y-1 transition-all duration-400 flex items-center justify-center gap-2"
                onClick={() => setShowForm(!showForm)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                💬 Get Quote
              </motion.button> */}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[
                {
                  num: "1,500+",
                  label: "Projects",
                  color: "from-gray-400 to-gray-200",
                },
                {
                  num: "99.9%",
                  label: "Accuracy",
                  color: "from-gray-500 to-gray-300",
                },
                {
                  num: "24/7",
                  label: "Support",
                  color: "from-gray-400 to-gray-200",
                },
                {
                  num: "<2HRS",
                  label: "Response",
                  color: "from-gray-500 to-gray-300",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group p-4 lg:p-6 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl text-center hover:bg-gray-800/95 hover:shadow-lg hover:shadow-gray-400/20 transition-all duration-400 hover:border-gray-400/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`text-xl lg:text-2xl font-black ${stat.color} bg-gradient-to-r bg-clip-text text-transparent mb-1 lg:mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.num}
                  </div>
                  <div className="text-gray-400 text-xs lg:text-sm font-semibold group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SMALLER CONTACT FORM */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              className="fixed bottom-6 left-6 right-6 lg:left-12 lg:right-12 lg:bottom-12 max-w-2xl mx-auto backdrop-blur-3xl bg-gray-900/95 border-2 border-gray-700/50 rounded-3xl p-6 lg:p-8 shadow-2xl shadow-black/50 z-50"
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Instant Quote
                </h3>
                <motion.button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-white p-2 rounded-xl hover:bg-gray-800/50 transition-all ml-4"
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div> */}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-3">
                  {/* <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full p-4 lg:p-5 bg-gray-900/80 border-2 border-gray-700/50 rounded-2xl text-white placeholder-gray-500 backdrop-blur-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-400/30 transition-all duration-300 text-base hover:border-gray-600/70"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Phone Number"
                    className="w-full p-4 lg:p-5 bg-gray-900/80 border-2 border-gray-700/50 rounded-2xl text-white placeholder-gray-500 backdrop-blur-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-400/30 transition-all duration-300 text-base hover:border-gray-600/70"
                  /> */}
                {/* </div>
                <div className="space-y-3 lg:space-y-4">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 lg:p-5 bg-gray-900/80 border-2 border-gray-700/50 rounded-2xl text-white backdrop-blur-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-400/30 text-base hover:border-gray-600/70"
                  >
                    <option value="">Select Service</option>
                    <option value="gates">Gates & Grills</option>
                    <option value="sheds">Industrial Sheds</option>
                    <option value="stairs">Staircases</option>
                    <option value="custom">Custom Work</option>
                  </select> */}
                  {/* <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 text-gray-900 font-black py-4 px-6 lg:px-8 rounded-2xl text-base shadow-xl shadow-gray-400/50 hover:shadow-2xl hover:shadow-gray-400/70 hover:-translate-y-1 transition-all duration-300 border-2 border-gray-400/50 hover:border-gray-300/70 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Quote
                  </motion.button> */}
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
