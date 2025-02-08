import React from 'react';
import { CheckCircle, MapPin, Car, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white to-orange-500 p-6 md:p-16">
        <div className="max-w-xl">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md w-fit">
            <CheckCircle className="text-yellow-500" />
            <span className="text-sm font-medium">100% Trusted car rental platform in the World</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-orange-500">Find Your Best</span> <br />
            <span className="text-gray-900">Dream Car for Rental</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Experience the ultimate in comfort, performance, and sophistication with our luxury car rentals.
          </p>
          <button className="mt-6 px-6 py-3 bg-white border-2 border-black rounded-md hover:bg-black hover:text-white transition">
            View all Cars <ArrowRight className="inline ml-2" size={16} />
          </button>
        </div>

        <div className="mt-8 md:mt-0">
          <img src="images/logo.png" alt="Car" className="w-full max-w-md" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-600 mt-2">
          Booking a car rental is a straightforward process that typically involves the following steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <MapPin className="text-teal-600 w-16 h-16 p-4 border-2 border-dashed rounded-full" />
            <h3 className="font-semibold text-xl mt-4">1. Choose Date & Locations</h3>
            <p className="text-gray-600 mt-2">
              Determine the date & location for your car rental.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Car className="text-orange-500 w-16 h-16 p-4 border-2 border-dashed rounded-full" />
            <h3 className="font-semibold text-xl mt-4">2. Pick-Up Locations</h3>
            <p className="text-gray-600 mt-2">
              Check the availability of your desired vehicle type.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="text-black w-16 h-16 p-4 border-2 border-dashed rounded-full" />
            <h3 className="font-semibold text-xl mt-4">3. Book your Car</h3>
            <p className="text-gray-600 mt-2">
              Proceed to make a reservation with your details.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
        <p className="text-center text-gray-600 mt-2">
          We are innovative and passionate about the work we do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <div className="bg-gray-800 text-white w-16 h-16 mx-auto rounded-lg flex items-center justify-center">
              <ArrowRight size={28} />
            </div>
            <h3 className="font-bold text-xl mt-4">Easy & Fast Booking</h3>
            <p className="text-gray-600 mt-2">
              Completely carinate a business testing process with customer service.
            </p>
          </div>

          <div className="bg-black text-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-white text-black w-16 h-16 mx-auto rounded-lg flex items-center justify-center">
              <CheckCircle size={28} />
            </div>
            <h3 className="font-bold text-xl mt-4">Many Pickup Locations</h3>
            <p className="text-gray-400 mt-2">
              Dynamically target testing procedures through effective methods.
            </p>
          </div>

          <div className="bg-orange-500 text-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-white text-orange-500 w-16 h-16 mx-auto rounded-lg flex items-center justify-center">
              <User size={28} />
            </div>
            <h3 className="font-bold text-xl mt-4">Customer Satisfaction</h3>
            <p className="text-gray-100 mt-2">
              Seamlessly revolutionize unique portals for customer collaboration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
