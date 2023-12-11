import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import { API_URL } from "../config";

const OrderHeader = ({ id }) => {

  const [order, setOrder] = useState({});
  const [orderCustomer, setOrderCustomer] = useState({});
  const { customer } = useContext(MyContext);

  useEffect(() => {
    const endPoint = API_URL + `order/${id}`;
    axios
      .get(endPoint)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        alert("Ocurrió un error");
        console.log(error);
      });

    setOrderCustomer(customer);
  }, [id]);

  return (
    <div>
      <div className="mt-10 font-extrabold h-10 place-items-center flex place-content-center bg-slate-100 border border-slate-700">{`Orden Nro: ${order.order_id}`}</div>

      <div className="flex flex-wrap place-content-around bg-slate-300 h-10 items-center p-2 border border-slate-700 border-t-0 font-bold gap-3">
        <div>{`Cliente: ${orderCustomer.name} ${orderCustomer.surname}`}</div>
        <div>{`Correo electrónico: ${orderCustomer.email}`}</div>
      </div>

      <div className="flex flex-wrap bg-blue-400 gap-3 border border-slate-700 border-t-0">
        <div className="w-full text-center font-bold">Datos de envío</div>
        <div className="w-full flex place-content-around mb-2">
          <div className="font-medium">{`Dirección: ${order.address}`}</div>
          <div className="font-medium">{`Ciudad: ${order.city}`}</div>
          <div className="font-medium">{`Código Postal: ${order.zip_code}`}</div>
          <div className="font-medium">{`Estado/Provincia: ${order.state}`}</div>
          <div className="font-medium">{`País: ${order.country}`}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
