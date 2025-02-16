import React from "react";
import RescueServiceCard from "./RescueServiceCard";
import data from "../data.json";
// Dữ liệu mẫu (bạn có thể import từ file JSON hoặc API)
const rescueServices = data.rescue_services.slice(0, 3);

export default function RescueServices() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">
          Dịch Vụ Cứu Hộ Xe Nổi Bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rescueServices.map((service) => (
            <RescueServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
