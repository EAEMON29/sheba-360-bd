import React, { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';

// For demonstration, embedding a fallback data set
const FALLBACK_AREAS = [
    { id: 1, areaName: "Gulshan" },
    { id: 2, areaName: "Banani" },
    { id: 3, areaName: "Dhanmondi" },
    { id: 4, areaName: "Mirpur 10" },
    { id: 5, "areaName": "Uttara" },
    { id: 6, "areaName": "Mohakhali" },
    { id: 7, "areaName": "Motijheel" },
    { id: 8, "areaName": "Badda" }
];

const OurServiceAreas = () => {
    const [areas, setAreas] = useState(FALLBACK_AREAS);
    const [searchQuery, setSearchQuery] = useState('');
    const [isAvailable, setIsAvailable] = useState(null); // null: initial, true: available, false: unavailable

    // 1. Data Fetching
    useEffect(() => {
        fetch("/serviceAreas.json")
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setAreas(data);
                }
            })
            .catch(error => {
                console.warn("Could not fetch serviceAreas.json. Using fallback data.", error);
            });
    }, []);

    // 2. Search Logic
    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.trim().toLowerCase();
        
        if (query.length < 3) {
            setIsAvailable(null);
            return;
        }

        const found = areas.some(area => 
            area.areaName.toLowerCase().includes(query)
        );
        
        setIsAvailable(found);
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary mb-3">Our Service Areas</h2>
                    <p className="text-lg text-gray-600">We proudly serve all major areas in Dhaka City.</p>
                </div>

                {/* --- Search Bar Section (Customized to match Hero Section style) --- */}
                <div className="max-w-2xl mx-auto mb-10"> {/* Max-width increased for better styling */}
                    <form onSubmit={handleSearch} className="flex w-full bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-2 md:p-3 space-x-2">
                        <input
                            type="text"
                            placeholder="Enter your area (e.g., Mirpur 10) to check availability"
                            className="input input-ghost w-full text-lg text-primary focus:outline-none bg-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="btn btn-lg text-primary rounded-xl px-8 font-bold shadow-md hover:opacity-90">
                            <Search size={24} />
                            <span className="hidden sm:inline">Check</span>
                        </button>
                    </form>

                    {/* --- Search Result Display --- */}
                    {isAvailable !== null && (
                        <div className={`mt-4 p-3 rounded-xl font-semibold shadow-md ${
                            isAvailable ? 'bg-green-100 text-green-700 border border-green-400' : 'bg-red-100 text-red-700 border border-red-400'
                        }`}>
                            {isAvailable ? (
                                <p>✅ Great News! We serve the area: <span className="font-bold">{searchQuery}</span></p>
                            ) : (
                                <p>❌ Unfortunately, we don't currently serve the area: <span className="font-bold">{searchQuery}</span>. Contact us for bulk inquiry.</p>
                            )}
                        </div>
                    )}
                </div>

                {/* --- Area List Display --- */}
                <div className="max-w-4xl mx-auto mt-16">
                    <h3 className="text-2xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
                        <MapPin size={24} className="text-secondary" /> Key Service Zones
                    </h3>
                    
                    {/* Area Tags/Badges - FIX: rounded-full added */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {areas.slice(0, 20).map((area) => (
                            <div key={area.id} className="badge badge-lg bg-gray-200 text-gray-700 p-4 font-medium transition duration-300 hover:bg-primary hover:text-white cursor-default rounded-full">
                                {area.areaName}
                            </div>
                        ))}
                        {areas.length > 20 && (
                             <div className="badge badge-lg bg-secondary text-primary p-4 font-bold rounded-full">
                                + {areas.length - 20} More Areas
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServiceAreas;