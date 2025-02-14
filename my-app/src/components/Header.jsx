import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img 
          src="images/image.png" 
          alt="Logo" 
          className="h-10 w-10 border border-orange-500 rounded-full object-cover" 
        />
        <span className="text-2xl font-bold text-orange-500">AUTO</span>
        <span className="text-2xl font-bold text-gray-800">HERO</span>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:static md:flex md:items-center md:space-x-6 md:w-auto p-4 md:p-0`}
      >
        <Link to="/" className="block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0">
          Trang chủ
        </Link>
        <Link to="/rescue" className="block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0">
          Gọi Cứu Hộ
        </Link>
        <Link to="/about" className="block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0">
          About Me
        </Link>

        {/* Sign In & Sign Up Buttons - Hiện trên mobile */}
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/dang-nhap">
            <button className="flex items-center justify-center w-full space-x-1 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              <User size={16} />
              <span>Sign In</span>
            </button>
          </Link>
          <Link to="/dang-ki">
            <button className="flex items-center justify-center w-full space-x-1 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400">
              <Lock size={16} />
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </nav>

      {/* Sign In & Sign Up Buttons - Hiện trên Desktop */}
      <div className="hidden md:flex space-x-3">
        <Link to="/dang-nhap">
          <button className="flex items-center space-x-1 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            <User size={16} />
            <span>Sign In</span>
          </button>
        </Link>
        <Link to="/dang-ki">
          <button className="flex items-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400">
            <Lock size={16} />
            <span>Sign Up</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
