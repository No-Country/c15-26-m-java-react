import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { Link, useNavigate } from "react-router-dom";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const OrderForm = () => {
  const navigate = useNavigate();

  const { customer, cart, updateCart, updateQtyCart } = useContext(MyContext);

  

  const initialValues = {
    customerId: customer?.id ? customer.id : 0,
    orderDate: formatDate(new Date()),
    completed: false,
    shipmentDate: formatDate(new Date()),
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    creditCardType: "Visa",
    creditCardNumber: "",
    cvv: "",
  };

  const validationSchema = Yup.object({
    shipmentDate: Yup.date()
      .min(formatDate(new Date()), "La fecha de entrega debe ser hoy o futura")
      .required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    city: Yup.string().required("Campo requerido"),
    state: Yup.string().required("Campo requerido"),
    country: Yup.string().required("Campo requerido"),
    zipCode: Yup.string().required("Campo requerido"),
    creditCardType: Yup.string().required("Campo requerido"),
    creditCardNumber: Yup.string().required("Campo requerido"),
    cvv: Yup.string().required("Campo requerido"),
  });

  const onSubmit = () => {
    // Lógica para manejar la confirmación del pedido

    console.log("Datos del pedido:", values);

    const orderAPI = {
      orderId: 1,
      customerId: 1,
      orderDate: "2023-12-01T21:27:26.107Z",
      completed: false,
      shipmentDate: "2023-12-02",
      address: "Reg.12 de Infantería",
      city: "Santa Fe",
      state: "Santa Fe",
      country: "Argentina",
      zipCode: "3000",
      creditCardType: "Visa",
      creditCardNumber: "123456",
      cvv: "888",
    };

    alert("Confirmado");
    // console.log(orderAPI);
    let orderProducts = {
      orderId: orderAPI.orderId,
      orderDetails: [],
    };

    cart.map((item) => {
      orderProducts.orderDetails.push({
        productId: item.id,
        productQuantity: item.qty,
        price: item.price,
      });
      console.log(orderProducts);

      updateCart([]);
      updateQtyCart(0);
      localStorage.removeItem("cart");
      navigate(`/order/${orderAPI.orderId}`);
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
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="shipmentDate">Fecha de Entrega:</label> </div>
            <div className="md:w-2/3">
            <input
              type="date"
              id="shipmentDate"
              name="shipmentDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shipmentDate}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.shipmentDate && errors.shipmentDate ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.shipmentDate}</div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="address">Dirección:</label></div>
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
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.address}</div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="city">Ciudad:</label></div>
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
            {touched.city && errors.city ? <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.city}</div> : null}
          </div>

          <div className="md:w-1/3">
            <label  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"htmlFor="state">Estado/Provincia:</label></div>
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
            {touched.state && errors.state ? <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.state}</div> : null}
          </div>

          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="country">País:</label></div>
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
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.country}</div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="zipCode">Código postal:</label></div>
            <div className="md:w-2/3">
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.zipCode}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.zipCode && errors.zipCode ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.zipCode}</div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="creditCardType">Tarjeta de Crédito:</label></div>
            <div >
            <select
              id="creditCardType"
              name="creditCardType"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.creditCardType}
            >
              <option value="Visa">Visa</option>
              <option value="Mastecard">Mastercard</option>
              <option value="American">American Express</option>
            </select>
            {touched.creditCardType && errors.creditCardType ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.creditCardType}</div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="creditCardNumber">Número:</label></div>
            <div className="md:w-2/3">
            <input
              type="text"
              id="creditCardNumber"
              name="creditCardNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.creditCardNumber}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            {touched.creditCardNumber && errors.creditCardNumber ? (
              <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.creditCardNumber}</div>
            ) : null}
          </div>

          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="cvv">Código CVV:</label></div>
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
            {touched.cvv && errors.cvv ? <div className="block text-red-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{errors.cvv}</div> : null}
          </div>
          <div className="flex w-full place-content-center m-4">
          <button className="p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200" type="submit">Confirmar Pago</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
