import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        // Loop 2 বার করলে smooth infinite হয়
        const looped = [...data, ...data];
        setReviews(looped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">
        What Our Customers Say
      </h2>

      {loading ? (
        <div className="text-center">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      ) : (
        <div className="overflow-hidden w-full">
          <div className="marquee gap-6 px-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 w-[300px] flex-shrink-0 border-l-4 border-primary"
              >
                <Quote className="text-primary mb-3" />

                <p className="text-gray-700 italic mb-4">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3 mt-4 border-t pt-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-primary">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mt-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
