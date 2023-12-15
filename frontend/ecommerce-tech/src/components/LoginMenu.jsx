import { NavLink } from "react-router-dom";



const LoginMenu = () => {

  // const getClassName = ({ isActive }) => {
  //   if (isActive) {
  //     return  "w-[110px] h-8 px-2 py-1 text-center text-sm rounded-2xl border border-blue-600 transition-all text-white bg-blue-600 hover:text-blue-600 hover:bg-white hover:shadow"
  //   }else{
  //     return "w-[110px] h-8 px-2 py-1 text-center text-sm rounded-2xl border border-blue-600 transition-all text-blue-600 bg-white hover:text-white hover:bg-blue-600 hover:shadow"
  //   }
  // }

  // const getClassName2 = ({ isActive }) => {
  //   if (isActive) {
  //     return "w-[144px] h-8 px-1 py-1 text-blue-600 bg-white text-center text-sm rounded-2xl border border-blue-600 transition-all hover:text-white hover:bg-blue-600 hover:shadow"
  //   }else{
  //     return "w-[144px] h-8 px-1 py-1 text-white bg-blue-600 text-center text-sm rounded-2xl border border-blue-600 transition-all hover:text-blue-600 hover:bg-white hover:shadow"
  //   }
  // }

  
  return (
      <div className="flex place-content-around items-center gap-2">
        <NavLink className="w-[110px] h-8 px-2 py-1 text-center text-sm rounded-2xl border border-blue-600 transition-all text-blue-600 bg-white hover:text-white hover:bg-blue-600 hover:shadow" to={"/login"}>Inicia sesión</NavLink>
        <NavLink  className="w-[144px] h-8 px-1 py-1 text-white bg-blue-600 text-center text-sm rounded-2xl border border-blue-600 transition-all hover:text-blue-600 hover:bg-white hover:shadow" to={"/register"}>¡Regístrate aquí!</NavLink>
      </div>
  );
};

export default LoginMenu;
