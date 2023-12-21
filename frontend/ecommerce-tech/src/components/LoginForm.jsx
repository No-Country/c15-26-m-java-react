import { useFormik } from "formik";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { MyContext } from "../MyContext";
import axios from "axios";
import { API_URL } from "../config";
import ActionButton from "./ActionButton";

const LoginForm = ({ goCheckout = false }) => {
  const navigate = useNavigate();
  const { customer, updateCustomer } = useContext(MyContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Correo electrónico no válido")
      .required("Este campo es obligatorio"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/,
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un símbolo"
      )
      .required("Este campo es obligatorio"),
  });

  const onSubmit = () => {
    const endPoint = API_URL + "customer/login";

    axios
      .post(endPoint, values)
      .then((res) => {
        localStorage.setItem("customer", JSON.stringify(res.data.user));
        updateCustomer(JSON.parse(localStorage.getItem("customer")));
        navigate(goCheckout ? "/checkout" : "/");
      })
      .catch((error) => {
        alert("ocurrió un error");
        console.log(error);
      });
  };

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });
  const resetPassword = () => {};

  return (
    <>
      {customer.id !== 0 ? (
        <Navigate to={"/"} />
      ) : (
       <div className="flex items-center">
         <div className="flex flex-col place-content-center">
           <div className="flex flex-col w-[412px] h-[546px]  gap-3 px-4 bg-white rounded">
             <h1 className="mt-7 text-2xl w-[372px] h-[28px] font-semibold ">
               Iniciar Sesión
             </h1>
        
             <form onSubmit={handleSubmit}>
               <div className="w-[380px] h-[104px] p-1">
                 <label
                   className="text-gray-800 text-sm font-semibold"
                   htmlFor="name"
                 >
                   Email:
                 </label>
                 <input
                   id="email"
                   type="email"
                   name="email"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.email}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 />
                 {touched.email && errors.email ? (
                   <div className="text-gray-800 text-sm">{errors.email}</div>
                 ) : null}
               </div>
        
               <div className="w-[380px] h-[104px] p-1">
                 <label
                   className="text-gray-800 text-sm font-semibold"
                   htmlFor="name"
                 >
                   Contraseña:
                 </label>
                 <input
                   id="password"
                   type="password"
                   name="password"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.password}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 />
                 {touched.password && errors.password ? (
                   <div className="text-gray-800 text-sm">{errors.password}</div>
                 ) : null}
               </div>
        
               <div
                 className="w-[367px] h-[14px] p-1 text-sm text-center underline text-blue-700 hover:text-blue-800"
                 onClick={resetPassword()}
               >
                 Olvidé mi contraseña
               </div>
        
               <div className="mt-20 flex place-content-center items-center">
                 <ActionButton text="Iniciar sesión" type="submit" />
               </div>
               <div
                 className="w-[367px] h-[14px] p-1 mt-16 text-sm text-center underline text-blue-700  hover:text-blue-800"
                 onClick={() => navigate("/register")}
               >
                 ¿No tienes una cuenta? ¡Créala aquí!
               </div>
             </form>
           </div>
         </div>
       </div>
      )}
    </>
  );
};

export default LoginForm;
