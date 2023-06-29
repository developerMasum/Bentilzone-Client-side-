import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="px-3 md:px-0 lg:px-0">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
