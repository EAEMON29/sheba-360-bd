import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'; 

const ImageCarousel = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  const slides = [
    { 
      id: 1, 
      image: "https://images.unsplash.com/photo-1667983453881-4992fe86ab1b?q=80",
      title: "Your Home Needs, Our Experts",
      subtitle: "Verified professionals ready to help you today."
    },
    { 
      id: 2, 
      image: "https://plus.unsplash.com/premium_photo-1677234147504-458d296b0113?q=80",
      title: "Book Expert AC Repair & Service",
      subtitle: "Guaranteed fix or your money back."
    },
    { 
      id: 3, 
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80",
      title: "Quality Service, Anytime",
      subtitle: "Plumbing, Electrical, and more—all in one place."
    },
    { 
      id: 4, 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      title: "Hassle-Free Home Shifting",
      subtitle: "Move your entire home safely."
    },
    { 
      id: 5, 
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80",
      title: "Trusted Professionals, On Demand",
      subtitle: "Your safety is our priority."
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden group">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-linear 
          ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] scale-110"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        </div>
      ))}

      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md max-w-[90%] sm:max-w-2xl">
          {slides[currentIndex].title}
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 drop-shadow-md max-w-[85%] sm:max-w-xl">
          {slides[currentIndex].subtitle}
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-xl sm:max-w-2xl flex bg-white rounded-full shadow-xl overflow-hidden border border-white/30"
        >
          <div className="flex items-center px-4 w-full">
            <Search className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="What service do you need?"
              className="w-full py-3 sm:py-4 text-gray-700 text-base sm:text-lg outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="px-6 sm:px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all"
          >
            Search
          </button>
        </form>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-white/80 text-xs sm:text-sm">
          {["AC Repair", "Cleaning", "Plumbing", "Shifting"].map((tag) => (
            <span
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation - Left */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 bg-white/10 
        hover:bg-blue-600 p-3 sm:p-4 rounded-full text-white opacity-0 
        group-hover:opacity-100 transition-all z-30"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Navigation - Right */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 bg-white/10 
        hover:bg-blue-600 p-3 sm:p-4 rounded-full text-white opacity-0 
        group-hover:opacity-100 transition-all z-30"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full cursor-pointer transition-all 
            ${currentIndex === index ? 'w-10 bg-blue-400' : 'w-3 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
