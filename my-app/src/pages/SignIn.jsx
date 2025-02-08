import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <img src="images/image.png" alt="Logo" className="h-12 mb-4" />
      <h1 className="text-2xl font-bold text-orange-500">AUTO <span className="text-gray-800">HERO</span></h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6">
        <Link to="/" className="text-sm text-gray-500 hover:text-orange-500 mb-4 block">
          ← Back To Home
        </Link>

        <h2 className="text-2xl font-bold mb-2">Sign In</h2>
        <p className="text-gray-500 text-sm mb-4">We'll send a confirmation code to your email.</p>

        <form>
          <label className="block text-sm font-semibold mb-1">Email <span className="text-red-500">*</span></label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4" 
            placeholder="Enter your email" 
            required
          />

          <label className="block text-sm font-semibold mb-1">Mật Khẩu <span className="text-red-500">*</span></label>
          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Enter your password" 
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Link to="/forgot-password" className="text-red-500 text-sm mt-2 inline-block hover:underline">
            Quên Mật Khẩu?
          </Link>

          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">Ghi Nhớ</label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gray-800 text-white py-2 rounded-md mt-4 hover:bg-gray-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
