import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";




const Root = () => {


  return (
    <>
      <Header />
      <div className="flex flex-grow place-content-center min-h-screen">
        <Outlet />
        </div>
      <Footer />
    </>
  );
};

export default Root;
