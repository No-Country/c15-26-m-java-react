import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Navigate } from "react-router-dom";

const CustomerProfile = () => {
  const { customer } = useContext(MyContext);

  return customer.id === 0 ? (
    <Navigate to={"/"} />
  ) : (
    <div className="mt-10">
      <div className="text-center font-bold text-2xl mb-8 ">Perfil</div>
      <table className="border border-black w-full">
        <thead >
            <tr className="p-4 bg-slate-400 font-medium h-14 text-center">
                <td className="w-[150px]">Nombre</td>
                <td className="w-[150px]">Apellido</td>
                <td className="w-[150px]">Correo Electrónico</td>
                <td className="w-[150px]">Teléfono</td>
            </tr>
        </thead>
        <tbody>
            <tr className="p-4 h-14 w-12 text-center">
                <td className="w-[150px]">{customer.name}</td>
                <td className="w-[150px]">{customer.surname}</td>
                <td className="w-[150px]">{customer.email}</td>
                <td className="w-[150px]">{customer.phone}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerProfile;
