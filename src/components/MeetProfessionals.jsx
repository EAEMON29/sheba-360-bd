import React, { useState, useEffect } from 'react';
import { UserCheck, Star, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';

// --- Hardcoded Fallback Data ---
const FALLBACK_PROFESSIONALS = [
    { id: "pro-01", name: "Kamal Ahmed", specialty: "AC Technician", rating: 4.9, jobs: 520, image: "https://randomuser.me/api/portraits/men/1.jpg", social: { facebook: "#", instagram: "#", twitter: "#" }},
    { id: "pro-02", name: "Rubina Akter", specialty: "Cleaner", rating: 4.8, jobs: 350, image: "https://randomuser.me/api/portraits/women/2.jpg", social: { facebook: "#", instagram: "#", twitter: null }},
    { id: "pro-03", name: "Jamil Hasan", specialty: "Plumber", rating: 4.9, jobs: 710, image: "https://randomuser.me/api/portraits/men/3.jpg", social: { facebook: "#", instagram: "#", twitter: "#" }},
    { id: "pro-04", name: "Sohail Rana", specialty: "Electrician", rating: 4.7, jobs: 420, image: "https://randomuser.me/api/portraits/men/4.jpg", social: { facebook: "#", instagram: "#", twitter: null }},
];

// Animated Job Counter
const AnimatedJobCount = ({ end, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return setCount(0);

        let startTime = null;
        const duration = 1200;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(percentage * end));

            if (percentage < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [isVisible, end]);

    return <p className="text-3xl font-bold text-secondary">{count}+</p>;
};

// Professional Card
const ProfessionalCard = ({ pro }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div
            key={pro.id}
            className="card bg-base-100 shadow-xl border-t-8 border-secondary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl 
                       flex-shrink-0 w-full sm:w-[250px] md:w-[270px] lg:w-[300px] snap-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <figure className="relative h-48 overflow-hidden">
                <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                            "https://placehold.co/600x400/0A2E5D/FFFFFF?text=Verified%20Pro";
                    }}
                />

                {/* Hover Overlay */}
                <div
                    className={`absolute inset-0 bg-primary/80 flex flex-col items-center justify-center transition-all duration-500 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <AnimatedJobCount end={pro.jobs} isVisible={isHovered} />
                    <p className="text-white mt-1">Successful Jobs</p>

                    <div className="flex items-center gap-1 mt-2 text-white">
                        <Star size={18} className="text-yellow-400 fill-yellow-400" />
                        <span>{pro.rating} Rating</span>
                    </div>

                    <div className="flex gap-4 mt-4">
                        {pro.social?.facebook && (
                            <a href={pro.social.facebook} className="text-white hover:text-secondary">
                                <Facebook size={28} />
                            </a>
                        )}
                        {pro.social?.instagram && (
                            <a href={pro.social.instagram} className="text-white hover:text-secondary">
                                <Instagram size={28} />
                            </a>
                        )}
                        {pro.social?.twitter && (
                            <a href={pro.social.twitter} className="text-white hover:text-secondary">
                                <Twitter size={28} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Verified Badge */}
                <div className="absolute top-0 left-0 bg-primary text-white px-3 py-2 rounded-br-xl flex items-center gap-1 text-sm">
                    <UserCheck size={16} />
                    Verified
                </div>
            </figure>

            <div className="card-body px-4 text-center">
                <h3 className="text-lg font-semibold text-primary">{pro.name}</h3>
                <p className="text-secondary">{pro.specialty}</p>
            </div>
        </div>
    );
};

// Main Component
const MeetProfessionals = () => {
    const [professionals, setProfessionals] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleViewAll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        fetch("/verifiedProfessionals.json")
            .then((res) => (res.ok ? res.json() : FALLBACK_PROFESSIONALS))
            .then((data) => {
                setProfessionals(data.length ? data : FALLBACK_PROFESSIONALS);
                setLoading(false);
            })
            .catch(() => {
                setProfessionals(FALLBACK_PROFESSIONALS);
                setLoading(false);
            });
    }, []);

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-primary mb-3">
                    Meet Our Verified Professionals
                </h2>
                <p className="text-gray-600 mb-10">
                    Skilled, background-checked, and highly rated experts at your service.
                </p>
            </div>

            {loading ? (
                <div className="text-center py-10">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : (
                <div className="w-full pb-6">
    <div
        className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-4
            px-4 md:px-6 lg:px-8 mx-auto max-w-7xl
        "
    >
        {professionals.map((pro) => (
            <ProfessionalCard key={pro.id} pro={pro} />
                        ))}

                        <div className="flex-shrink-0 w-6"></div>
                    </div>
                </div>
            )}

            <div className="text-center mt-10">
                <button
                    onClick={handleViewAll}
                    className="btn btn-outline btn-primary btn-lg"
                >
                    View All Experts <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default MeetProfessionals;
