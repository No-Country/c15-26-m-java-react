import { useFormik } from "formik";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { MyContext } from "../MyContext";
import axios from "axios";
import { API_URL } from "../config";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { customer, updateCustomer } = useContext(MyContext);

  const initialValues = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es obligatorio"),
    surname: Yup.string().required("Este campo es obligatorio"),
    phone: Yup.string().required("Este campo es obligatorio"),
    email: Yup.string()
      .email("email electrónico no válido")
      .required("Este campo es obligatorio"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/,
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un símbolo"
      )
      .required("Este campo es obligatorio"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Este campo es obligatorio"),
  });

  const onSubmit = () => {
    const endPoint = API_URL + "customer/register";

    axios
      .post(endPoint, values)
      .then((res) => {
        alert("Usuario registrado");
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

  return (
    <>
      {customer.id !== 0 ? (
        <Navigate to={"/"} />
      ) : (
        <div className="flex w-[500px] place-content-center mt-8">
          <div className="w-full">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700  font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre:
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {touched.name && errors.name ? (
                  <div className="text-red-500  italic">{errors.name}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700  font-bold mb-2"
                  htmlFor="name"
                >
                  Apellido:
                </label>
                <input
                  id="surname"
                  type="text"
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {touched.surname && errors.surname ? (
                  <div className="text-red-500  italic">{errors.surname}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700  font-bold mb-2"
                  htmlFor="name"
                >
                  Teléfono:
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {touched.phone && errors.phone ? (
                  <div className="text-red-500  italic">{errors.phone}</div>
                ) : null}
              </div>

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

              <div className="mb-4">
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

              <div className="mb-4">
                <label
                  className="block text-gray-700  font-bold mb-2"
                  htmlFor="name"
                >
                  Confirmar contraseña:
                </label>
                <input
                  id="confirm"
                  type="password"
                  name="confirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {touched.confirm && errors.confirm ? (
                  <div className="text-red-500  italic">{errors.confirm}</div>
                ) : null}
              </div>

              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
