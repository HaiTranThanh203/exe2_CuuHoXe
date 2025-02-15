import React from "react";
import { Link } from "react-router-dom"; // Import Link

const RescueServiceCard = ({ service }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
      <img className="rounded-t-lg w-full h-48 object-cover" src={service.image_url} alt={service.name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{service.name}</h5>
        <p className="mb-3 font-normal text-gray-700">
          {service.address.street}, {service.address.ward}, {service.address.district}, {service.address.city}
        </p>
        <p className="mb-3 font-normal text-gray-700">SĐT: {service.phone}</p>
        <p className="mb-3 font-normal text-yellow-500">Đánh giá: {service.average_rating} ★</p>

        {/* Nút gọi điện thoại */}
        <a href={`tel:${service.phone}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Liên Hệ Qua Điện Thoại
        </a>

        {/* Nút liên hệ qua Zalo */}
        <a href={`https://zalo.me/${service.phone}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
          Liên Hệ Qua Zalo
        </a>

        {/* Nút xem chi tiết sử dụng Link */}
        <Link to={`/rescue/${service.id}`} className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600">
          Xem Chi Tiết
        </Link>
      </div>
    </div>
  );
};

export default RescueServiceCard;
