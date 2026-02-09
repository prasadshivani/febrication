import React from "react";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const services = [
    {
      title: "Steel Fabrication",
      description: "Strong & durable steel fabrication solutions for all your industrial needs.",
      image: "https://www.isaanengineering.com/wp-content/uploads/2025/03/door-grill.jpg",
      gradient: "from-black/95 via-gray-900/90 to-gray-800/85",
      accent: "from-gray-400 to-gray-300",
      icon: "🔩"
    },
    {
      title: "Sliding Work",
      description: "Modern sliding gates & structures with precision engineering.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/397817664/QB/SK/DD/50731423/sliding-window-500x500.jpg",
      gradient: "from-black/95 via-gray-900/90 to-gray-800/85",
      accent: "from-gray-400 to-gray-300",
      icon: "🚪"
    },
    {
      title: "Residential shed",
      description: "Custom residential shed fabrication solutions.",
      image: "https://lh4.googleusercontent.com/proxy/MDekHDhsCAd6ZUNw1i8uqMscKYcm1ow6IbK0dkXl__Jii1RC4uHVus1KDYU62i3VOIWZ7JhBNPF9BJgXhlofs365OIkqlZsIf-b6EfoCDYKS2vDBMN7VQ3-NW9AghA",
      gradient: "from-black/95 via-gray-900/90 to-gray-800/85",
      accent: "from-gray-400 to-gray-300",
      icon: "🏭"
    }
  ];

  return (
    <section className="services-preview py-12 lg:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="container">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="display-4 lg:display-3 fw-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
              Our Premium Services
            </span>
          </h2>
          <p className="lead text-gray-400 fs-4 lg:fs-3 max-w-3xl mx-auto opacity-90">
            High quality fabrication & sliding work with unmatched precision
          </p>
        </div>

        <div className="row g-4 g-lg-5 mb-12 lg:mb-20">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card h-100 position-relative overflow-hidden rounded-4 shadow-2xl group hover:shadow-gray-400/30 hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 ease-out border border-gray-700/50 hover:border-gray-400/50 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80 backdrop-blur-xl">
                
                {/* Service Image with Centered Icon Overlay */}
                <div className="position-relative w-100 h-72 lg:h-80 rounded-t-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Centered Service Image/Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-xl border-2 border-gray-600/50 group-hover:scale-110 transition-all duration-500 mx-auto">
                      <span className="w-full h-full flex items-center justify-center text-3xl lg:text-4xl font-bold text-gray-200 drop-shadow-lg">
                        {service.icon}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content Panel */}
                <div className="p-6 lg:p-8 border-t border-gray-600/50">
                  <h3 className="h3 lg:h2 fw-black text-white mb-4 group-hover:text-gray-300 transition-colors duration-500 lh-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base lg:text-lg mb-6 lh-lg opacity-90 group-hover:opacity-100 transition-all duration-500">
                    {service.description}
                  </p>
                  
                  {/* PERFECTLY MATCHED BUTTON SIZES */}
                  <div className="d-flex flex-column flex-sm-row gap-3 h-12">
                    {/* Pricing Button - SAME SIZE */}
                    <div className="badge bg-gradient-to-r from-gray-600/80 to-gray-500/80 text-white fw-bold py-3 px-6 rounded-xl shadow-lg text-sm flex-1 text-center d-flex align-items-center justify-content-center h-100">
                      ₹50,000+
                    </div>
                    
                    {/* View Details Button - SAME SIZE */}
                    <Link 
                      to="/services" 
                      className="btn bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 fw-bold py-3 px-6 rounded-xl shadow-xl hover:shadow-gray-400/50 hover:scale-105 hover:-translate-y-1 transition-all duration-400 border-2 border-gray-500/50 text-sm flex-1 text-center d-flex align-items-center justify-content-center gap-1 h-100 group"
                    >
                      <span>Details</span>
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform fs-6"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Smaller Main CTA */}
        <div className="text-center">
          <Link 
            to="/services" 
            className="btn bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 fw-black py-4 px-10 lg:px-12 rounded-3xl shadow-2xl hover:shadow-gray-400/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 d-inline-flex align-items-center gap-3 border-3 border-gray-500/50 group text-lg"
          >
            <span>Explore All Services</span>
            <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
