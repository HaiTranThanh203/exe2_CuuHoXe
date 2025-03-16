import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn({ services }) {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userId", 1);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <img src="images/image.png" alt="Logo" className="h-12 mb-4" />
      <h1 className="text-2xl font-bold text-orange-500">
        AUTO <span className="text-gray-800">HERO</span>
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6">
        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-orange-500 mb-4 block"
        >
          ← Back To Home
        </Link>

        <h2 className="text-2xl font-bold mb-2">Sign In</h2>
        <p className="text-gray-500 text-sm mb-4">
          Vui lòng nhập số điện thoại và mật khẩu để đăng nhập.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold mb-1">
            Số Điện Thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
            placeholder="Nhập số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label className="block text-sm font-semibold mb-1">
            Mật Khẩu <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button
            className="w-full bg-gray-800 text-white py-2 rounded-md mt-4 hover:bg-gray-700 transition duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
