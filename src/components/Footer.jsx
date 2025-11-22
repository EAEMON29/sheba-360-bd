import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Clock, MapPin, CheckCircle, X, Facebook, Instagram, Twitter } from 'lucide-react';

// --- Success Modal Component ---
const SubscriptionSuccessModal = ({ email, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, []);
    
    // Close modal function
    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
        onClose();
    };

    return (
        <dialog ref={modalRef} className="modal" onClose={onClose}>
            <div className="modal-box bg-white p-6 rounded-xl text-center shadow-2xl">
                <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Subscription Successful!</h3>
                <p className="text-gray-600 mb-4">
                    Thank you for joining the Sheba 360 BD family.
                </p>
                <p className="text-sm font-medium text-gray-700 p-2 bg-gray-100 rounded-lg">
                    A confirmation email has been sent to: <br/> 
                    <span className="font-bold text-secondary break-all">{email}</span>
                </p>
                <p className="text-xs text-red-500 mt-2">
                    *Note: This is a frontend demo. The actual email sending API is not connected.*
                </p>
                <div className="modal-action justify-center mt-6">
                    <button onClick={handleClose} className="btn btn-primary text-white">
                        <X size={18} /> Close
                    </button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={handleClose}>close</button>
            </form>
        </dialog>
    );
};


const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            console.log(`[API Call Simulation] Sending subscription request for: ${email}`);
            
            // Simulating API call success:
            setIsSubscribed(true); // Open the success modal
            
            // Clear input after simulation
            setEmail('');
        }
    };

    // FIX: Smooth Scroll Handler for Quick Links
    const handleLinkClick = (targetSection) => {
        // Approximate pixel distance for each major section based on common layouts
        let scrollY = 0;
        switch (targetSection) {
            case 'services':
                scrollY = 400; // Just after Hero Section
                break;
            case 'safety':
                scrollY = 2800; // Below Meet Professionals/Safety Priority
                break;
            case 'about':
                scrollY = 3500; // Approximate position of the About Section
                break;
            case 'faq':
                scrollY = 5000; // Just before FAQ starts
                break;
            default:
                scrollY = 0; // Top of the page
        }

        window.scrollTo({ top: scrollY, behavior: 'smooth' });
        console.log(`Scrolling to ${targetSection} (${scrollY}px)`);
    };
    
    // FIX: Call Hotline functionality
    const handleCallUs = () => {
        window.location.href = 'tel:12345678';
        console.log("Attempting to call 12345678");
    };


    return (
        <footer className="bg-primary text-gray-300 pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
                    
                    {/* Column 1: Brand & Social */}
                    <div>
                        <h3 className="text-3xl font-extrabold text-white mb-4">
                            Sheba 360 BD
                        </h3>
                        <p className="text-sm mb-4">
                            Your trusted partner for all home service needs. Quick, verified, and reliable service at your doorstep.
                        </p>
                        
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-300 hover:text-secondary transition duration-300" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-secondary transition duration-300" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-secondary transition duration-300" aria-label="Twitter">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links & Support */}
                    <div>
                        <h4 className="text-xl font-bold text-secondary mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {/* FIX: Using onClick handler for smooth scrolling */}
                            <li><a href="#" onClick={() => handleLinkClick('services')} className="hover:text-white transition duration-300">Popular Services</a></li>
                            <li><a href="#" onClick={() => handleLinkClick('safety')} className="hover:text-white transition duration-300">Safety Policy</a></li>
                            <li><a href="#" onClick={() => handleLinkClick('about')} className="hover:text-white transition duration-300">Our Story</a></li>
                            <li><a href="#" onClick={() => handleLinkClick('faq')} className="hover:text-white transition duration-300">FAQ</a></li>
                        </ul>
                    </div>
                    
                    {/* Column 3: Contact & Working Hours (Kaj korar Somoy) */}
                    <div>
                        <h4 className="text-xl font-bold text-secondary mb-4">Working Hours</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Clock size={16} className="flex-shrink-0" /> Service Availability: 
                            </li>
                            <li className="ml-6">
                                **Urgent/Repair:** 24/7 (Hotline)
                            </li>
                            <li className="ml-6">
                                **Standard Booking:** 9 AM - 8 PM
                            </li>
                            <li className="flex items-center gap-2 mt-4">
                                <MapPin size={16} className="flex-shrink-0" /> Dhaka Coverage (All Zones)
                            </li>
                        </ul>
                        <h4 className="text-xl font-bold text-secondary mt-6 mb-4">Hotline</h4>
                         <p className="flex items-center text-lg font-bold text-white cursor-pointer" onClick={handleCallUs}>
                            <Phone size={18} className="text-secondary mr-2" /> 1234 5678
                        </p>
                    </div>

                    {/* Column 4: Newsletter & Contact Form */}
                    <div>
                        <h4 className="text-xl font-bold text-secondary mb-4">Stay Updated</h4>
                        <p className="text-sm mb-4">
                            Get exclusive offers and new service alerts directly to your inbox.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered w-full rounded-lg bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-secondary focus:ring-secondary"
                                required
                            />
                            <button type="submit" className="btn btn-secondary text-primary font-bold hover:opacity-90 transition duration-300">
                                <Mail size={20} /> Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="text-center pt-6 text-sm text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Sheba 360 BD. All Rights Reserved.
                    </p>
                    <p className="mt-1">
                        Made By EA EMON
                    </p>
                </div>
            </div>
            
            {/* Success Modal */}
            {isSubscribed && (
                <SubscriptionSuccessModal 
                    email={email} 
                    onClose={() => setIsSubscribed(false)}
                />
            )}
        </footer>
    );
};

export default Footer;