import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { MyContext } from "../MyContext";
import axios from "axios";
import { API_URL } from "../config";
import first from "../assets/first.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";
import next from "../assets/next.svg";
import back from "../assets/back.svg";
import back_disabled from "../assets/back_disabled.svg";
import create from "../assets/create.svg";
import Swal from 'sweetalert2'

const RegisterForm = () => {
  const navigate = useNavigate();

  const { customer, updateCustomer , shopping} = useContext(MyContext);

  const [step, setStep] = useState(1);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    password: "",
    confirm: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es obligatorio"),
    phone: Yup.string().required("Este campo es obligatorio"),
    email: Yup.string()
      .email("email electrónico no válido")
      .required("Este campo es obligatorio"),
    address: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
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
        localStorage.setItem("customer", JSON.stringify(res.data.user));
        updateCustomer(JSON.parse(localStorage.getItem("customer")));
        if(shopping){
          Swal.fire({
            title: "Tu cuenta se creó con éxito",
            text: "Te llegará un correo para que verifiques tu cuenta y sea segura. ¡Disfruta de comprar en nuestra tienda!",
            icon: "success",
            confirmButtonText : "Continuar con el pago",
            confirmButtonColor: "#333BF4"
          });
          navigate('/checkout')
        }else{
          Swal.fire({
            title: "Tu cuenta se creó con éxito",
            text: "Te llegará un correo para que verifiques tu cuenta y sea segura. ¡Disfruta de comprar en nuestra tienda!",
            icon: "success",
          });
          navigate("/"); 
        }

        
      })
      .catch((error) => {
        Swal.fire({
          title: "Ocurrió un error",
          icon: "error",
        });
        console.log(error);
      });
  };

  const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting } =
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
        <div className="flex flex-col place-content-center"> 
          <div className=" w-[412px] h-[596px] bg-white rounded-lg ">
            <div className="w-full">
              <form
                className="flex flex-col gap-3 px-4"
                onSubmit={handleSubmit}
              >
                <div className="w-[376px] h-5 mt-4">
                  <img
                    src={step === 1 ? first : step === 2 ? second : third}
                    alt="paso1"
                  />
                </div>

                <div className="font-semibold text-2xl">
                  ¡Te damos la bienvenida!
                </div>

                <div className="text-sm px-1 py-2">
                  Completa los siguientes campos para crear tu cuenta. Tus datos
                  serán confidenciales.
                </div>

                {step === 1 && (
                  <div>
                    <div className="mt-2 mb-10">
                      <label
                        className=" text-gray-800 text-sm font-semibold"
                        htmlFor="name"
                      >
                        Nombre y Apellido
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {touched.name && errors.name ? (
                        <div className="text-gray-800 text-sm ">
                          {errors.name}
                        </div>
                      ) : null}
                    </div>

                    <div className="mb-10">
                      <label
                        className=" text-gray-800 text-sm font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {touched.email && errors.email ? (
                        <div className="text-gray-800 text-sm ">
                          {errors.email}
                        </div>
                      ) : null}
                    </div> 

                    <div className="mb-10">
                      <label
                        className=" text-gray-800 text-sm font-semibold"
                        htmlFor="phone"
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
                        className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {touched.phone && errors.phone ? (
                        <div className="text-gray-800 text-sm ">
                          {errors.phone}
                        </div>
                      ) : null}
                    </div>

                    <div className="h-[56px] flex p-2 mt-20 gap-6">
                      <img src={back_disabled} alt="previo" />
                      <img
                        className="hover:opacity-50 cursor-pointer"
                        src={next}
                        alt="next"
                        onClick={() => setStep(2)}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="mt-2 mb-10">
                      <label
                        className=" text-gray-800 text-sm font-semibold"
                        htmlFor="address"
                      >
                        Dirección
                      </label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {touched.address && errors.address ? (
                        <div className="text-gray-800 text-sm ">
                          {errors.address}
                        </div>
                      ) : null}
                    </div>

                    <div className="mb-10">
                      <label
                        className=" text-gray-800 text-sm font-semibold"
                        htmlFor="city"
                      >
                        Localidad
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                        className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {touched.city && errors.city ? (
                        <div className="text-gray-800 text-sm ">
                          {errors.city}
                        </div>
                      ) : null}
                    </div>

                    <div className="mb-10">
                      <label
                        className=" text-gray-800 text-sm font-semibold"
                        htmlFor="state"
                      >
                        Provincia
                      </label>
                      <input
                        id="state"
                        type="text"
                        name="state"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.state}
                        className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {touched.state && errors.state ? (
                        <div className="text-gray-800 text-sm ">
                          {errors.state}
                        </div>
                      ) : null}
                    </div>

                    <div className="h-[56px] flex mt-20 p-2 gap-6">
                      <img
                        className="hover:opacity-50 cursor-pointer"
                        src={back}
                        alt="previo"
                        onClick={() => setStep(1)}
                      />
                      <img
                        className="hover:opacity-50 cursor-pointer"
                        src={next}
                        alt="next"
                        onClick={() => setStep(3)}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <div className="mt-2 mb-10">
                      <label
                        className=" text-gray-800 text-sm font-semibold"
                        htmlFor="password"
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
                        className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                      />

                      {touched.password && errors.password ? (
                        <div className="text-gray-800 text-sm ">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>

                    <div className="mb-10">
                      <label
                        className=" text-gray-800 text-sm font-semibold"
                        htmlFor="confirm"
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
                        className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {touched.confirm && errors.confirm ? (
                        <div className="text-gray-800 text-sm ">
                          {errors.confirm}
                        </div>
                      ) : null}
                    </div>

                    <div className="h-[56px] flex mt-44 p-2 gap-6">
                      <img
                        className="hover:opacity-50 cursor-pointer"
                        src={back}
                        alt="previo"
                        onClick={() => setStep(2)}
                      />
                      <button type="submit">
                        <img
                          className="hover:opacity-50 cursor-pointer"
                          src={create}
                          alt="crear cuenta"
                          disabled={isSubmitting}
                        />
                      </button>
                    </div>
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
