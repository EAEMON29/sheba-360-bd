import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronRight } from 'lucide-react';

// --- Hardcoded Fallback Data ---
// Note: Looping data is created by duplicating this set
const FALLBACK_TESTIMONIALS = [
    { id: 1, name: "Rahim Uddin", location: "Gulshan, Dhaka", rating: 5, text: "Excellent AC service! The technician was very polite and fixed the cooling issue within an hour.", image: "https://randomuser.me/api/portraits/men/32.jpg", service: "AC Repair" },
    { id: 2, name: "Nusrat Jahan", location: "Dhanmondi, Dhaka", rating: 5, text: "Used their home deep cleaning service before Eid. My house looks brand new. Highly recommended!", image: "https://randomuser.me/api/portraits/women/44.jpg", service: "Deep Cleaning" },
    { id: 3, name: "Tanvir Ahmed", location: "Uttara, Dhaka", rating: 4, text: "Very professional plumbing service. The booking process was super easy through the website.", image: "https://randomuser.me/api/portraits/men/85.jpg", service: "Plumbing Fix" },
    { id: 4, name: "Sadia Islam", location: "Mirpur, Dhaka", rating: 5, text: "Shifted my home with Sheba 360. Not a single glass broke. Very careful team.", image: "https://randomuser.me/api/portraits/women/12.jpg", service: "Home Shifting" }
];

// --- Star Rating Component (Unchanged) ---
const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />);
    }
    if (hasHalfStar) {
        stars.push(<Star key="half" size={16} className="text-yellow-500 fill-yellow-500 opacity-50" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }
    return <div className="flex gap-1">{stars}</div>;
};


// --- Review Card Component ---
const ReviewCard = ({ review, index }) => {
    return (
        <div
            key={index} 
            className="card bg-white shadow-xl rounded-xl p-8 border-l-8 border-secondary transition-transform duration-300 hover:shadow-2xl flex-shrink-0 w-[90vw] sm:w-[450px]"
        >
            {/* Quote Icon */}
            <Quote size={32} className="text-secondary mb-4 transform transition duration-500" />
            
            {/* Review Text */}
            <p className="text-gray-700 italic mb-6 line-clamp-4">
                "{review.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center space-x-4 border-t pt-4">
                <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/0A2E5D/FFFFFF?text=U" }}
                />
                <div>
                    <h4 className="font-bold text-primary">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location} | {review.service}</p>
                </div>
            </div>
            
            {/* Rating */}
            <div className="absolute top-4 right-4 flex flex-col items-end">
                <RatingStars rating={review.rating} />
                <p className="text-xs text-gray-500 mt-1">{review.rating} / 5</p>
            </div>
        </div>
    );
};


// --- Main Component (Continuous Marquee Scroll Layout) ---
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Data Fetching
    useEffect(() => {
        fetch("/testimonials.json")
            .then(res => res.json())
            .then(data => {
                // Duplicating the data set 3 times for seamless looping (Marquee effect requires >2x content)
                const originalData = data.length > 0 ? data : FALLBACK_TESTIMONIALS;
                const loopedData = [...originalData, ...originalData, ...originalData]; 
                setReviews(loopedData);
                setLoading(false);
            })
            .catch(() => {
                const loopedFallback = [...FALLBACK_TESTIMONIALS, ...FALLBACK_TESTIMONIALS, ...FALLBACK_TESTIMONIALS];
                setReviews(loopedFallback);
                setLoading(false);
            });
    }, []);

    // FIX: Scroll to Service Gallery (Top of the service list)
    const handleBookNow = () => {
        // Scrolls down past Hero Section and just before ServiceGallery starts (around 400px down)
        window.scrollTo({ top: 600, behavior: 'smooth' }); 
        console.log("Scrolling to Service Gallery...");
    };


    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary mb-3">
                        Customer Success Stories
                    </h2>
                    <p className="text-lg text-gray-600">See what our delighted clients say about our verified professionals.</p>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : (
                // Outer container: hides the scrolling bar, allows for the animation to start outside view
                <div className="w-full overflow-hidden whitespace-nowrap"> 
                    
                    {/* Inner Flex Wrapper: Applies the CSS marquee animation and holds all duplicated cards */}
                    <div 
                        // animate-marquee ensures continuous movement without pause or stop
                        className="flex gap-6 animate-marquee w-fit pl-4 md:pl-8"
                    >
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} index={index} /> 
                        ))}
                    </div>
                </div>
            )}
            
            {/* Optional CTA to booking */}
            <div className="text-center mt-10">
                <button 
                    className="btn btn-secondary btn-lg text-primary font-bold shadow-lg hover:opacity-90"
                    onClick={handleBookNow} // FIX: Calls the scroll function
                >
                    Book Your Trusted Service Today <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default Testimonials;