import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const OrderList = () => {
  const { customer } = useContext(MyContext);
  const { customerId } = useParams();
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const endPoint = API_URL + `order/customer/${customerId}`;
    axios
      .get(endPoint)
      .then((response) => setHistorial(response.data))
      .catch((error) => {
        alert("Ocurrió un error");
        console.log(error);
      });

  }, [customerId]);

  return (
    <>
      {customer.id === 0 || customerId != customer.id ? (
        <Navigate to={"/"} />
      ) : (
        <div>
          <div className="border border-slate-700 border-b-0 h-10 w-full mt-10 text-center font-medium leading-10">{`Listado de Pedidos de ${customer.name} ${customer.surname}`}</div>

          <table className="border border-slate-700 border-t-0 w-full">
            <thead className="p-4 bg-slate-400 h-14">
              <tr>
                <th className="w-[150px]">Número</th>
                <th className="w-[150px]">Fecha</th>
                <th className="w-[150px]">Cantidad de Productos</th>
                <th className="w-[150px]">Total</th>
                <th className="w-[150px]">Fecha de Entrega</th>
                <th className="w-[150px]">Estado</th>
              </tr>
            </thead>
            <tbody>
              { historial.length > 0 ?
              historial.map((order) => {
                let totalOrder = 0;
                let qtyOrder = order.order_details.length;
                order.order_details.map((line) => {
                  totalOrder += line.product_quantity * line.price;
                });
                return (
                  <tr
                    className={
                      order.order.pending
                        ? "bg-red-100 font-medium w-[150px] text-center"
                        : "w-[150px] text-center"
                    }
                    key={order.order.order_id}
                  >
                    <td className="w-[150px]">
                      <Link to={`/order/${order.order.order_id}`}>
                        {" "}
                        {order.order.order_id}
                      </Link>
                    </td>
                    <td className="w-[150px]">{order.order.order_date}</td>
                    <td className="w-[150px]">{qtyOrder}</td>
                    <td className="w-[150px]">{totalOrder}</td>
                    <td className="w-[150px]">{order.order.shipment_date}</td>
                    <td className="w-[150px]">
                      {order.order.pending ? "En proceso" : "Completado"}
                    </td>
                  </tr>
                );
              }) :
              <tr><td className="text-center h-10 font-bold" colSpan="6">NO SE REGISTRAN PEDIDOS</td></tr>
              }
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default OrderList;
