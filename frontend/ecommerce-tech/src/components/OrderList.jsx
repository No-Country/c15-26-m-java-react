import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";
import { Link, Navigate, useParams } from "react-router-dom";

const OrderList = () => {
  const { customer } = useContext(MyContext);
  const { customerId } = useParams();
  const [historial, setHistorial] = useState([]);

  const historialAPI = [
    {
      order: {
        orderId: 1,
        date: "2023-12-04",
        pending: true,
        shipmentDate: "2023-12-07",
      },
      orderDetails: [
        {
          id: 1,
          productQuantity: 1,
          price: 287051,
        },
        {
          id: 2,
          productQuantity: 2,
          price: 337706,
        },
      ],
    },
    {
      order: {
        orderId: 2,
        date: "2023-12-05",
        pending: false,
        shipmentDate: "2023-12-05",
      },
      orderDetails: [
        {
          id: 1,
          productQuantity: 3,
          price: 15877,
        },
        {
          id: 2,
          productQuantity: 2,
          price: 3377,
        },
        {
          id: 3,
          productQuantity: 1,
          price: 87966,
        },
      ],
    },
  ];
  useEffect(() => {
    setHistorial(historialAPI);
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
              {historial.map((order) => {
                let totalOrder=0;
                let qtyOrder=order.orderDetails.length;
                order.orderDetails.map(line => {
                 totalOrder+=line.productQuantity*line.price;
                } )
                return (
                  <tr className={order.order.pending ? "bg-red-100 font-medium w-[150px] text-center" : "w-[150px] text-center"} key={order.order.orderId}>
                    <td className="w-[150px]"><Link to={`/order/${order.order.orderId}`}> {order.order.orderId}</Link></td>
                    <td className="w-[150px]">{order.order.date}</td>
                    <td className="w-[150px]">{qtyOrder}</td>
                    <td className="w-[150px]">{totalOrder}</td>
                    <td className="w-[150px]">{order.order.shipmentDate}</td>
                    <td className="w-[150px]">{order.order.pending ? "En proceso" : "Completado"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default OrderList;
