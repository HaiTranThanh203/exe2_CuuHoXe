import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Menu } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-orange-500">DREAMS</span>
        <span className="text-2xl font-bold text-gray-800">RENT</span>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Navigation Menu */}
      <nav 
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
      >
        <Link to="/" className="block md:inline-block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0">
          Trang chủ
        </Link>
        <Link to="/rescue" className="block md:inline-block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0">
          Gọi Cứu Hộ
        </Link>
        <Link to="/about" className="block md:inline-block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0">
          About Me
        </Link>
      </nav>

      {/* Sign In & Sign Up Buttons */}
      <div className="hidden md:flex space-x-3">
        <button className="flex items-center space-x-1 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          <User size={16} />
          <span>Sign In</span>
        </button>
        <button className="flex items-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400">
          <Lock size={16} />
          <span>Sign Up</span>
        </button>
      </div>
    </header>
  );
}
