import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../MyContext";

const LoggedMenu = () => {
  const { customer, updateCustomer } = useContext(MyContext);
  const [visible, setVisible] = useState(false);
  const logout = () => {
    localStorage.setItem("customer", '{"id": 0}');
    updateCustomer(JSON.parse('{"id": 0}'));
  };

  const getClassName = ({ isActive }) => {
    if (isActive) {
      return "text-purple-900 font-bold ";
    }else{
      return "text-purple-900   transition-all hover:font-bold "
    }
  }
  return (
    <div className="flex flex-col">
      <span className="text-center font-medium "
        onClick={() => {
          setVisible(true);
        }}
      >{`Bienvenido, ${customer.name} ${customer.surname}`}</span>

      <nav className={visible ? "" : "hidden"}>
        <ul className="flex gap-2 ">
          <li >
            <NavLink className={getClassName} to="/profile">Perfil</NavLink>
          </li>
          <li>
            <NavLink className={getClassName} to={`/orders/${customer.id}`}>Historial de Compras</NavLink>
          </li>
          <li className="text-purple-900   transition-all hover:font-bold ">
            <button onClick={() => logout()}>Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoggedMenu;
