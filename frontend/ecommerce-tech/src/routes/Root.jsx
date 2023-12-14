import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Root = () => {


  return (
    < div className="bg-gray-100 font-body text-gray-900">
      <Header />
      <div className="flex flex-grow place-content-center min-h-screen">
        <Outlet />
        </div>
      <Footer />
    </div>
  );
};

export default Root;
