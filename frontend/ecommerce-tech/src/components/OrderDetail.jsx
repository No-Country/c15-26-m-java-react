import { Link, useParams } from "react-router-dom";
import OrderHeader from "./OrderHeader";
import OrderLine from "./OrderLine";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import { API_URL } from "../config";

const OrderDetail = () => {
  const { id } = useParams();
  const { customer } = useContext(MyContext);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const endPoint = API_URL + `orderDetail/order/${id}`;
    axios
      .get(endPoint)
      .then((response) => setDetail(response.data))
      .catch((error) => {
        alert("Ocurrió un error");
        console.log(error);
      });
  }, [id]);

  const calcTotalOrder = () => {
    let total = 0;
    detail.map((line) => (total += line.product_quantity * line.price));
    return total;
  };
  return (
    <div>
      <OrderHeader id={id} />
      <table className="border border-slate-700 border-t-0 w-full">
        <thead className="p-4 bg-slate-400 h-14">
          <tr>
            <th className="w-[350px]">Producto</th>
            <th className="w-[150px]">Marca</th>
            <th className="w-[150px]">Modelo</th>
            <th className="w-[150px]">Cantidad</th>
            <th className="w-[150px]">Precio Unitario</th>
            <th className="w-[150px]">Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {detail.length > 0 ?
          detail.map((line) => (
            <OrderLine
              key={line.order_detail_id}
              name={line.product.name}
              brand={line.product.brand}
              model={line.product.model}
              qty={line.product_quantity}
              price={line.price}
            />
          )):
          <tr>
            <td className="text-center h-10 font-bold" colSpan="6">NO HAY DETALLES A MOSTRAR</td>
          </tr>
          }
        </tbody>
        <tfoot>
          <tr className="p-4 bg-blue-400 h-10">
            <td className="text-end font-bold" colSpan="5">
              Total
            </td>
            <td className="w-150px font-bold text-center">
              {calcTotalOrder()}
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="w-full gap-5 m-5 flex place-content-center">
        <div className="p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200">
          <Link to={"/"}>Home</Link>
        </div>
        <div
          className={
            customer.id === 0
              ? "opacity-0"
              : "opacity-100 p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200"
          }
        >
          <Link to={`/orders/${customer.id}`}>Historial de Pedidos</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
