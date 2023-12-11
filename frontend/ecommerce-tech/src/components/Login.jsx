import { NavLink } from "react-router-dom";

const getClassName = ({ isActive }) => {
  if (isActive) {
    return "text-slate-200 bg-purple-900 px-8 h-8 text-center rounded-2xl border border-slate-900";
  }else{
    return "text-purple-900 px-8 h-8 text-center rounded-2xl border border-purple-900 transition-all hover:text-slate-200 hover:bg-purple-900"
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
