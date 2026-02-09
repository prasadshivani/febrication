import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { product } from "../product.js";

const ProductDetails = () => {
  const { id } = useParams();
  const singleProduct = product.find((item) => item.id === Number(id));

  const [showFullDesc, setShowFullDesc] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ DYNAMIC keypoints from product data
  const productKeypoints = singleProduct?.keypoints || [
    "Premium Quality Materials",
    "Expert Craftsmanship",
    "Custom Design Options",
    "Fast Delivery & Installation",
    "Lifetime Durability Guarantee"
  ];

  // ✅ Multiple images (main + fallback variations)
  const productImages = [
    singleProduct?.image || "",
    // Fallback to main image if variations don't exist
    singleProduct?.image || "",
    singleProduct?.image || ""
  ].filter(Boolean);

  useEffect(() => {
    if (singleProduct) {
      setTimeout(() => setIsLoading(false), 800);
    }
  }, [singleProduct]);

  if (!singleProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
        <div className="text-center animate-pulse">
          <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-300 mb-2">
            Product not found
          </h2>
          <p className="text-gray-500">
            The product you're looking for doesn't exist
          </p>
          <Link
            to="/products"
            className="inline-block mt-6 px-8 py-3 bg-gray-700 text-gray-200 rounded-xl hover:bg-gray-600 transition-all duration-300 font-semibold"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-gray-300 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="max-w-6xl mx-auto p-8">
        {/* ✅ DYNAMIC Product Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent mb-4 tracking-tight">
            {singleProduct.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Image Gallery - DYNAMIC images */}
          <div className="space-y-6">
            <div className="relative group">
              <img
                src={productImages[currentImageIndex] || singleProduct.image}
                alt={singleProduct.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-500 bg-gray-800"
                onError={(e) => {
                  e.target.src = singleProduct.image;
                }}
              />
              {/* Image Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Thumbnail Gallery */}
            {productImages.length > 1 && (
              <div className="flex gap-3">
                {productImages.slice(0, 3).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => changeImage(index)}
                    className={`flex-1 h-24 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                      currentImageIndex === index
                        ? "ring-4 ring-gray-400 ring-opacity-50 scale-105"
                        : "opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <img
                      src={img || singleProduct.image}
                      alt={`${singleProduct.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info & Controls */}
          <div className="space-y-8">
            {/* ✅ DYNAMIC Description */}
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-bold text-gray-200 mb-4">Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                {singleProduct.desc}
              </p>
            </div>

            {/* ✅ DYNAMIC Key Features - FULLY BOUND */}
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-6">
                Key Features
              </h3>
              <div className="space-y-3">
                {productKeypoints.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-800/50 hover:bg-gray-700 rounded-xl transition-all duration-200 hover:translate-x-2 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Get Quote */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                <span className="text-gray-300 font-semibold">Quantity</span>
                <div className="flex items-center bg-gray-900 border-2 border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 text-xl font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                  addedToCart
                    ? "bg-emerald-600 text-white animate-pulse"
                    : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-gray-900 hover:scale-105 hover:shadow-2xl"
                }`}
              >
                {addedToCart ? (
                  <>
                    ✓ Quote Sent Successfully
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </>
                ) : (
                  "Get Quote"
                )}
              </button>
            </div>

            {/* Toggle Full Description */}
            <button
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="w-full flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-700 rounded-xl transition-all duration-300 group"
            >
              <span className="font-semibold text-gray-300">
                {showFullDesc ? "Hide Details ▲" : "Show Full Details ▼"}
              </span>
              <div className="w-3 h-3 border-b-2 border-r-2 transition-transform duration-300 group-hover:scale-110 rotate-45"></div>
            </button>
            {showFullDesc && (
              <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 animate-in slide-in-from-top-4">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                  {singleProduct.desc}
                </p>
              </div>
            )}

            {/* Back Button */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-semibold transition-all duration-300 hover:underline underline-offset-4"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
