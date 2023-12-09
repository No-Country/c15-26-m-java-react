import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext.jsx";
import Login from "./Login.jsx";
import LoggedMenu from "./LoggedMenu.jsx";
import { LookUpBar } from "./LookUpBar.jsx";
import CartIcon from "./CartIcon.jsx";

const Header = () => {
  const { customer, updateselectedCategories } = useContext(MyContext);
  const navigate = useNavigate();
  const goToHome = () => {
    updateselectedCategories([0]);
    navigate("/");
  };
  return (
    <header className=" bg-slate-400 h-20  pt-8 pb-8 flex place-content-between items-center p-3 ">
      <nav>
        <ul className="flex place-content-around w-[150px] gap-2 ml-4 ">
          <li
            onClick={goToHome}
            className="text-blue-900 p-2 rounded transition-all hover:text-slate-200 hover:bg-blue-950"
          >
            {/* <Link to={`/`}>Home</Link> */} Home
          </li>
          <li className="text-blue-900 p-2 rounded transition-all hover:text-slate-200 hover:bg-blue-950">
            <Link to={`/cart`}>Cart</Link>
          </li>
        </ul>
      </nav>
      <LookUpBar />
      {customer.id !== 0 ? <LoggedMenu /> : <Login />}
      <CartIcon />
    </header>
  );
};

export default Header;
