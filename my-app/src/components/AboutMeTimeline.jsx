import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutMeTimeline = () => {
  return (
    <div className="py-10 px-6 max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 text-orange-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Về Chúng Tôi - Lộ Trình Phát Triển Dự Án
      </motion.h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FF6F00', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #FF6F00' }}
          date={<motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                01/01/2025 - 03/2025
                </motion.span>}
          iconStyle={{ background: '#FF6F00', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="text-xl font-semibold">Giai đoạn 1: Phát triển tính năng cơ bản</h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Xây dựng nền tảng website giúp người dùng tìm kiếm tiệm sửa xe miễn phí.
          </motion.p>
          <ul className="list-disc pl-5 mt-2">
            <li>Trang chủ với giao diện thân thiện.</li>
            <li>Đăng ký, đăng nhập tài khoản.</li>
            <li>Danh sách tiệm sửa xe theo khu vực.</li>
            <li>Trang chi tiết tiệm sửa xe với thông tin, đánh giá.</li>
            <li>Nút liên hệ: Gọi điện, Zalo, Google Maps.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FF8C00', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #FF8C00' }}
          date={<motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                04/2025 - 05/2025
                </motion.span>}
          iconStyle={{ background: '#FF8C00', color: '#fff' }}
          icon={<FaRocket />}
        >
          <h3 className="text-xl font-semibold">Giai đoạn 2: Mở rộng tính năng & thu phí dịch vụ</h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Thêm tính năng đặt lịch sửa xe, cứu hộ xe, và mua bảo hiểm. Mong quý vị hãy đón chờ giai đoạn 2!
          </motion.p>
          <ul className="list-disc pl-5 mt-2">
            <li>Đặt lịch sửa chữa xe trực tuyến.</li>
            <li>Dịch vụ cứu hộ xe khẩn cấp.</li>
            <li>Phí giao dịch: 20.000 VND - xe máy, 50.000 -ô tô .</li>
            <li>Hệ thống thanh toán trực tiếp từ tài khoản nạp tiền.</li>
            <li>Liên kết với công ty bảo hiểm giúp khách hàng mua bảo hiểm dễ dàng.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--funfact"
          contentStyle={{ background: '#FFAA33', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #FFAA33' }}
          date="Fun Fact"
          iconStyle={{ background: '#FFAA33', color: '#fff' }}
          icon={<FaLightbulb />}
        >
          <h3 className="text-xl font-semibold">Fun Fact về Dự Án</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Ý tưởng ban đầu của dự án xuất phát từ cuộc trò chuyện của 2 cậu sinh viên bị hỏng xe giữa đường. </li>
            <li>Website có thể giúp bạn tiết kiệm đến 30% thời gian tìm kiếm tiệm sửa xe.</li>
            <li>Trong tương lai, AI có thể hỗ trợ bạn tìm kiếm tiệm sửa xe phù hợp nhất!</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default AboutMeTimeline;
