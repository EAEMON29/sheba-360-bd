import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyServices = [
  { id: "s1", title: "AC Service", desc: "AC repair, gas refill, installation", price: 1200, img: "https://placehold.co/600x400" },
  { id: "s2", title: "Home Cleaning", desc: "Full home cleaning", price: 800, img: "https://placehold.co/600x400" },
  { id: "s3", title: "Plumbing", desc: "Leak repair, pipe installation", price: 900, img: "https://placehold.co/600x400" },
  { id: "s4", title: "Electrician", desc: "Wiring, fittings, troubleshooting", price: 750, img: "https://placehold.co/600x400" },
];

function ServiceCard({ s, onBook }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <img src={s.img} alt={s.title} className="h-44 w-full object-cover rounded-md mb-4"/>
      <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
      <p className="text-sm text-gray-500 flex-1 mt-2">{s.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-lg">৳{s.price}</span>
        <button onClick={() => onBook(s)} className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
}

export default function Menu() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // আপনি চাইলে এখানে fetch("/Service.json") করবেন
    setServices(dummyServices);
  }, []);

  const handleBook = (service) => {
    // আপনি এখানে cart context addToCart বা navigate("/cart") করতে পারেন
    // For now navigate to /contact prefill? We'll just navigate to /cart or show toast
    // navigate("/cart");
    alert(`Booked: ${service.title} — integrate with Cart to store this.`);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Our Services</h2>
          <p className="text-gray-600 mt-2">Choose from a wide range of home services — verified professionals at your door.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <ServiceCard key={s.id} s={s} onBook={handleBook} />
          ))}
        </div>
      </div>
    </section>
  );
}
