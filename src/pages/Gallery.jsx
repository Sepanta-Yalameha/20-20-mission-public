import { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('dominican');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const tabs = [
    { id: 'dominican', label: 'Dominican Republic 2025' },
    { id: 'guatemala', label: 'Guatemala 2024' },
    { id: 'futures', label: 'Futures in Focus' },
    { id: 'gleneagle', label: 'Gleneagle Club' },
    { id: 'collection', label: 'Collection / Cleaning' },
  ];

  // Manual list for Guatemala images
  const guatemalaImages = [
    'Guatemala April 2024 Day 2-44.jpg',
    'Guatemala April 2024 Day 2-10.jpg',
    'Guatemala April 2024 Day 2-11.jpg',
    'Guatemala April 2024 Day 2-13.jpg',
    'Guatemala April 2024 Day 2-14.jpg',
    'Guatemala April 2024 Day 2-35.jpg',
    'Guatemala April 2024 Day 2-65.jpg',
    'Guatemala April 2024 Day 2-8.jpg',
    'Guatemala April 2024 Day 2-9.jpg',
    'Guatemala April 2024 Day 3-10.jpg',
    'Guatemala April 2024 Day 3-17.jpg',
    'Guatemala April 2024 Day 3-26.jpg',
    'Guatemala April 2024 Day 4-16.jpg',
    'Guatemala April 2024 Day 4-17.jpg',
    'Guatemala April 2024 Day 5-11.jpg',
    'Guatemala April 2024 Day 5-19.jpg',
    'Guatemala April 2024 Day 6-70.jpg'
  ].map(img => `/Guatemala/${img}`);

  // Generate list for Dominican Republic images (1 to 191)
  const dominicanImages = Array.from({ length: 191 }, (_, i) => 
    `/Dominican Republic 2025/Dominican Republic 2025-${i + 1}.jpg`
  );

  // Manual list for Collection/Cleaning images based on folders
  const collectionImages = [
    // Collection Process
    '/Collection Process/20 20 Car.png',
    '/Collection Process/20 20 Collecting 2.png',
    '/Collection Process/IMG_1184.jpg',
    '/Collection Process/IMG_1219.jpg',
    // Cleaning Process (using items found in folder)
    '/Cleaning Process/20 20 Cleaning.jpg',
    '/Cleaning Process/IMG_1207.jpg' 
  ];

  const futuresImages = [
    // Teddy Bear Fair, Fort McKay, August 2025
    '/Futures In Focus/Teddy Bear Fair, Fort McKay, August 2025/IMG_8473.JPG',
    '/Futures In Focus/Teddy Bear Fair, Fort McKay, August 2025/IMG_8477.JPG',
    '/Futures In Focus/Teddy Bear Fair, Fort McKay, August 2025/IMG_8478.JPG',
    '/Futures In Focus/Teddy Bear Fair, Fort McKay, August 2025/IMG_8481.JPG',
    '/Futures In Focus/Teddy Bear Fair, Fort McKay, August 2025/IMG_8483.JPG',
    '/Futures In Focus/Teddy Bear Fair, Fort McKay, August 2025/IMG_8484.JPG',
    '/Futures In Focus/Teddy Bear Fair, Fort McKay, August 2025/IMG_8486.JPG',
    '/Futures In Focus/Teddy Bear Fair, Fort McKay, August 2025/IMG_8487.JPG',
    
    // Elsie Fabian School, Fort McKay, November 2025
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/SCREENING1.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM1.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM10.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM11.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM12.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM2.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM3.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM4.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM5.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM6.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM7.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM8.jpg',
    '/Futures In Focus/Elsie Fabian School, Fort McKay, November 2025/STEAM9.jpg'
  ];

  const gleneagleImages = [
    '/Gleneagle Club/87684467-2DE3-46F7-A9FB-939FBB258F0A.jpg',
    '/Gleneagle Club/BE51C24A-8CA9-42EA-A3E2-7DD5B0442FB1.jpg',
    '/Gleneagle Club/IMG_3302.jpg',
    '/Gleneagle Club/IMG_3303.jpg',
    '/Gleneagle Club/IMG_4885.jpg'
  ];

  const getImages = () => {
    switch (activeTab) {
      case 'dominican': return dominicanImages;
      case 'guatemala': return guatemalaImages;
      case 'collection': return collectionImages;
      case 'futures': return futuresImages;
      case 'gleneagle': return gleneagleImages;
      default: return [];
    }
  };

  const allImages = getImages();
  const visibleImages = allImages.slice(0, visibleCount);

  // Reset visible count when tab changes
  useEffect(() => {
    setVisibleCount(12);
  }, [activeTab]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      // Check if we are near the bottom of the page
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
        visibleCount < allImages.length
      ) {
        setVisibleCount(prev => Math.min(prev + 12, allImages.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, allImages.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Capturing moments of impact and connection across our global missions
          </p>
        </div>
      </section>

      {/* Video Section */}
       <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <iframe 
              src="https://www.youtube.com/embed/GxgcIDuyAQQ" 
              title="Guatemala Eyeglasses Trip"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4 italic">Watch our journey in Guatemala</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-container min-h-screen">
        {/* Tabs */}
        <div className="flex justify-center mb-12 relative z-10 overflow-x-auto">
          <div className="inline-flex rounded-lg p-1 bg-gray-100 whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {visibleImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-0">
            {visibleImages.map((img, index) => (
              <div 
                key={`${activeTab}-${index}`}
                className="group aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 relative"
                style={{ animation: 'fadeIn 0.6s ease-out backwards' }}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.display = 'none'; // Hide container if image fails
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
             <p className="text-xl">Photos coming soon for this section.</p>
          </div>
        )}

        {/* Loading Indicator */}
        {visibleCount < allImages.length && (
          <div className="text-center py-8 text-gray-500 animate-pulse">
            Loading more memories...
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-95"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
