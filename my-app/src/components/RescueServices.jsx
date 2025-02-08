import React from 'react';
import RescueServiceCard from './RescueServiceCard';

// Dữ liệu mẫu (bạn có thể import từ file JSON hoặc API)
const rescueServices = [
  {
    id: 201,
    name: 'Sửa Xe Minh Hoàng',
    address: {
      street: '15 Nguyễn Khuyến',
      ward: 'Văn Miếu',
      district: 'Đống Đa',
      city: 'Hà Nội',
    },
    phone: '0981234567',
    average_rating: 4.5,
    image_url: 'https://example.com/images/minh_hoang.jpg',
  },
  {
    id: 202,
    name: 'Sửa Chữa Xe Máy Tuấn Anh',
    address: {
      street: '30 Láng Hạ',
      ward: 'Láng Hạ',
      district: 'Ba Đình',
      city: 'Hà Nội',
    },
    phone: '0977654321',
    average_rating: 4.2,
    image_url: 'https://example.com/images/tuan_anh.jpg',
  },
];

export default function RescueServices() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Dịch Vụ Cứu Hộ Xe Nổi Bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rescueServices.map((service) => (
            <RescueServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
