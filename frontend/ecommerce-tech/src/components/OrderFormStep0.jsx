import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { MyContext } from "../MyContext";
import ActionButton from "./ActionButton";

const OrderFormStep1 = ({ setStep }) => {
  const { customer } = useContext(MyContext);
  const initialValues = {
    name: customer?.id > 0 ? customer?.name : "",
    email: customer?.id > 0 ? customer?.email : "",
    phone: customer?.id > 0 ? customer?.phone : "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    email: Yup.string()
      .email("email electrónico no válido")
      .required("Campo requerido"),
    phone: Yup.string().matches(/^[0-9]*$/, "Número de teléfono inválido").required("Campo requerido"),
  });

  const onSubmit = () => {
    setStep(1);
  };

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-4">
      <div className="font-semibold text-2xl">
        Comprando como invitado
      </div>

      <div className="text-sm px-1 py-2">
      Recuerda que tus datos no se almacenarán y solo podrás hacer seguimiento de tus productos con las empresas de envío externas. 
      </div>

      <div className="mt-2 mb-6">
        <label
          className=" text-gray-800 text-sm font-semibold"
          htmlFor="name"
        >
          Nombre y Apellido
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.name && errors.name ? (
          <div className="text-gray-800 text-sm ">{errors.name}</div>
        ) : null}
      </div>

      <div className="mt-2 mb-6">
        <label className=" text-gray-800 text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.email && errors.email ? (
          <div className="text-gray-800 text-sm ">{errors.email}</div>
        ) : null}
      </div>
      <div className="mt-2 mb-6">
        <label className=" text-gray-800 text-sm font-semibold" htmlFor="phone">
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.phone && errors.phone ? (
          <div className="text-gray-800 text-sm ">{errors.phone}</div>
        ) : null}
      </div>

      <div className="w-[376px] h-[58px] p-2">
        {/* <button
          className="w-[360px] h-[42px] rounded-lg bg-blue-700 text-white text-xl font-semibold hover:opaemail-50"
          type="submit"
        >
          Continuar
        </button> */}
        <ActionButton text="Continuar" type="submit" />
      </div>
    </form>
  );
};

export default OrderFormStep1;
