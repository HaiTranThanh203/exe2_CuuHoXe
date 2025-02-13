import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignIn from "../pages/SignIn";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import LocationFilter from "../pages/LocationFilter ";
import data from "../data.json";
import ProductDetail from "../pages/ProductDetail";
function Layout({ children }) {
  const location = useLocation();
  const isSignInPage = location.pathname === "/dang-nhap";
  
  return (
    <>
      {!isSignInPage && (
        <Header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50" />
      )}
      <main className="min-h-screen">{children}</main>
      {!isSignInPage && <Footer />}
    </>
  );
}

export default function AppRoutes() {
  const services = data.rescue_services;
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dang-nhap" element={<SignIn />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="dang-ki" element={<SignUp />} />
          <Route
            path="rescue"
            element={<LocationFilter services={services} />}
          />
          <Route path="test" element={<ProductDetail />} />

          
        </Routes>
      </Layout>
    </Router>
  );
}
