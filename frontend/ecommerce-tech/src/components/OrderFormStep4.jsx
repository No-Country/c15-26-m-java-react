import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import ActionButton from "./ActionButton";

const OrderFormStep4 = ({ orderData, setOrderData }) => {
  const { cart, updateCart, updateQtyCart } = useContext(MyContext);

  const navigate = useNavigate();

  const initialValues = {
    card_number: "",
    expiration_date: "",
    cvv: "",
  };

  const validationSchema = Yup.object({
    card_number: Yup.string().required("Campo requerido"),
    expiration_date: Yup.string().required("Campo requerido"),
    cvv: Yup.string().required("Campo requerido"),
  });

  const onSubmit = () => {
    setOrderData((prev) => ({
      ...prev,
      card_number: values.card_number,
      expiration_date: values.expiration_date,
      cvv: values.cvv,
    }));

    // console.log("datos de la orden", orderData);

    const endPoint = API_URL + "order/create";

    axios
      .post(endPoint, orderData)
      .then((res) => {
        let order_id = res.data.order_id;
        console.log("orden creada!");

        let orderProducts = {
          order_id,
          order_details: [],
        };

        cart.map((item) => {
          orderProducts.order_details.push({
            product_quantity: item.qty,
            product_id: item.id,
            price: item.price,
          });
        });

        const endPoint = API_URL + "orderDetail/save";
        axios
          .post(endPoint, orderProducts)
          .then((res) => {
            Alert(
              "¡Tu pago se realizó con éxito!",
              "Tu compra llegará en la semana. Estos datos se enviarán a tu correo y puedes dar seguimiento desde nuestro sitio.",
              "",
              "success",
              "Ver compra"
            );

            console.log("detalles guardados");
            console.log(res);
          })
          .catch((error) => {
            Alert(
              "¡Lo sentimos! Tu pago no se realizó.",
              "",
              `<p>Tuvimos una interrupción al momento de procesar tus datos. Por favor, inténtalo de nuevo.</p><p >Comprueba que tus datos sean correctos. Ante cualquier duda envía un mail a <u>soporte@bluedragonstone.com</u></p> `,
              "error",
              "Volver a intentar"
            );
            console.log(error);
          });

        updateCart([]);
        updateQtyCart(0);
        localStorage.removeItem("cart");
        navigate(`/order/${order_id}`);
      })
      .catch((error) => {
        Alert(
          "¡Lo sentimos! Tu pago no se realizó.",
          "",
          `<p>Tuvimos una interrupción al momento de procesar tus datos. Por favor, inténtalo de nuevo.</p><p >Comprueba que tus datos sean correctos. Ante cualquier duda envía un mail a <u>soporte@bluedragonstone.com</u></p> `,
          "error",
          "Volver a intentar"
        );
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-4">
      <div className="font-semibold text-2xl">Datos de pago</div>

      <div className="text-sm px-1 py-2">
        Completa los siguientes campos. Todos tus datos bancarios serán
        confidenciales.
      </div>

      <div className="mt-2 mb-6">
        <label
          className=" text-gray-800 text-sm font-semibold"
          htmlFor="card_number"
        >
          Número de la tarjeta
        </label>
        <input
          type="text"
          id="card_number"
          name="card_number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.card_number}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.card_number && errors.card_number ? (
          <div className="text-gray-800 text-sm ">{errors.card_number}</div>
        ) : null}
      </div>

      <div className="mt-2 mb-6">
        <label
          className=" text-gray-800 text-sm font-semibold"
          htmlFor="expiration_date"
        >
          Fecha de caducidad
        </label>
        <input
          type="text"
          id="expiration_date"
          name="expiration_date"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.expiration_date}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.expiration_date && errors.expiration_date ? (
          <div className="text-gray-800 text-sm ">{errors.expiration_date}</div>
        ) : null}
      </div>

      <div className="mt-2 mb-6">
        <label className=" text-gray-800 text-sm font-semibold" htmlFor="cvv">
          cvv
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cvv}
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.cvv && errors.cvv ? (
          <div className="text-gray-800 text-sm ">{errors.cvv}</div>
        ) : null}
      </div>

      <div className="w-[376px] h-[58px] p-2">
        {/* <button
          className="w-[360px] h-[42px] rounded-lg bg-blue-700 text-white text-xl font-semibold hover:opacity-50"
          type="submit"
        >
          Pagar
        </button> */}
        <ActionButton text="Pagar" type="submit" />
      </div>
    </form>
  );
};

export default OrderFormStep4;
