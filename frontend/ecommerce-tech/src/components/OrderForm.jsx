import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const OrderForm = () => {
  const navigate = useNavigate();

  const { customer, cart, updateCart, updateQtyCart } =
    useContext(MyContext);

  const initialValues = {
    customer_id: customer?.id ? customer.id : 0,
    order_date: formatDate(new Date()),
    completed: false,
    shipment_date: formatDate(new Date()),
    address: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    credit_card_type: "Visa",
    credit_card_number: "",
    cvv: "",
  };

  const validationSchema = Yup.object({
    shipment_date: Yup.date()
      .min(formatDate(new Date()), "La fecha de entrega debe ser hoy o futura")
      .required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    city: Yup.string().required("Campo requerido"),
    state: Yup.string().required("Campo requerido"),
    country: Yup.string().required("Campo requerido"),
    zip_code: Yup.string().required("Campo requerido"),
    credit_card_type: Yup.string().required("Campo requerido"),
    credit_card_number: Yup.string().required("Campo requerido"),
    cvv: Yup.string().required("Campo requerido"),
  });

  const onSubmit = () => {
  
    const endPoint = API_URL + "order/create";

    axios
      .post(endPoint, values)
      .then((res) => {
        let order_id = res.data.order_id;
        alert("Confirmado");

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
          .then((res) => console.log(res.data))
          .catch((error) => {
            alert("ocurrió un error");
            console.log(error);
          });

        updateCart([]);
        updateQtyCart(0);
        localStorage.removeItem("cart");
        navigate(`/order/${order_id}`);
      })
      .catch((error) => {
        alert("Ocurrió un error!");
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
      <div className="m-4 w-9/12 place-self-center place-content-center p-6 flex flex-wrap border border-black">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="shipment_date"
            >
              Fecha de Entrega:
            </label>{" "}
          </div>
          <div className="md:w-2/3">
            <input
              type="date"
              id="shipment_date"
              name="shipment_date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shipment_date}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.shipment_date && errors.shipment_date ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.shipment_date}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="address"
            >
              Dirección:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.address && errors.address ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.address}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="city"
            >
              Ciudad:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.city && errors.city ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.city}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="state"
            >
              Estado/Provincia:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="state"
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.state && errors.state ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.state}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="country"
            >
              País:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="country"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.country && errors.country ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.country}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="zip_code"
            >
              Código postal:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="zip_code"
              name="zip_code"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.zip_code}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.zip_code && errors.zip_code ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.zip_code}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="credit_card_type"
            >
              Tarjeta de Crédito:
            </label>
          </div>
          <div>
            <select
              id="credit_card_type"
              name="credit_card_type"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.credit_card_type}
            >
              <option value="Visa">Visa</option>
              <option value="Mastecard">Mastercard</option>
              <option value="American">American Express</option>
            </select>
            {touched.credit_card_type && errors.credit_card_type ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.credit_card_type}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="credit_card_number"
            >
              Número:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="credit_card_number"
              name="credit_card_number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.credit_card_number}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.credit_card_number && errors.credit_card_number ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.credit_card_number}
              </div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="cvv"
            >
              Código CVV:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="cvv"
              name="cvv"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cvv}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.cvv && errors.cvv ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {errors.cvv}
              </div>
            ) : null}
          </div>
          <div className="flex w-full place-content-center m-4">
            <button
              className="p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200"
              type="submit"
            >
              Confirmar Pago
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
