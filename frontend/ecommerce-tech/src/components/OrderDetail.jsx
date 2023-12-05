import { Link, useParams } from "react-router-dom";
import OrderHeader from "./OrderHeader";
import OrderLine from "./OrderLine";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";

const OrderDetail = () => {
  const { id } = useParams();
  const { customer } = useContext(MyContext);
  const [detail, setDetail] = useState([]);
  const orderDetailsAPI = {
    orderId: 1,
    orderDetails: [
      {
        id: 1,
        product: {
          productName: "item 1",
          brandt:"HP",
          model:"SSS"
        },
        productQuantity: 1,
        price: 287051,
      },
      {
        id: 2,
        product: {
          productName: "item 2",
          brandt:"Lenovo",
          model:"HT45J"
        },
        productQuantity: 2,
        price: 337706,
      },
    ],
  };
  useEffect(() => {
    setDetail(orderDetailsAPI.orderDetails);
  }, [id]);

  const calcTotalOrder = () => {
    let total = 0;
    detail.map((line) => (total += line.productQuantity * line.price));
    return total;
  };
  return (
    <div>
      <OrderHeader id={id} />
      <table className="border border-slate-700 border-t-0 w-full">
        <thead className="p-4 bg-slate-400 h-14">
          <tr>
            <th  className="w-[350px]">Producto</th>
            <th  className="w-[150px]">Marca</th>
            <th className="w-[150px]">Modelo</th>
            <th className="w-[150px]">Cantidad</th>
            <th className="w-[150px]">Precio Unitario</th>
            <th className="w-[150px]">Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((line) => (
            <OrderLine
              key={line.id}
              name={line.product.productName}
              brandt={line.product.brandt}
              model={line.product.model}
              qty={line.productQuantity}
              price={line.price}
            />
          ))}
        </tbody>
        <tfoot>
          <tr className="p-4 bg-blue-400 h-10">
            <td className="text-end font-bold" colSpan="5">Total</td>
            <td  className="w-150px font-bold text-center">{calcTotalOrder()}</td>
          </tr>
        </tfoot>
      </table>

      <div className="w-full gap-5 m-5 flex place-content-center">
        <div className="p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200">
          <Link to={"/"}>Home</Link>
        </div>
        <div className={customer.id === 0 ? "opacity-0" : "opacity-100 p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200"}>
          <Link to={`/orders/${customer.id}`}>Historial de Pedidos</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
