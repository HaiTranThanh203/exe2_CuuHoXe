import React from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Company */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Về Chúng Tôi
          </h3>
          <ul className="space-y-2">
            <li>Giới Thiệu Công Ty</li>
            <li>Dịch Vụ Cứu Hộ</li>
            <li>Sửa Chữa Xe</li>
            <li>Đội Ngũ Kỹ Thuật</li>
            <li>Liên Hệ</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Dịch Vụ</h3>
          <ul className="space-y-2">
            <li>Cứu Hộ Ô Tô</li>
            <li>Sửa Chữa Lưu Động</li>
            <li>Thay Lốp Xe</li>
            <li>Kéo Xe</li>
            <li>Nạp Ắc Quy</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Liên Kết Nhanh
          </h3>
          <ul className="space-y-2">
            <li>Tài Khoản Của Tôi</li>
            <li>Chính Sách Bảo Hành</li>
            <li>Hướng Dẫn Sử Dụng</li>
            <li>Điều Khoản Dịch Vụ</li>
            <li>Câu Hỏi Thường Gặp</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Thông Tin Liên Hệ
          </h3>
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="text-orange-500" />
            <span>+84 912 345 678</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Mail className="text-orange-500" />
            <span>hotro@cuuhoaxe.vn</span>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="p-2 w-full rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 p-2 rounded-r-md">
              <Send className="text-white" size={20} />
            </button>
          </div>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
              F
            </a>
            <a href="#" className="bg-red-500 text-white p-2 rounded-full">
              I
            </a>
            <a href="#" className="bg-blue-400 text-white p-2 rounded-full">
              T
            </a>
            <a href="#" className="bg-blue-800 text-white p-2 rounded-full">
              L
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2024 Cứu Hộ Xe. All Rights Reserved.
      </div>
    </footer>
  );
}
