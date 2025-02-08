import React, { useState } from "react";
import RescueServiceCard from "../components/RescueServiceCard";

const LocationFilter = ({ services }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc danh sách dựa trên searchTerm, chỉ lấy tối đa 6 dịch vụ
  const filteredServices = searchTerm
    ? services
        .filter((service) =>
          Object.values(service.address).some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
        .slice(0, 6) // Giới hạn kết quả tìm kiếm tối đa 5 dịch vụ
    : services.slice(0, 6); // Mặc định hiển thị 5 dịch vụ đầu tiên

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Tìm kiếm theo vị trí
      </h2>

      {/* Input Search */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Nhập thành phố, quận, phường, địa chỉ..."
          className="w-full px-4 py-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />
        <span className="absolute left-3 top-3 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            />
          </svg>
        </span>
      </div>

      {/* Filtered Results */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Danh Sách Nhà Cứu Hộ
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <RescueServiceCard key={service.id} service={service} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              Không tìm thấy dịch vụ phù hợp.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationFilter;
