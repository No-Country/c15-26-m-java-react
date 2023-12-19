import { useFormik } from "formik";
import * as Yup from "yup";
import ActionButton from "./ActionButton";

const OrderFormStep3 = ({setStep, setOrderData}) => {

    const initialValues = {
    card_owner: "",
    owner_dni: "",
  };
  
   const validationSchema = Yup.object({
    card_owner: Yup.string().required("Campo requerido"),
    owner_dni: Yup.string()
      .matches(/^\d{8}$/, "DNI inválido")
      .required("Campo requerido"),
  });

  const onSubmit = () => {
    setStep(4);
    setOrderData((prev)=>({
        ...prev,
        card_owner : values.card_owner,
        owner_dni : values.owner_dni
    }))
  };

 const {  handleSubmit  , handleChange , handleBlur , values , touched , errors } =
  useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-4">
            
                <div className="font-semibold text-2xl">Datos de pago</div>

                <div className="text-sm px-1 py-2">
                  Completa los siguientes campos. Todos tus datos bancarios
                  serán confidenciales.
                </div>

                <div className="mt-2 mb-10">
                  <label
                    className=" text-gray-800 text-sm font-semibold"
                    htmlFor="card_owner"
                  >
                    Titular de la tarjeta
                  </label>
                  <input
                    type="text"
                    id="card_owner"
                    name="card_owner"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.card_owner}
                    className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {touched.card_owner && errors.card_owner ? (
                    <div className="text-gray-800 text-sm ">
                      {errors.card_owner}
                    </div>
                  ) : null}
                </div>

                <div className="mt-2 mb-10">
                  <label
                    className=" text-gray-800 text-sm font-semibold"
                    htmlFor="owner_dni"
                  >
                    DNI:
                  </label>
                  <input
                    type="text"
                    id="owner_dni"
                    name="owner_dni"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.owner_dni}
                    className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {touched.owner_dni && errors.owner_dni ? (
                    <div className="text-gray-800 text-sm ">
                      {errors.owner_dni}
                    </div>
                  ) : null}
                </div>

                <div className="w-[376px] h-[58px] p-2 mt-20">
                  {/* <button
                    className="w-[360px] h-[42px] rounded-lg bg-blue-700 text-white text-xl font-semibold hover:opacity-50"
                    type="submit"
                  >
                    Continuar
                  </button> */}
                  <ActionButton text="Continuar" type="submit" />
                </div>
           
          </form>
  )
}

export default OrderFormStep3