import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext.jsx";
import LoginMenu from "./LoginMenu.jsx";
import UserIcon from "./UserIcon.jsx";
import { LookUpBar } from "./LookUpBar.jsx";
import CartIcon from "./CartIcon.jsx";
import logo from "../assets/Logo.svg";
import iso from "../assets/Isotype.svg";

const Header = () => {
  const { customer, updateselectedCategories, updateCustomer } =
    useContext(MyContext);
  const navigate = useNavigate();
  const goToHome = () => {
    updateselectedCategories([0]);
    navigate("/");
  };
  const logout = () => {
    localStorage.setItem("customer", '{"id": 0}');
    updateCustomer(JSON.parse('{"id": 0}'));
  };
  const getClassName = ({ isActive }) => {
    if (isActive) {
      return "text-blue-600 font-bold ";
    } else {
      return "text-blue-600   transition-all hover:font-bold ";
    }
  };
  return (
    <header className=" bg-transparent  h-28 flex flex-col ">
      <div className="flex place-content-evenly items-center h-24 bg-white">
        <div className="flex cursor-pointer" onClick={goToHome}>
          <div className="h-[46px] w-[46px]">
            <img src={iso} />
          </div>
          <div className="h-10 w-[191px]">
            <img src={logo} />
          </div>
        </div>

        <LookUpBar />
        {customer.id !== 0 ? <UserIcon /> : <LoginMenu />}
        <CartIcon />
      </div>
      <nav>
        <ul className="flex place-content-around w-1/2 gap-2 ml-10 ">
          <li onClick={goToHome}>
            <NavLink to={`/`} className={getClassName}>
              Ofertas
            </NavLink>
          </li>
          <li>
            <NavLink className={getClassName}>Categorías de productos</NavLink>
          </li>
          <li>
            <NavLink className={getClassName}>Soporte</NavLink>
          </li>
          <li>
            <NavLink className={getClassName}>Seguimiento de productos</NavLink>
          </li>

          {customer.id > 0 && (
            <>
              <li>
                <NavLink className={getClassName} to="/profile">
                  Perfil
                </NavLink>
              </li>
              <li>
                <NavLink className={getClassName} to={`/orders/${customer.id}`}>
                  Historial de Compras
                </NavLink>
              </li>
              <li className="text-blue-600  transition-all hover:font-bold ">
                <button onClick={() => logout()}>Cerrar sesión</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
