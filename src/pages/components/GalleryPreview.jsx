import React, { useState } from "react";
import { Link } from "react-router-dom";

const GalleryPreview = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, thumb: "https://lirp.cdn-website.com/3fb81be9/dms3rep/multi/opt/2-01da6550-5f35b981-527h.jpg", title: "Steel Fabrication", category: "Workshop" },
    { id: 2, thumb: "https://i.ytimg.com/vi/Uz10szcyVh8/sddefault.jpg", title: "Modern Gate", category: "Installation" },
    { id: 5, thumb: "https://www.alphaglass.org/wp-content/uploads/2020/03/aluminium-fabrication.jpg", title: "Aluminium Fabrication", category: "Aluminium Work" },
    { id: 4, thumb: "https://devssrailing.com/wp-content/uploads/2025/03/Wire-Rope-SS-Railing-About-Us.png", title: "Stainless Railing", category: "Custom" },
    { id: 5, thumb: "https://images.jdmagicbox.com/quickquotes/images_main/terrace-shed-for-residential-2217720718-axcc05iv.jpg", title: "Residential shed", category: "Construction" },
    { id: 6, thumb: "https://www.charlesandivy.co.uk/cdn/shop/files/sliding-gate-aria-grey-black-handle.jpg?v=1748511088", title: "Sliding Gate", category: "Automation" }
  ];

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recent fabrication projects
            </p>
          </div>

          {/* Simple Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-900/50 hover:bg-gray-800/70 border-2 border-gray-800 hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="text-xs bg-gray-800 px-3 py-1 rounded-full w-fit mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">Click to view</p>
                </div>
              </div>
            ))}
          </div>

          {/* Small CTA Button */}
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-5 text-sm rounded-lg transition-all duration-300 hover:scale-105"
            >
              View Gallery →
            </Link>
          </div>
        </div>

        {/* Simple Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-gray-900 hover:bg-gray-800 p-3 rounded-xl transition-colors"
              >
                ✕
              </button>
              <img
                src={selectedImage.thumb}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-gray-900/90 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-lg text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default GalleryPreview;
