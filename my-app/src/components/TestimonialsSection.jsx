import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection({ rescue_services }) {
  const allReviews = rescue_services.flatMap((service) =>
    service.reviews.map((review) => ({
      ...review,
      serviceName: service.name,
    }))
  );
 console.log(allReviews);
  return (
    <section className="bg-gray-900 text-white py-12 px-4 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">What People say about us?</h2>
        <p className="text-gray-300 mb-8">
          Discover what our customers think about us
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {allReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 relative transition duration-300 ease-in-out transform hover:bg-orange-100 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="font-bold text-xl">{review.username}</h3>
                  <p className="text-gray-500 text-sm">{review.comment}</p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">{review.comment}</p>

              <div className="flex items-center mt-4 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    fill={
                      index < Math.floor(review.rating)
                        ? "currentColor"
                        : "none"
                    }
                  />
                ))}
                <span className="ml-2 text-gray-700">
                  ({review.rating.toFixed(1)})
                </span>
              </div>

              <span className="absolute top-4 right-4 text-orange-300 text-4xl">
                “
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-4 h-2 bg-orange-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
