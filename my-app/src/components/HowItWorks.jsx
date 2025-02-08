import React from 'react';
import { MapPin, Calendar, Car } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Calendar size={32} className="text-orange-500" />,
      title: "Choose Date & Locations",
      description: "Determine the date & location for your car rental.",
    },
    {
      icon: <MapPin size={32} className="text-orange-500" />,
      title: "Pick-Up Locations",
      description: "Check the availability of your desired vehicle type.",
    },
    {
      icon: <Car size={32} className="text-orange-500" />,
      title: "Book your Car",
      description: "Proceed to make a reservation with your details.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-600 mt-2">Booking a car rental is a straightforward process that typically involves the following steps</p>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
