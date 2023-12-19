import { NavLink } from "react-router-dom";



const LoginMenu = () => {

  const getClassName = ({ isActive }) => {
    if (isActive) {
      return  "w-[110px] h-8 px-2 py-1 text-center text-sm rounded-2xl border border-blue-500 transition-all text-blue-500 bg-white hover:border-blue-500 hover:text-blue-500"
    }else{
      return"w-[110px] h-8 px-2 py-1 text-center text-sm rounded-2xl border border-blue-700 transition-all text-blue-700 bg-white hover:border-blue-500 hover:text-blue-500"
    }
  }

  const getClassName2 = ({ isActive }) => {
    if (isActive) {
      return "w-[144px] h-8 px-1 py-1 text-white bg-blue-500 text-center text-sm rounded-2xl border border-blue-500 transition-all hover:bg-blue-500 hover:border-blue-500"
    }else{
      return "w-[144px] h-8 px-1 py-1 text-white bg-blue-600 text-center text-sm rounded-2xl border border-blue-600 transition-all hover:bg-blue-500 hover:border-blue-500"
    }
  }

  
  return (
     
        <div className="hidden md:block">
       <div className="flex place-content-around items-center gap-2">
         <NavLink className={getClassName} to={"/login"}>Inicia sesión</NavLink>
         <NavLink  className={getClassName2} to={"/register"}>Regístrate aquí</NavLink>
       </div>
     </div>
  );
};

export default LoginMenu;
