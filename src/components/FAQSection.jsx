import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronRight, MessageSquare, Phone } from 'lucide-react';

// For demonstration, embedding a fallback data set
const FALLBACK_FAQ = [
    { id: 1, question: "How do I book a service?", answer: "You can book directly from our website or app by selecting the service and time slot." },
    { id: 2, question: "Are your professionals trusted and verified?", answer: "Yes, all our service providers go through a strict background check, including police verification, and are professionally trained." },
    { id: 3, question: "Do I have to pay in advance for the service?", answer: "No, you can choose to pay Cash on Delivery (COD) or pay online securely after the work is done." },
    { id: 4, question: "What is your service warranty policy?", answer: "We offer a 7-day service warranty on most services. If you are not satisfied, we will re-do the service free of charge." },
];

const FAQSection = () => {
    const [faqData, setFaqData] = useState(FALLBACK_FAQ);
    const [loading, setLoading] = useState(true);
    
    // Data Fetching
    useEffect(() => {
        fetch("/faq.json")
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setFaqData(data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.warn("Could not fetch faq.json. Using fallback data.", error);
                setLoading(false);
            });
    }, []);

    // FIX 1: Send Message functionality
    const handleContactUs = () => {
        // Opens the default email client with the specified address
        window.location.href = 'mailto:sheba360bd@service.com';
        console.log("Attempting to send email to sheba360bd@service.com");
    };

    // FIX 2: Call Hotline functionality
    const handleCallUs = () => {
        // Opens the phone dialer with the specified number
        window.location.href = 'tel:12345678';
        console.log("Attempting to call 12345678");
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">Quick answers to the most common queries about our services.</p>
                </div>
                
                {loading ? (
                    <div className="text-center py-10">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {faqData.map((item) => (
                            // daisyUI Collapse component (Accordion)
                            <div key={item.id} className="collapse collapse-arrow bg-white shadow-lg rounded-xl border border-primary/20 transition duration-300 hover:shadow-xl">
                                
                                {/* Question/Title */}
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title text-xl font-bold text-primary peer-checked:bg-primary peer-checked:text-white transition duration-300 flex items-center gap-4">
                                    <HelpCircle size={24} className="flex-shrink-0 text-secondary peer-checked:text-white transition duration-300" />
                                    {item.question}
                                </div>
                                
                                {/* Answer Content */}
                                <div className="collapse-content bg-white text-gray-700 py-4 px-6 border-t border-gray-200">
                                    <p className="pl-8">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                {/* Enhanced CTA to Contact Us */}
                <div className="text-center mt-12 p-8 bg-primary/5 rounded-xl border border-primary/10 shadow-inner">
                    <h3 className="text-2xl font-bold text-primary mb-3">Still need help?</h3>
                    <p className="text-gray-700 mb-6">Our dedicated support team is available 24/7 to assist you with complex inquiries or urgent bookings.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                            onClick={handleContactUs} // FIX: Updated onClick to send email
                            className="btn btn-primary btn-lg text-white font-bold shadow-lg hover:bg-primary/90 transition duration-300 flex-grow sm:flex-grow-0"
                        >
                            <MessageSquare size={20} /> Send Us a Message
                        </button>
                        <button 
                            onClick={handleCallUs} // FIX: Updated onClick to call
                            className="btn btn-outline btn-secondary btn-lg text-primary font-bold hover:bg-secondary transition duration-300 flex-grow sm:flex-grow-0"
                        >
                            <Phone size={20} /> Call Our Hotline
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;