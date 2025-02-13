import { useState, useEffect } from "react";

import data from "../data.json";
export default function ProductDetail({ productId }) {
  const [selectedService, setSelectedService] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Find the selected service based on productId
    const service = data.rescue_services.find((service) => service.id === 201);
    if (!service) {
      console.error("Service not found");
      return;
    }
    
    setSelectedService(service);

    // Filter reviews for the selected service
    const serviceReviews = data.reviews.filter((review) => review.rescue_service_id === 201);
    setReviews(serviceReviews);

    console.log("Reviews for service:", serviceReviews); // Debugging line
  }, [productId]); // Ensure effect runs when productId changes

  if (!selectedService) {
    return <div className="text-center text-xl">Đang tải dữ liệu...</div>;
  }

  if (!selectedService) {
    return <div className="text-center text-xl">Đang tải dữ liệu...</div>;
  }
  const handleMapClick = () => {
    window.open(`https://www.google.com/maps/dir/${selectedService.address}`, "_blank");
  };
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold">{selectedService.name}</h1>
       <div className="flex items-center mt-2">Địa Chỉ 
      
        <p className="text-gray-600 mt-2 ml-2">{selectedService.address.street}</p>
         <p className="text-gray-600 mt-2">{selectedService.address.ward}</p>
            <p className="text-gray-600 mt-2">{selectedService.address.district}</p>
            <p className="text-gray-600 mt-2">{selectedService.address.city}</p>
       </div>
        <p className="mt-2"><strong>Điện thoại:</strong> {selectedService.phone}</p>
        <p><strong>Đánh giá:</strong> ⭐ {selectedService.average_rating} / 5</p>
        <p><strong>Loại sửa chữa:</strong> {selectedService.rescue_type}</p>
        <p><strong>Thời gian làm việc:</strong> {selectedService.working_hours}</p>
        <h2 className="text-xl font-semibold mt-4">Dịch vụ & Bảng giá</h2>
        <ul className="list-disc pl-6">
          {selectedService.services.map((svc, index) => (
            <li key={index}>{svc.service_name} - {svc.price}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-6">Giới thiệu</h2>
        <p>{selectedService.description}</p>
        <h2 className="text-xl font-semibold mt-6">Đánh giá từ khách hàng</h2>
        <div className="mt-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-lg shadow-md mb-4">
              <div className="flex items-center mb-2">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500 font-bold mt-2">⭐⭐⭐⭐⭐ ({review.rating})</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Để lại đánh giá</h2>
          <form className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold">Họ và tên *</label>
                <input type="text" className="w-full p-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block font-bold">Email *</label>
                <input type="email" className="w-full p-2 border rounded-lg" required />
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-bold">Bình luận</label>
              <textarea className="w-full p-2 border rounded-lg" rows="4"></textarea>
            </div>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700">
              Gửi đánh giá
            </button>
          </form>
        </div>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
       
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.769419223778!2d105.84295727612826!3d21.001878088699584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad003eb14325%3A0x756d878e75ad6b6b!2zU-G7rWEgeGUgbcOheSAyNDcgTMOqIFRoYW5oIE5naOG7iw!5e0!3m2!1svi!2s!4v1739436576717!5m2!1svi!2s" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a 
          href={`tel:${selectedService.phone}`} 
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg w-full text-center hover:bg-green-700"
        >
          Gọi điện
        </a>
        <a 
          href={`https://zalo.me/${selectedService.phone}`} 
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg w-full text-center hover:bg-blue-700"
        >
          Liên hệ qua Zalo
        </a>
        <button 
          className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg w-full text-center hover:bg-orange-700"
          onClick={handleMapClick}
        >
          Chỉ đường qua Google Map
        </button>
      </div>
    </div>
  );
}