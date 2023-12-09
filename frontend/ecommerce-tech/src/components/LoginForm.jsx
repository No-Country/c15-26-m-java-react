import { useFormik } from "formik";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { MyContext } from "../MyContext";
import axios from "axios";
import { API_URL } from "../config";

const LoginForm = () => {
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
        navigate("/");
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
        <div className="flex w-[500px] place-content-center mt-8">
          <div className="w-full ">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700  font-bold mb-2"
                  htmlFor="name"
                >
                  Correo electrónico:
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
                  <div className="text-red-500  italic">{errors.email}</div>
                ) : null}
              </div>

              <div>
                <label
                  className="block text-gray-700  font-bold mb-2"
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
                  <div className="text-red-500  italic">{errors.password}</div>
                ) : null}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
                <button
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={resetPassword()}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
