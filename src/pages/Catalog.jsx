import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../StoreContext";

const Catalog = () => {
  const products = useContext(productContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extract unique categories from products
  const categories = ["all", ...new Set(products.map(item => item.category || "other"))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDetails = (item) => {
    console.log("Catalog product details:", item);
  };

  return (
    <>
      {/* HERO */}
      <section className="catalog-hero py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#6b7280_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#4b5563_0%,transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Product Catalog
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Complete collection of premium fabrication products with full specifications and technical details
          </p>
          <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-500 text-white font-bold px-6 py-2.5 rounded-2xl shadow-xl mt-8 text-lg">
            {filteredProducts.length} Products Available
          </div>
        </div>
      </section>

      {/* FILTERS & SEARCH */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search products by name or description..."
                className="w-full py-4 px-6 bg-gray-800/50 border-2 border-gray-700/50 rounded-3xl text-white placeholder-gray-400 font-medium text-lg focus:border-gray-500/70 focus:outline-none focus:ring-4 focus:ring-gray-500/20 transition-all duration-300 backdrop-blur-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 shadow-xl shadow-gray-400/30 border-2 border-gray-500/50"
                      : "bg-gray-800/50 border-2 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600/70 hover:shadow-lg"
                  }`}
                >
                  {category === "all" ? "All Products" : category}
                  {selectedCategory === category && (
                    <span className="ml-1">({products.filter(p => p.category === category).length})</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG GRID */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <>
              {/* Grid with more columns for catalog */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
                {filteredProducts.map((item) => (
                  <div className="group h-full" key={item.id}>
                    <div className="catalog-card h-full relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-gray-400/30 hover:shadow-3xl hover:-translate-y-3 transition-all duration-700 border border-gray-700/50 hover:border-gray-500/70 bg-gradient-to-b from-gray-900/90 via-gray-800/80 to-black/90 backdrop-blur-xl">
                      
                      {/* Enhanced Image Container */}
                      <div className="relative overflow-hidden" style={{ height: "220px", minHeight: "220px" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x280/4b5563/9ca3af?text=No+Image";
                          }}
                        />

                        {/* Category Badge */}
                        {item.category && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-xl border border-blue-500/50 px-3 py-1.5 rounded-2xl shadow-2xl">
                            <span className="font-bold text-white text-xs tracking-wider uppercase">
                              {item.category}
                            </span>
                          </div>
                        )}

                        {/* Price/Spec Badge */}
                        {item.price && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600/90 to-emerald-500/90 backdrop-blur-xl border border-emerald-500/50 px-3 py-1.5 rounded-2xl shadow-2xl">
                            <span className="font-bold text-white text-xs tracking-wider">
                              ₹{item.price}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Panel */}
                      <div className="p-5 lg:p-6 border-t border-gray-700/50 h-48 flex flex-col justify-between">
                        <div>
                          <h5 className="text-lg font-black mb-2 text-white group-hover:text-gray-300 transition-colors duration-500 line-clamp-1">
                            {item.title}
                          </h5>
                          <p className="text-gray-400 text-xs leading-tight line-clamp-2 mb-3">
                            {item.desc}
                          </p>
                          
                          {/* Quick Specs */}
                          {item.specs && (
                            <div className="text-xs text-gray-500 space-y-1 mb-4">
                              {Object.entries(item.specs).slice(0, 2).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span>{key}:</span>
                                  <span className="font-mono">{value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Catalog Action Buttons */}
                        <div className="space-y-2 pt-2">
                          <Link to={`/product/${item.id}`}>
                            <button
                              className="w-full font-bold py-2.5 px-4 rounded-xl shadow-lg hover:shadow-gray-400/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 border border-gray-500/50 text-xs flex items-center justify-center gap-1.5"
                              onClick={() => handleDetails(item)}
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View Details
                            </button>
                          </Link>
                          
                          <button className="w-full py-2 px-4 rounded-xl text-xs font-bold border-2 border-gray-600/50 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500/70 hover:shadow-gray-400/30 transition-all duration-300 bg-gray-900/30 backdrop-blur-sm">
                            Add to Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Results Info */}
              <div className="text-center mt-16">
                <p className="text-gray-400 text-lg">
                  Showing <span className="font-bold text-white">{filteredProducts.length}</span> of <span className="font-bold text-white">{products.length}</span> products
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-32">
              <div className="w-24 h-24 bg-gray-800/50 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">No products found</h3>
              <p className="text-gray-400 max-w-md mx-auto mb-8">
                Try adjusting your search terms or filters. We have {products.length} premium fabrication products available.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 font-black py-3 px-8 rounded-2xl shadow-xl hover:shadow-gray-400/50 hover:scale-105 transition-all duration-400 border-2 border-gray-500/50"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-tl from-gray-900 via-black to-gray-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#6b7280_0%,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 drop-shadow-2xl">
              Need Custom Solutions?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
              Can't find what you need? Get custom fabrication solutions tailored to your specifications.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
              <Link
                to="/quotation"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-gray-900 font-black py-3 px-8 rounded-2xl shadow-xl hover:shadow-gray-400/50 hover:scale-105 hover:-translate-y-1 transition-all duration-400 border-2 border-gray-500/50 text-lg"
              >
                Request Custom Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border-2 border-gray-600/50 text-white font-bold py-3 px-8 rounded-2xl hover:bg-gray-800/50 hover:border-gray-500/70 hover:shadow-gray-400/30 transition-all duration-400 text-lg"
              >
                Browse Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
