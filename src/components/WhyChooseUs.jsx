import React, { useState, useEffect } from 'react';
import { ShieldCheck, Tags, Clock, Zap, ChevronRight } from 'lucide-react'; 

// For demonstration, embedding the data directly
const chooseUsData = [
  { 
    id: 1, 
    title: "Verified Professionals", 
    description: "Every expert is background-checked and trained for safety and quality.", 
    icon: ShieldCheck 
  },
  { 
    id: 2, 
    title: "Transparent Pricing", 
    description: "No hidden charges. You pay exactly what you see in the estimate.", 
    icon: Tags 
  },
  { 
    id: 3, 
    title: "On-Time Service", 
    description: "We value your time. Our experts ensure punctual arrival and completion.", 
    icon: Clock 
  },
  { 
    id: 4, 
    title: "24/7 Customer Support", 
    description: "Our dedicated support team is always ready to help you with any queries.", 
    icon: Zap 
  }
];

const WhyChooseUs = () => {
    // State to hold data if we fetch it later
    const [data, setData] = useState(chooseUsData); 
    const [loading, setLoading] = useState(false);

    // Future fetch logic (for when you move the data out of the component)
    useEffect(() => {
        // Here you would fetch('/whyChooseUs.json')...
    }, []);


    return (
        <section className="bg-base-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary mb-3">Why Choose Sheba 360 BD?</h2>
                    <p className="text-lg text-gray-600">We offer a guarantee of safety, quality, and punctuality.</p>
                </div>
                
                {/* FIX: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 and gap-8 ensure full responsiveness */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <div 
                            key={item.id} 
                            // Unified Card Styling: p-6 padding, and h-full flex layout
                            // Ensure h-full for consistent height across all 4 cards
                            className="text-center p-6 bg-white rounded-xl shadow-xl border-b-4 border-primary transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
                        >
                            {/* FIX: Flex column to ensure content centering regardless of height */}
                            <div className="flex flex-col h-full justify-start items-center">
                                {/* Icon (Navy Blue background with Golden Yellow icon) */}
                                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary text-secondary mb-4 shadow-lg">
                                    <item.icon size={30} strokeWidth={2.5} />
                                </div>
                                
                                <h3 className="text-xl font-bold text-primary mt-2 mb-3">{item.title}</h3>
                                {/* flex-grow ensures description takes up space, pushing CTA down if needed */}
                                <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Optional CTA */}
                 <div className="text-center mt-12">
                    <button className="btn btn-secondary btn-lg text-primary font-bold shadow-lg hover:opacity-90">
                        Book Your Trusted Service Today <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;