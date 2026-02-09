import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { productContext } from "../StoreContext";

const Product = () => {
  const product = useContext(productContext);

  const handleDetails = (item) => {
    console.log("Product details:", item);
    // Add your details logic here
  };

  return (
    <>
      {/* HERO */}
      <section className="product-hero py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Metallic pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#6b7280_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#4b5563_0%,transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Strong, reliable and long-lasting fabrication products engineered
            for industrial excellence
          </p>
          <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-500 text-white font-bold px-6 py-2.5 rounded-2xl shadow-xl mt-8 text-lg">
            Premium Fabrication Solutions
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {product.map((item, index) => (
              <div className="group h-full" key={item.id || index}>
                <div className="product-card h-full relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-gray-400/30 hover:shadow-3xl hover:-translate-y-3 transition-all duration-700 border border-gray-700/50 hover:border-gray-500/70 bg-gradient-to-b from-gray-900/90 via-gray-800/80 to-black/90 backdrop-blur-xl">
                  {/* Premium Image Container */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "260px", minHeight: "260px" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x280/4b5563/9ca3af?text=No+Image";
                      }}
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    {/* Quick Info Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-600/90 to-gray-500/90 backdrop-blur-xl border border-gray-700/50 px-3 py-1.5 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-bold text-gray-200 text-xs tracking-wider uppercase">
                        Premium
                      </span>
                    </div>

                    {/* Live Indicator */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full shadow-lg animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>

                  {/* Content Panel */}
                  <div className="p-5 lg:p-6 border-t border-gray-700/50">
                    <h5 className="text-xl font-black mb-3 text-white group-hover:text-gray-300 transition-colors duration-500 line-clamp-2">
                      {item.title}
                    </h5>
                    <p className="text-gray-400 mb-5 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-500 line-clamp-2">
                      {item.desc}
                    </p>

                    {/* SMALLER View Details Button */}
                    <NavLink to={`/product/${item.id}`}>
                      <button
                        className="w-full font-bold py-2.5 px-5 rounded-2xl shadow-xl hover:shadow-gray-400/50 hover:scale-105 hover:-translate-y-1 transition-all duration-400 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 border-2 border-gray-500/50 group-hover:border-gray-400/70 overflow-hidden text-sm flex items-center justify-center gap-1.5"
                        onClick={() => handleDetails(item)}
                      >
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Details
                      </button>
                    </NavLink>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMALLER CTA Section */}
      <section className="py-20 bg-gradient-to-tl from-gray-900 via-black to-gray-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#6b7280_0%,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 drop-shadow-2xl">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
              Explore our complete product catalog or get custom fabrication
              solutions tailored to your needs.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
              <Link
                to="/quotation"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 font-black py-3 px-8 rounded-2xl shadow-xl hover:shadow-gray-400/50 hover:scale-105 hover:-translate-y-1 transition-all duration-400 border-2 border-gray-500/50 text-lg"
              >
                Get Quote
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 border-2 border-gray-600/50 text-white font-bold py-3 px-8 rounded-2xl hover:bg-gray-800/50 hover:border-gray-500/70 hover:shadow-gray-400/30 transition-all duration-400 text-lg"
              >
                Full Catalog
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m1 9h1"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
