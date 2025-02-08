import React from 'react';
import { Link } from 'react-router-dom'; // Import Link để điều hướng


export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center py-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Tìm kiếm cứu hộ xe tốt nhất cho bạn!</h1>
        <p className="text-white mt-4">AUTO HERO ĐỒNG HÀNH VỚI BẠN TRÊN MỌI NẺO ĐƯỜNG.</p>
        
        {/* Thêm Link để điều hướng đến trang Rescue */}
        <Link to="/rescue">
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            TÌM CỨU HỘ NGAY
          </button>
        </Link>
      </div>
      
    </section>
  );
}
