import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext.jsx";
import LoginMenu from "./LoginMenu.jsx";
import UserIcon from "./UserIcon.jsx";
import { LookUpBar } from "./LookUpBar.jsx";
import CartIcon from "./CartIcon.jsx";
import logo from "../assets/Logo.svg";
import logo2 from "../assets/Logo2.svg";
import iso from "../assets/Isotype.svg";
import BurgerMenu from "./BurgerMenu.jsx";

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
    <header className=" bg-transparent  h-28 flex flex-col  ">
      <div className="flex place-content-between sm:place-content-evenly items-center h-24 bg-white">
        <BurgerMenu/>
        <div className="flex gap-3 cursor-pointer" onClick={goToHome}>
          <div className="h-[46px] w-[46px]">
            <img src={iso} />
          </div>
           <div >
             <img src={window.innerWidth > 768  ? logo : logo2} className="h-10 w-[191px]" />
           </div>
        </div>

        <div className="hidden md:block">
          <LookUpBar />
        </div>
        <div className="hidden lg:block ">
          {customer.id !== 0 ? <UserIcon /> : <LoginMenu />}
        </div>
          <CartIcon />
      </div>
      <div className="hidden md:block">
        <nav>
          <ul className="flex place-content-start gap-8 ml-24 ">
            <li>
              <NavLink to={`/products`} className={getClassName}>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to={'/tracking'} className={getClassName}>Seguimiento</NavLink>
            </li>
            <li>
              <NavLink to={'/help'} className={getClassName}>Soporte</NavLink>
            </li>
          
        
            {customer.id > 0 && (
              <div className="flex gap-8 lg:hidden">
                <li>
                  <NavLink className={getClassName} to="/profile">
                    Perfil
                  </NavLink>
                </li>
                <li>
                  <NavLink className={getClassName} to={`/orders/${customer.id}`}>
                    Historial
                  </NavLink>
                </li>
                <li className="text-blue-600  transition-all hover:font-bold ">
                  <button onClick={() => logout()}>Cerrar sesión</button>
                </li>
              </div>
            )}
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
