import React, { useState, useEffect, useRef, useContext } from "react";
import { Star, Clock, Briefcase, Tag, X } from "lucide-react";
import { CartContext } from "../context/CartContext";

// ----------------------------------------------------------------
// CATEGORY NAVBAR
// ----------------------------------------------------------------
const CategoriesNavbar = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`btn btn-sm md:btn-md rounded-full px-6 transition duration-300 ${
            activeCategory === cat
              ? "btn-primary text-white shadow-lg"
              : "btn-outline btn-primary hover:bg-primary hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

// ----------------------------------------------------------------
// SERVICE CARD
// ----------------------------------------------------------------
const ServiceCard = ({ service, onClick }) => (
  <div
    className="card  shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition-all duration-300 border border-gray-100 group bg-base-100"
    onClick={() => onClick(service)}
  >
    <figure className="relative h-48 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {service.discount && (
        <div className="absolute top-3 right-3 badge bg-indigo-400 font-bold shadow-md text-white">
          {service.discount}
        </div>
      )}
    </figure>

    <div className="card-body p-6">
      <h3 className="font-bold text-lg text-black line-clamp-1">
        {service.title}
      </h3>

      <div className="badge badge-outline text-xs text-indigo-600">{service.category}</div>

      <div className="flex justify-between mt-4">
        <div>
          <p className="text-2xl font-bold text-two text-indigo-400">৳ {service.price}</p> 
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />{" "}
            {service.rating} ({service.reviewCount})
          </p>
        </div>
        <button className="btn bg-indigo-600 text-white btn-sm  ">Book Now</button>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------
// MODAL
// ----------------------------------------------------------------
const ServiceDetailsModal = ({ service, onClose, handleAddToCart }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  if (!service) return null;

  return (
    <dialog ref={modalRef} className="modal text-blue-900" onClose={onClose}>
      <div className="modal-box w-11/12 max-w-3xl p-0 overflow-hidden rounded-2xl  ">
        <button
          onClick={() => {
            modalRef.current.close();
            onClose();
          }}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10 text-blue-900"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left Image */}
          <div className="lg:w-1/2 relative ">
            <img src={service.image} alt={service.title} className="w-full" />
          </div>

          {/* Right Details */}
          <div className="lg:w-1/2 p-6 space-y-4">
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600 italic">
              "{service.shortDescription}"
            </p>

            <div className="divider text-blue-900">Details</div>

            <p className="text-sm flex items-center gap-2  font-semibold text-blue-900">
              <Clock size={16} /> Duration: {service.duration}
            </p>

            <p className="text-sm flex items-center gap-2  font-semibold text-blue-900">
              <Tag size={16} /> Discount: {service.discount || "No offer"}
            </p>

            <h4 className="font-bold text-sm  mt-3 text-blue-900">
              Features:
            </h4>
            <ul className="list-disc ml-5 text-sm text-blue-900">
              {service.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="modal-action">
              <button
                onClick={() => handleAddToCart(service)}
                className="bg-indigo-600 btn text-white font-bold w-full"
              >
                Book This Service Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

// ----------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------
export default function ServiceGallery() {
  const { cart, setCart } = useContext(CartContext);

  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // --------------------------------------------------------------
  // FIXED: handleAddToCart inside component + using context
  // --------------------------------------------------------------
  const handleAddToCart = (service) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === service.id);

      if (exists) {
        return prev.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...service, quantity: 1 }];
    });

    alert("Service added to cart!");
  };

  // --------------------------------------------------------------
  useEffect(() => {
    fetch("/Service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setFilteredServices(data);
      });
  }, []);

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setFilteredServices(cat === "All" ? services : services.filter((s) => s.category === cat));
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-base-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Our Popular Services
        </h2>

        <CategoriesNavbar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryClick}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      {isModalOpen && selectedService && (
        <ServiceDetailsModal
          service={selectedService}
          onClose={() => setIsModalOpen(false)}
          handleAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
}
