import { Option, Select } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import payments from "../assets/payments.svg";
import ActionButton from "./ActionButton";
const OrderFormStep2 = ({ setStep, setOrderData }) => {
  const initialValues = {
    card_type: "débito",
  };

  const validationSchema = Yup.object({
    card_type: Yup.string().required("Campo requerido"),
  });

  const onSubmit = () => {
    setStep(3);
    setOrderData((prev) => ({
      ...prev,
      card_type: values.card_type,
    }));    
  };

  const {
    handleSubmit,
    handleBlur,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-4">
      <div className="font-semibold text-2xl">Selecciona el método de pago</div>

      <div className="w-[372px] h-[152px] mt-3 ">
        <img src={payments} alt="metodos de pago" />
      </div>

      <div className="w-[372px] h-[152px] mt-3">
        <Select
          label="Métodos de pago"
          color="blue"
          id="card_type"
          name="card_type"
          onChange={(value) => setFieldValue("card_type", value)}
          onBlur={handleBlur}
          value={values.card_type}
        >
          <Option value="débito">Tarjeta de débito</Option>
          <Option value="crédito">Tarjeta de crédito</Option>
        </Select>
        {touched.card_type && errors.card_type ? (
          <div className="text-gray-800 text-sm ">{errors.card_type}</div>
        ) : null}
      </div>
      <div className="w-[376px] h-[58px] mt-12">
        <ActionButton text="Ir a pagar" type="submit" />
      </div>
    </form>
  );
};

export default OrderFormStep2;
