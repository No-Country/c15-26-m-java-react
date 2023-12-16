import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { MyContext } from "../MyContext";

const OrderFormStep1 = ({ setStep, setOrderData }) => {
  const { customer } = useContext(MyContext);
  const initialValues = {
    customer_id: customer?.id ? customer.id : 0,
    address: customer?.id > 0 ? customer?.address : "",
    city: customer?.id > 0 ? customer?.city : "",
    state: customer?.id > 0 ? customer?.state : "",
  };

  const validationSchema = Yup.object({
    address: Yup.string().required("Campo requerido"),
    city: Yup.string().required("Campo requerido"),
    state: Yup.string().required("Campo requerido"),
  });

  const onSubmit = () => {
    setStep(2);
    setOrderData((prev) => ({
      ...prev,
      address: values.address,
      city: values.city,
      state: values.state,
    }));
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
        Confirma la dirección de envío
      </div>

      <div className="text-sm px-1 py-2">
        Tu producto será enviado a la siguiente dirección, puedes modificar los
        campos en caso de que necesites enviarlo a otro domicilio.
      </div>

      <div className="mt-2 mb-6">
        <label
          className=" text-gray-800 text-sm font-semibold"
          htmlFor="address"
        >
          Dirección:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.address && errors.address ? (
          <div className="text-gray-800 text-sm ">{errors.address}</div>
        ) : null}
      </div>

      <div className="mt-2 mb-6">
        <label className=" text-gray-800 text-sm font-semibold" htmlFor="city">
          Localidad:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.city}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.city && errors.city ? (
          <div className="text-gray-800 text-sm ">{errors.city}</div>
        ) : null}
      </div>
      <div className="mt-2 mb-6">
        <label className=" text-gray-800 text-sm font-semibold" htmlFor="state">
          Provincia:
        </label>
        <input
          type="text"
          id="state"
          name="state"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.state}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.state && errors.state ? (
          <div className="text-gray-800 text-sm ">{errors.state}</div>
        ) : null}
      </div>

      <div className="w-[376px] h-[58px] p-2">
        <button
          className="w-[360px] h-[42px] rounded-lg bg-blue-700 text-white text-xl font-semibold hover:opacity-50"
          type="submit"
        >
          Confirmar dirección
        </button>
      </div>
    </form>
  );
};

export default OrderFormStep1;
