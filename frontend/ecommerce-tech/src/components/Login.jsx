import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-[200px]">
      <div className="flex w-[250px] place-content-around items-center gap-2">
        <Link  className="text-blue-900 p-2 rounded transition-all hover:text-slate-200 hover:bg-blue-950" to={"/register"}>Registrarse</Link>
        <Link className="text-blue-900 p-2 rounded transition-all hover:text-slate-200 hover:bg-blue-950" to={"/login"}>Iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default Login;
