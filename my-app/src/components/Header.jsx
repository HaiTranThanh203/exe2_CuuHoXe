import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUserId(null);
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img
          src="images/image.png"
          alt="Logo"
          className="h-10 w-10 border border-orange-500 rounded-full object-cover"
        />
        <span className="text-2xl font-bold text-orange-500">AUTO</span>
        <span className="text-2xl font-bold text-gray-800">HERO</span>
      </div>

      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
      >
        <Link
          to="/"
          className="block md:inline-block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0"
        >
          Trang chủ
        </Link>
        <Link
          to="/rescue"
          className="block md:inline-block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0"
        >
          Gọi Cứu Hộ
        </Link>
        <Link
          to="/about"
          className="block md:inline-block text-gray-800 hover:text-orange-500 font-semibold py-2 md:py-0"
        >
          About Me
        </Link>
      </nav>

      <div className="hidden md:flex space-x-3">
        {userId ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
          >
            Logout
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </header>
  );
}
