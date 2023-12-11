import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="flex w-[420px] place-content-around items-center gap-2">
        <Link className="text-purple-900 px-8 h-8 text-center rounded-2xl border border-purple-900 transition-all hover:text-slate-200 hover:bg-purple-900" to={"/login"}>Ingresa con tu cuenta</Link>
        <Link  className="text-purple-900 px-8 h-8 text-center rounded-2xl border border-purple-900 transition-all hover:text-slate-200 hover:bg-purple-900" to={"/register"}>¡Regístrate aquí!</Link>
      </div>
  );
};

export default Login;
