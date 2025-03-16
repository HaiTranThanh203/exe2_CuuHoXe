import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si"; // Import Zalo icon
import data from "../data.json";

export default function ProductDetail() {
  const [selectedService, setSelectedService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { productId } = useParams();
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const navigate = useNavigate();

  useEffect(() => {
    const service = data.rescue_services.find((service) => service.id === Number(productId));
    if (!service) {
      console.error("Service not found");
      return;
    }
    setSelectedService(service);
    const serviceReviews = data.reviews.filter(
      (review) => review.rescue_service_id === Number(productId)
    );
    setReviews(serviceReviews);
  }, [productId]);

  if (!selectedService) {
    return <div className="text-center text-xl">Đang tải dữ liệu...</div>;
  }

  const handleMapClick = () => {
    const destination = `${selectedService.address.street}, ${selectedService.address.ward}, ${selectedService.address.district}, ${selectedService.address.city}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      destination
    )}`;
    window.open(url, "_blank");
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const reviewToAdd = { id: reviews.length + 1, ...newReview };
    setReviews([...reviews, reviewToAdd]);
    setNewReview({ name: "", comment: "", rating: 5 });
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Service Details */}
      <div className="md:col-span-2 p-6 bg-white shadow-lg rounded-lg">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-700 hover:text-gray-900 mb-4">
          <ArrowLeftIcon className="h-6 w-6 mr-2" /> Quay lại
        </button>
        <h1 className="text-3xl font-bold text-gray-900">{selectedService.name}</h1>
        <div className="flex items-center mt-3 text-gray-700">
          <MapPinIcon className="h-6 w-6 text-red-500 mr-2" />
          <p>
            {selectedService.address.street}, {selectedService.address.ward},{" "}
            {selectedService.address.district}, {selectedService.address.city}
          </p>
        </div>
        <div className="flex items-center mt-2 text-gray-700">
          <PhoneIcon className="h-6 w-6 text-blue-500 mr-2" />
          <p className="font-medium">{selectedService.phone}</p>
        </div>
        <div className="flex items-center mt-2 text-gray-700">
          <StarIcon className="h-6 w-6 text-yellow-500 mr-2" />
          <p className="font-medium">Đánh giá: {selectedService.average_rating} / 5</p>
        </div>
        <div className="flex items-center mt-2 text-gray-700">
          <WrenchScrewdriverIcon className="h-6 w-6 text-gray-800 mr-2" />
          <p className="font-medium">Loại sửa chữa: {selectedService.rescue_type}</p>
        </div>
        <div className="flex items-center mt-2 text-gray-700">
          <ClockIcon className="h-6 w-6 text-green-500 mr-2" />
          <p className="font-medium">Thời gian làm việc: {selectedService.working_hours}</p>
        </div>

        {/* Service & Pricing */}
        <h2 className="text-xl font-semibold mt-6 border-b pb-2">Dịch vụ & Bảng giá</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          {selectedService.services.map((svc, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm">
              <span>{svc.service_name}</span>
              <span className="font-semibold text-green-600">{svc.price}</span>
            </li>
          ))}
        </ul>

        {/* Customer Reviews */}
        <h2 className="text-xl font-semibold mt-6 border-b pb-2">Đánh giá từ khách hàng</h2>
        <div className="mt-4 space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-lg shadow-md bg-gray-50">
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500 font-bold mt-2">⭐ {review.rating} / 5</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-50">
          <h2 className="text-xl font-semibold flex items-center">
            <PencilSquareIcon className="h-6 w-6 text-gray-600 mr-2" />
            Để lại đánh giá
          </h2>
          <form className="mt-4" onSubmit={handleSubmitReview}>
            <input type="text" placeholder="Họ và tên *" className="w-full p-2 border rounded-lg" value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} required />
            <textarea placeholder="Bình luận" className="w-full p-2 border rounded-lg mt-4" rows="3" value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} required></textarea>
            <button type="submit" className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700 w-full">
              Gửi đánh giá
            </button>
          </form>
        </div>
      
      </div>
    

      {/* Google Map & Contact Buttons */}
      <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
        <iframe
          src={selectedService.google_map}
          width="400"
          height="300"
          className="rounded-lg border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>

        {/* Call Button */}
        <a
          href={`tel:${selectedService.phone}`}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg w-full text-center hover:bg-green-700 flex items-center justify-center space-x-2"
        >
          <FaPhoneAlt className="w-5 h-5" />
          <span>Gọi điện</span>
        </a>

        {/* Zalo Button */}
        <a
          href={`https://zalo.me/${selectedService.phone}`}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg w-full text-center hover:bg-blue-700 flex items-center justify-center space-x-2"
        >
          <SiZalo className="w-5 h-5" />
          <span>Liên hệ qua Zalo</span>
        </a>

        {/* Google Map Button */}
        <button
          className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg w-full text-center hover:bg-orange-700 flex items-center justify-center space-x-2"
          onClick={handleMapClick}
        >
          <FaMapMarkerAlt className="w-5 h-5" />
          <span>Chỉ đường qua Google Map</span>
        </button>
      </div>
    </div>
  );
}
