import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rabien Ustoc',
    location: 'New York, USA',
    image: 'https://via.placeholder.com/50',
    rating: 5.0,
    comment:
      'Renting a car from Dreams rent made my vacation so much smoother! The process was quick and easy, the car was clean and well-maintained, and the staff were friendly and helpful.',
  },
  {
    id: 2,
    name: 'Valerie L. Ellis',
    location: 'Las Vegas, USA',
    image: 'https://via.placeholder.com/50',
    rating: 5.0,
    comment:
      "As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">What People say about us?</h2>
        <p className="text-gray-300 mb-8">
          Discover what our customers have think about us
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 relative transition duration-300 ease-in-out transform hover:bg-orange-100 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">{testimonial.comment}</p>

              <div className="flex items-center mt-4 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
                <span className="ml-2 text-gray-700">({testimonial.rating})</span>
              </div>

              <span className="absolute top-4 right-4 text-orange-300 text-4xl">“</span>
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
