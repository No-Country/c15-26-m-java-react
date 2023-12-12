import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const getClassName = ({ isActive }) => {
    if (isActive) {
      return "text-blue-600 font-bold ";
    }else{
      return "text-blue-600   transition-all hover:font-bold "
    }
  }
  return (
    <header className=" bg-transparent  h-28 flex flex-col  p-3 ">
      <div className="flex place-content-around items-center h-24 bg-white">
        <div className="ml-8 h-10 leading-10 text-xl w-10">STORE</div>
        <LookUpBar />
        {customer.id !== 0 ? <LoggedMenu /> : <Login />}
        <CartIcon />
      </div>
      <nav>
        <ul className="flex place-content-around w-1/2 gap-2 ml-10 ">
          <li
            onClick={goToHome}
          >
            <NavLink to={`/`}className={getClassName}>Ofertas</NavLink>
          </li>
          <li >
            <NavLink className={getClassName} >Categorías de productos</NavLink>
          </li>
          <li >
            <NavLink className={getClassName} >Soporte</NavLink>
          </li>
          <li >
            <NavLink className={getClassName} >Seguimiento de productos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
