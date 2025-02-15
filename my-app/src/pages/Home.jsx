import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import RescueServices from "../components/RescueServices";
import TestimonialsSection from "../components/TestimonialsSection";
import data from "../data";
export default function Home() {
  const { rescue_services  } = data;
  return (
    <>
      <div className="container mx-auto">
        <HeroSection />
        <HowItWorks />
        <RescueServices />
        <TestimonialsSection rescue_services={rescue_services} />
      </div>
    </>
  );
}
