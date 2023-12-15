import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../MyContext";
import userButton from "../assets/Botón Usuario.svg";
import guestButton from "../assets/Botón Invitado.svg";

const LoggedMenu = () => {
  const { customer, updateCustomer, guestConfirmed } = useContext(MyContext);
  const [visible, setVisible] = useState(false);
  const logout = () => {
    localStorage.setItem("customer", '{"id": 0}');
    updateCustomer(JSON.parse('{"id": 0}'));
  };

  const getClassName = ({ isActive }) => {
    if (isActive) {
      return "text-blue-600 font-bold transition-all";
    } else {
      return "text-blue-600 transition-all hover:font-bold ";
    }
  };
  return (
    <div className="flex flex-wrap pt-3 w-[300px] h-[70px] justify-end cursor-pointer">
      <div>
        <img
          src={guestConfirmed && customer.id !== 0 ? guestButton : userButton}
          onClick={() => {
            setVisible(!visible);
          }}
        />
      </div>

      {!guestConfirmed && (
        <nav className={visible ? "z-10" : "hidden"}>
          <ul className="flex gap-2 ">
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
          </ul>
        </nav>
      )}
    </div>
  );
};

export default LoggedMenu;
