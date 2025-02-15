import React from "react";
import { MapPin, PhoneCall, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <PhoneCall size={32} className="text-orange-500" />,
      title: "Gọi Điện Yêu Cầu",
      description: "Liên hệ các nhà cứu hộ khi xe gặp sự cố.",
    },
    {
      icon: <MapPin size={32} className="text-orange-500" />,
      title: "Xác Định Vị Trí",
      description:
        "Cung cấp vị trí hiện tại để đội cứu hộ dễ dàng tìm thấy bạn.",
    },
    {
      icon: <Truck size={32} className="text-orange-500" />,
      title: "Cứu Hộ Xe",
      description:
        "Đội cứu hộ đến và hỗ trợ bạn nhanh chóng, an toàn và tận tình.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Quy Trình Cứu Hộ Xe</h2>
        <p className="text-gray-600 mt-2">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn qua các bước đơn giản sau:
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
