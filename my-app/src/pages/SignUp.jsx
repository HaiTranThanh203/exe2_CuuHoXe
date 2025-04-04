import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !phone || !password) {
      setError("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    navigate("/dang-nhap");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <Link
          to="/"
          className="text-sm text-gray-600 hover:underline mb-4 inline-block"
        >
          ← Back To Home
        </Link>
        <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
        <p className="text-gray-500 mb-4">
          Vui lòng nhập thông tin để tạo tài khoản.
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold text-gray-700">
            Username *
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your username"
            required
          />

          <label className="block mt-4 text-sm font-semibold text-gray-700">
            Số Điện Thoại *
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your phone number"
            required
          />

          <label className="block mt-4 text-sm font-semibold text-gray-700">
            Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            className="w-full bg-gray-800 text-white py-2 rounded-md mt-4 hover:bg-gray-700 transition duration-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
