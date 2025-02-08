import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Company */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Company</h3>
          <ul className="space-y-2">
            <li>Our Company</li>
            <li>Shop Toyota</li>
            <li>Dreamsrentals USA</li>
            <li>Dreamsrentals Worldwide</li>
            <li>Dreamsrental Category</li>
          </ul>
        </div>

        {/* Vehicles Type */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Vehicles Type</h3>
          <ul className="space-y-2">
            <li>All Vehicles</li>
            <li>SUVs</li>
            <li>Trucks</li>
            <li>Cars</li>
            <li>Crossovers</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Campaigns</li>
            <li>Dreamsrental Dealers</li>
            <li>Deals and Incentive</li>
            <li>Financial Services</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Info</h3>
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="text-orange-500" />
            <span>+1 (888) 760 1940</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Mail className="text-orange-500" />
            <span>support@example.com</span>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="p-2 w-full rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 p-2 rounded-r-md">
              <Send className="text-white" size={20} />
            </button>
          </div>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">F</a>
            <a href="#" className="bg-red-500 text-white p-2 rounded-full">I</a>
            <a href="#" className="bg-blue-400 text-white p-2 rounded-full">T</a>
            <a href="#" className="bg-blue-800 text-white p-2 rounded-full">L</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2024 Dreams Rent. All Rights Reserved.
      </div>
    </footer>
  );
}
