import React, { useState, useEffect, useRef } from 'react';
import { Star, Clock, Briefcase, Tag, X } from 'lucide-react'; // Icon-er jonno

// --- Integrated Component: CategoriesNavbar ---
const CategoriesNavbar = ({ categories, activeCategory, onSelectCategory }) => {
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {(categories || []).map((cat) => (
          <button
            key={cat} 
            onClick={() => onSelectCategory(cat)}
            className={`btn btn-sm md:btn-md rounded-full px-6 transition duration-300 ${
              activeCategory === cat 
                ? 'btn-primary text-white shadow-lg' // Navy Blue filled button
                : 'btn-outline btn-primary hover:bg-primary hover:text-white' // Navy Blue border, White background
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    );
};

// --- Utility component for Card (Gallery Item) ---
const ServiceCard = ({ service, onClick }) => {
    // Component implementation for a single service card
    return (
        // FIX: Added onClick handler to open modal and enhanced hover effect
        <div 
            key={service.id} 
            className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition-all duration-300 border border-gray-100 group"
            onClick={() => onClick(service)} // Card e click korle modal khulbe
        >
            <figure className="relative h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {service.discount && (
                <div className="absolute top-3 right-3 badge badge-secondary font-bold shadow-md">
                  {service.discount}
                </div>
              )}
            </figure>
            <div className="card-body p-6">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-primary line-clamp-1" title={service.title}>
                  {service.title}
                </h3>
              </div>
              <div className="badge badge-outline text-xs">{service.category}</div>
              
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-2xl font-bold text-secondary">৳ {service.price}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Star size={12} className="text-yellow-500 fill-yellow-500"/> {service.rating} ({service.reviewCount})
                  </p>
                </div>
                <button className="btn btn-primary btn-sm">Book Now</button>
              </div>
            </div>
        </div>
    );
};

// --- New Modal Component (Mini Window) ---
const ServiceDetailsModal = ({ service, onClose }) => {
    const modalRef = useRef(null);

    // useEffect hook to show the modal when the component is mounted
    useEffect(() => {
        // daisyUI's modal logic
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, []);
    
    // Close modal function including daisyUI's close method
    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
        onClose();
    };

    if (!service) return null;

    return (
        // daisyUI Modal component structure
        <dialog ref={modalRef} className="modal" onClose={onClose}>
            <div className="modal-box w-11/12 max-w-3xl p-0 overflow-hidden rounded-2xl">
                
                {/* Close Button on Top Right */}
                <button 
                    onClick={handleClose} 
                    className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10 text-white hover:text-secondary"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                {/* Modal Content */}
                <div className="flex flex-col lg:flex-row">
                    {/* Left: Image & Info */}
                    <div className="lg:w-1/2 relative">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover lg:h-auto"
                        />
                         <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                            <p className="text-sm text-gray-300 flex items-center gap-2 mt-1">
                                <Star size={14} className="text-yellow-400 fill-yellow-400"/> {service.rating} ({service.reviewCount} Reviews)
                            </p>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:w-1/2 p-6 space-y-4">
                        <p className="text-gray-600 italic">"{service.shortDescription}"</p>
                        
                        <div className="divider my-2">Service Details</div>

                        {/* Key Features */}
                        <div className="space-y-2">
                            <p className="text-sm flex items-center gap-2 text-primary font-semibold">
                                <Clock size={16} /> Duration: {service.duration}
                            </p>
                            <p className="text-sm flex items-center gap-2 text-primary font-semibold">
                                <Tag size={16} /> Discount: {service.discount || 'No current offer'}
                            </p>
                        </div>

                        {/* Bullet Points */}
                        <div className="pt-2">
                            <h4 className="font-bold text-sm text-primary mb-2 flex items-center gap-2"><Briefcase size={16} /> Key Features Included:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {service.features?.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Button */}
                        <div className="modal-action mt-6">
                            <button className="btn btn-secondary text-primary font-bold w-full">Book This Service Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Click outside to close */}
            <form method="dialog" className="modal-backdrop">
                <button onClick={handleClose}>close</button>
            </form>
        </dialog>
    );
};


export default function ServiceGallery() {

    const [services, setServices] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredServices, setFilteredServices] = useState([]);
    
    // NEW state for Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);


    useEffect(() => {
        // Data fetching from public/Service.json
        fetch('/Service.json') 
        .then(res => res.json())
        .then(data => {
            setServices(data);
            setFilteredServices(data); // Initially show all services
        })
        .catch(error => {
            console.error("Error fetching services from Service.json:", error);
            // Handle error state
        });
    }, []);

    const categories = ["All", ...new Set(services?.map(s => s.category) || [])];
    
    // Function to handle category selection and filtering
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredServices(services);
        } else {
            const filtered = services.filter(service => service.category === category);
            setFilteredServices(filtered);
        }
    };

    // Function to handle card click and open modal
    const handleCardClick = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    return (
        <section className="bg-base-100 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-2">Our Popular Services</h2>
                    <p className="text-gray-500">Fast, Verified, and Reliable Home Service Solutions</p>
                </div>
            
                <CategoriesNavbar
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={handleCategoryClick}
                />

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredServices.length > 0 ? (
                        filteredServices.map(service => (
                            <ServiceCard 
                                key={service.id} 
                                service={service} 
                                onClick={handleCardClick} // Modal open functionality added here
                            />
                        ))
                    ) : filteredServices.length === 0 && services.length > 0 ? (
                         <div className="col-span-full text-center py-10">
                            <h3 className="text-xl text-gray-500">No services found in the {activeCategory} category.</h3>
                         </div>
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <h3 className="text-xl text-gray-500">Loading services...</h3>
                            <span className="loading loading-spinner loading-lg text-primary mt-4"></span>
                        </div>
                    )}
                </div>
            </div>
            
            {/* 3. Render Modal conditionally */}
            {isModalOpen && selectedService && (
                <ServiceDetailsModal 
                    service={selectedService} 
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </section>
    );
}