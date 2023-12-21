import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import { API_URL } from "../config";

const OrderHeader = ({ id }) => {

  const [order, setOrder] = useState({});
  const { customer } = useContext(MyContext);

  useEffect(() => {
    const endPoint = API_URL + `order/${id}`;
    axios
      .get(endPoint)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  return (
    <div className="w-[400px] h-[352px] lg:w-[956px] lg:h-[276px] pt-8 px-10 ">
      <div className="h-10 text-lg font-semibold texgray-900 ">Orden de compra</div>
      <div className="w-[400px] lg:w-[820px] h-[140px] flex flex-wrap  place-content-between ">
        <div className="w-[320px] h-[140px] flex flex-col gap-2 p-2 ">
          <div className="w-[320px] h-[25px] ">
            <span className="text-sm font-semibold text-gray-800: ">Número de orden: </span>
            <span className="text-sm text-gray-800: ">{order.order_id}</span>
          </div>
          <div className="w-[320px] h-[25px] ">
            <span className="text-sm font-semibold text-gray-800: ">Nombre de cliente: </span>
            <span className="text-sm text-gray-800: ">{customer.id > 0? customer.name : "invitado"}</span>
          </div>
          <div className="w-[320px] h-[25px] ">
            <span className="text-sm font-semibold text-gray-800: ">Email: </span>
            <span className="text-sm text-gray-800: ">{customer.id > 0? customer.email : "n/d"}</span>
          </div>
          <div className="w-[320px] h-[25px] ">
            <span className="text-sm font-semibold text-gray-800: ">Teléfono: </span>
            <span className="text-sm text-gray-800: ">{customer.id > 0? customer.phone : "n/d"}</span>
          </div>
        </div>

        <div className="w-[320px] h-[140px] flex flex-col gap-2 p-2">
          <div className="w-[320px] h-[25px] ">
            <span className="text-sm font-semibold text-gray-800: ">Dirección: </span>
            <span className="text-sm text-gray-800: ">{order.address}</span>
          </div>
          <div className="w-[320px] h-[25px] ">
            <span className="text-sm font-semibold text-gray-800: ">Ciudad: </span>
            <span className="text-sm text-gray-800: ">{order.city}</span>
          </div>
          <div className="w-[320px] h-[25px] ">
            <span className="text-sm font-semibold text-gray-800: ">Provincia: </span>
            <span className="text-sm text-gray-800: ">{order.state}</span>
          </div>
        </div>
      </div>
      

    

      
    </div>
  );
};

export default OrderHeader;
