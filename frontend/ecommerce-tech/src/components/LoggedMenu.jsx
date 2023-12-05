import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";

const LoggedMenu = () => {
  const { customer, updateCustomer } = useContext(MyContext);
  const [visible, setVisible] = useState(false);
  const logout = () => {
    localStorage.setItem("customer", '{"id": 0}');
    updateCustomer(JSON.parse('{"id": 0}'));
  };
  return (
    <div className="flex flex-col">
      <span className="text-center font-medium "
        onClick={() => {
          setVisible(true);
        }}
      >{`Bienvenido, ${customer.name} ${customer.surname}`}</span>

      <nav className={visible ? "" : "hidden"}>
        <ul className="flex gap-2 ">
          <li className="text-blue-900 p-1 rounded transition-all hover:text-slate-200 hover:bg-blue-950">
            <Link to="/profile">Perfil</Link>
          </li>
          <li className="text-blue-900 p-1 rounded transition-all hover:text-slate-200 hover:bg-blue-950">
            <Link to={`/orders/${customer.id}`}>Historial de Compras</Link>
          </li>
          <li className="text-blue-900 p-1 rounded transition-all hover:text-slate-200 hover:bg-blue-950">
            <button onClick={() => logout()}>Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoggedMenu;
