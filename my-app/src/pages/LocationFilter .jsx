import React, { useEffect, useState } from "react";
import axios from "axios";
import RescueServiceCard from "../components/RescueServiceCard";
import { Link } from "react-router-dom";
const LocationFilter = ({ services }) => {
  const [userDistrict, setUserDistrict] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchAddress, setSearchAddress] = useState("");
  const [searching, setSearching] = useState(false);

  // Lấy district từ vị trí tọa độ
  const getDistrictFromCoords = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=e210edd86b644aa6adc677e0c1bb20ee`
      );

      const components = response.data.results[0]?.components;
      let district =
        components.suburb || components.city_district || components.city || "";

      district = district
        .replace(
          /^\s*(District|Quận|Huyện)\s*|\s*(District|Quận|Huyện)\s*$/gi,
          ""
        )
        .trim();

      return district;
    } catch (error) {
      console.error("Lỗi khi lấy địa chỉ từ tọa độ:", error);
      return "";
    }
  };

  // Lọc dịch vụ theo district (khi lấy được vị trí ban đầu)
  const filterServicesByDistrict = (district) => {
    const normalizedDistrict = district.trim().toLowerCase();
    const filtered = services.filter((service) => {
      const serviceDistrict = service.address.district.trim().toLowerCase();
      return serviceDistrict === normalizedDistrict;
    });
    setFilteredServices(filtered.slice(0, 5));
  };

  // Lọc dịch vụ theo từ khóa tìm kiếm (khi người dùng gõ text vào ô tìm kiếm)
  const filterServicesByKeyword = (keyword) => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    const filtered = services.filter((service) => {
      const { street, ward, district, city } = service.address;
      const addressString =
        `${street} ${ward} ${district} ${city}`.toLowerCase();

      return addressString.includes(normalizedKeyword);
    });

    setFilteredServices(filtered.slice(0, 5));
  };

  // Lấy vị trí người dùng ban đầu
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const district = await getDistrictFromCoords(latitude, longitude);
        setUserDistrict(district);
        filterServicesByDistrict(district);
      },
      (error) => {
        console.error("Không thể lấy vị trí:", error);
      }
    );
  }, [services]);

  // Xử lý khi người dùng nhấn "Tìm kiếm"
  const handleSearch = () => {
    setSearching(true);
    if (searchAddress.trim()) {
      // Nếu có nhập từ khóa, lọc theo từ khóa
      filterServicesByKeyword(searchAddress);
    } else {
      // Nếu không nhập gì, quay lại lọc theo district
      filterServicesByDistrict(userDistrict);
    }
    setSearching(false);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Danh sách nhà cứu hộ gần bạn{" "}
        {userDistrict ? `(Địa chỉ: ${userDistrict})` : "(Đang lấy vị trí...)"}
      </h2>

      <div className="mb-4">
        <input
          type="text"
          value={searchAddress}
          onChange={(e) => setSearchAddress(e.target.value)}
          placeholder="Nhập địa chỉ để tìm kiếm..."
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          disabled={searching}
        >
          {searching ? "Đang tìm kiếm..." : "Tìm kiếm"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <RescueServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">
            Không tìm thấy dịch vụ phù hợp.
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationFilter;
