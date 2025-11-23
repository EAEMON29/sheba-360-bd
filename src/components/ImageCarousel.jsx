import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'; 

const ImageCarousel = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // For custom carousel

  // Search functionality
  const handleSearch = (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
          console.log("Searching for service:", searchQuery);
          // In a real app, this would redirect to the service listing page with the query
          // window.location.href = `/services?search=${searchQuery}`;
          alert(`🔍 Searching for: "${searchQuery}"... \n(This will redirect to the search results page in a real app)`);
      }
  };


  // Placeholder data (Directly embedded)
  const slides = [
    { 
      id: 1, 
      image: "https://images.unsplash.com/photo-1581578731117-104f2a412729?q=80&w=1200&auto=format&fit=crop", 
      title: "Your Home Needs, Our Experts",
      subtitle: "Verified professionals ready to help you today."
    },
    { 
      id: 2, 
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop", 
      title: "Book Expert AC Repair & Service",
      subtitle: "Guaranteed fix or your money back."
    },
    { 
      id: 3, 
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop", 
      title: "Quality Service, Anytime",
      subtitle: "Plumbing, Electrical, and more—all in one place."
    },
    { 
      id: 4, 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", 
      title: "Hassle-Free Home Shifting",
      subtitle: "The easiest way to move your entire home safely."
    },
    { 
      id: 5, 
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop", 
      title: "Trusted Professionals, On Demand",
      subtitle: "Your safety is our priority. Every professional is verified."
    },
  ];

  // Custom Carousel Logic
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

  // Autoplay functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Scrolls every 5 seconds
    return () => clearInterval(slideInterval);
  }, [currentIndex]); // Re-run effect when currentIndex changes


  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative group overflow-hidden">
        
        {/* Main Image Container */}
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div 
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[10000ms] scale-100 hover:scale-105"
                    style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
            </div>
        ))}

        {/* --- Content & Search Bar Container --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
            
            {/* Heading & Subtitle with Animation */}
            <div className="max-w-4xl mx-auto mb-10 animate-fadeInUp transition-all duration-500">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl leading-tight tracking-tight">
                    {slides[currentIndex].title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 font-medium drop-shadow-md">
                    {slides[currentIndex].subtitle}
                </p>
            </div>

            {/* --- ENHANCED SEARCH BAR --- */}
            <div className="w-full max-w-3xl">
                <form 
                    onSubmit={handleSearch} 
                    className="flex items-center bg-white rounded-full shadow-2xl overflow-hidden p-1.5 transform transition-all hover:scale-[1.01] border-4 border-white/20 backdrop-blur-sm"
                >
                    {/* Input Field */}
                    <div className="flex-grow flex items-center pl-6 pr-2">
                        <Search size={24} className="text-gray-400 mr-3" />
                        <input
                            type="text"
                            placeholder="What service do you need? (e.g. AC Repair, Cleaning)"
                            className="w-full py-4 text-gray-700 text-lg placeholder-gray-400 outline-none bg-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    
                    {/* Search Button */}
                    <button 
                        type="submit" 
                        className="btn btn-lg  font-bold rounded-full px-8 md:px-10 shadow-md hover:shadow-lg hover:bg-blue-800 transition-all duration-300 border-none"
                    >
                        Search
                    </button>
                </form>
                
                {/* Popular Search Tags */}
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-white/80 font-medium">
                    <span>Popular:</span>
                    {['AC Repair', 'Home Cleaning', 'Plumbing', 'Shifting'].map((tag) => (
                        <span 
                            key={tag} 
                            className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full cursor-pointer transition backdrop-blur-sm border border-white/10"
                            onClick={() => setSearchQuery(tag)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

        </div>
        
        {/* Navigation Arrows (Visible on Hover) */}
        <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 backdrop-blur-md border border-white/20"
        >
            <ChevronLeft size={32} />
        </button>
        <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 backdrop-blur-md border border-white/20"
        >
            <ChevronRight size={32} />
        </button>
        
        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 shadow-lg ${
                        currentIndex === index ? 'w-10 bg-secondary' : 'w-3 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    </div>
  );
}

export default ImageCarousel;