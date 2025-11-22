import React from 'react';
import { ClipboardList, Calendar, CheckCircle, CreditCard } from 'lucide-react';

// For demonstration, embedding the How It Works data directly
const steps = [
    { 
        id: 1, 
        title: "Select Your Service", 
        description: "Browse our list of services and choose the one that suits your needs.", 
        icon: ClipboardList 
    },
    { 
        id: 2, 
        title: "Book Schedule", 
        description: "Pick a convenient date and time for our verified professional to visit.", 
        icon: Calendar 
    },
    { 
        id: 3, 
        title: "Get Expert Service", 
        description: "A skilled and background-checked professional will arrive on time and complete the job perfectly.", 
        icon: CheckCircle 
    },
    { 
        id: 4, 
        title: "Pay Easily", 
        description: "Pay securely online or via cash after you are fully satisfied with the service.", 
        icon: CreditCard 
    }
];

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-primary mb-3">How Sheba 360 BD Works</h2>
                    <p className="text-lg text-gray-600">A simple, 4-step process to get reliable home services.</p>
                </div>
                
                <div className="relative">
                    {/* Horizontal Line Connector (for Desktop View) */}
                    <div className="hidden lg:block absolute inset-0 h-1 bg-gray-300 top-1/2 transform -translate-y-1/2 mx-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative z-10 text-center flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.03] border-t-4 border-secondary">
                                
                                {/* Step Icon (Navy Blue Circle with Golden Yellow icon) */}
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-secondary mb-4 shadow-xl">
                                    <step.icon size={30} strokeWidth={2.5} />
                                </div>
                                
                                {/* Step Number (Circular badge, for visual clarity) */}
                                <div className="absolute top-0 right-0 transform -translate-y-1/2 badge badge-secondary font-bold text-primary text-sm">
                                    Step {step.id}
                                </div>

                                <h3 className="text-xl font-bold text-primary mt-2 mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;