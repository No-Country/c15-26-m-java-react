import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import home from '../assets/Home.svg';
import { API_URL } from "../config";
import OrderHeader from "./OrderHeader";
import OrderLine from "./OrderLine";

const OrderDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const endPoint = API_URL + `orderDetail/order/${id}`;
    axios
      .get(endPoint)
      .then((response) => {
        setDetail(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const calcTotalOrder = () => {
    let total = 0;
    detail.map((line) => (total += line.product_quantity * line.price));
    return total;
  };

  return (
    <div className="flex flex-col place-content-center">
      { isLoading ? <Spinner className="h-60 w-60 text-blue-600" /> : 

    <>
        <div className="flex flex-col bg-white rounded-xl">
          <OrderHeader id={id} />
          <table className=" w-full">
            <thead className="bg-blue-800 text-sm text-white h-4">
              <tr>
                <th className="w-[170px]">Producto</th>
                <th className="w-[99px]">Marca</th>
                <th className="w-[185px]">Modelo</th>
                <th className="w-[78px]">Cantidad</th>
                <th className="w-[148px]">Precio Unitario</th>
                <th className="w-[157px]">Precio Total</th>
              </tr>
            </thead>
            <tbody>
              {detail.length > 0 ? (
                detail.map((line) => (
                  <OrderLine
                    key={line.order_detail_id}
                    name={line.product.name}
                    brand={line.product.brand}
                    model={line.product.model}
                    qty={line.product_quantity}
                    price={line.price}
                  />
                ))
              ) : (
                <tr>
                  <td className="text-center h-10 font-bold" colSpan="6">
                    NO HAY DETALLES A MOSTRAR
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr className="w-[957px] h-[72px] ">
                <td className="text-lg text-end" colSpan="2">
                  Total
                </td>
                <td className="pl-8 text-lg font-semibold" colSpan="6">
                  {`$ ` + new Intl.NumberFormat().format(calcTotalOrder())}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="w-full flex gap-10 place-content-center my-10 ">
          <div className=" flex items-center place-content-around bg-white text-blue-600 text-xs sm:text-sm font-semibold p-4 border border-blue-600 h-10 w-[133px] rounded  hover:text-blue-700 hover:border-blue-700">
              <Link className="flex items-center place-content-around" to={"/"}><img className="h-6 w-6" src={home}/>
                <span className="ml-2">Ir a inicio</span></Link>
            </div>
            <div>
            <div
              className=" flex bg-blue-600 text-white text-xs sm:text-sm font-semibold p-4 border border-blue-600 h-10 w-[138px] rounded items-center place-content-around hover:bg-blue-700 hover:border-blue-700"
            >
              <Link to={`/tracking`}>Ver seguimiento</Link>
            </div>
          </div>
        </div>
    </>
}
    </div>
  );
};

export default OrderDetail;
