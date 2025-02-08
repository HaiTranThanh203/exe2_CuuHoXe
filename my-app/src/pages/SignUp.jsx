import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <Link to="/" className="text-sm text-gray-600 hover:underline mb-4 inline-block">
          ← Back To Home
        </Link>
        <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
        <p className="text-gray-500 mb-6">We'll send a confirmation code to your email.</p>

        <form>
          <label className="block text-sm font-semibold text-gray-700">Username *</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            placeholder="Enter your username" 
            required 
          />

          <label className="block mt-4 text-sm font-semibold text-gray-700">Email *</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
            placeholder="Enter your email" 
            required 
          />

          <label className="block mt-4 text-sm font-semibold text-gray-700">Password *</label>
          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Enter your password" 
              required 
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
