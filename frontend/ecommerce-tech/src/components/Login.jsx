import { NavLink } from "react-router-dom";

const getClassName = ({ isActive }) => {
  if (isActive) {
    return "text-white bg-blue-600 px-8 h-8 text-center rounded-2xl border border-blue-600";
  }else{
    return "text-blue-600 px-8 h-8 text-center rounded-2xl border border-blue-600 transition-all hover:text-white hover:bg-blue-600 hover:shadow"
  }
}

const Login = () => {
  return (
      <div className="flex w-[420px] place-content-around items-center gap-2">
        <NavLink className={getClassName} to={"/login"}>Ingresa con tu cuenta</NavLink>
        <NavLink  className={getClassName} to={"/register"}>¡Regístrate aquí!</NavLink>
      </div>
  );
};

export default Login;
