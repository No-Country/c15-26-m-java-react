import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { NavLink } from "react-router-dom";
import userButton from "../assets/Botón Usuario.svg";
import guestButton from "../assets/Botón Invitado.svg";
import my_account from "../assets/my_account.svg";
import guest from "../assets/guest.svg";

const UserIcon = () => {
  const { customer, updateCustomer } = useContext(MyContext);

  const [visible, setVisible] = useState(false);

  const logout = () => {
    localStorage.setItem("customer", '{"id": 0}');
    updateCustomer(JSON.parse('{"id": 0}'));
  };

  const getClassName = ({ isActive }) => {
    if (isActive) {
      return "text-sm text-gray-900 font-bold transition-all";
    } else {
      return "text-sm text-gray-900 transition-all hover:font-bold ";
    }
  };

  return (
    <div className=" pt-3 w-[200px] h-[70px] flex flex-col">
      {customer.id > 0 && (
        <>
          <div onClick={() => setVisible(!visible)}>
            <img
              src={visible ? my_account : userButton}
              className={visible ? " pt-2 pb-1 px-2  mt-1 w-[124px] h-10" : ""}
            />
          </div>

          <nav className={visible ? "z-10 bg-white p-2 rounded-xl" : "hidden"}>
            <ul className="flex flex-col gap-2  ">
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
              <li className="text-sm text-gray-900 transition-all hover:font-bold ">
                <button onClick={() => logout()}>Cerrar sesión</button>
              </li>
            </ul>
          </nav>
        </>
      )}

{customer.id < 0 && (
        <>
          <div onClick={() => setVisible(!visible)}>
            <img
              src={visible ? guest : guestButton}
              className={visible ? "p-3 " : ""}
            />
          </div>

          <nav className={visible ? "z-10 bg-white p-2 rounded-xl" : "hidden"}>
            <ul className="flex flex-col gap-2  ">
              <li>
                <NavLink className={getClassName} to="/register">
                  Crear cuenta
                </NavLink>
              </li>
              <li className="text-sm text-gray-900 transition-all hover:font-bold ">
                <button onClick={() => logout()}>Salir del modo invitado</button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default UserIcon;
