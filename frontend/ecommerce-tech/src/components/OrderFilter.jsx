import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { Radio } from "@material-tailwind/react";
import order_icon from '../assets/order_icon.svg'

const OrderFilter = () => {
  const { priceOrderAsc, updatePriceOrderAsc } = useContext(MyContext);
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div className="flex w-[263px] p-3 flex-col mr-3 ">
      <div className="flex mb-3 place-content-end cursor-pointer" onClick={handleClick}>
        <img src={order_icon} className="h-6 w-6 mr-1" />
        <h2 className="font-bold  text-blue-600">Ordenar productos</h2>
      </div>
      <div  className={visible ? "z-10" : "-z-10"}>
        <form className="w-[252px] h-[104px] bg-white flex flex-col px-3 py-2 rounded-lg border items-center place-content-center shadow ">
          <div className="w-[204px] h-10">
          <Radio
                checked={priceOrderAsc}
                className="h-2 w-2"
                color="blue"
                onChange={() => {
                  updatePriceOrderAsc(true);
                  setVisible(false)
                }}
              />
            <label className="text-sm">
             
              Precio de menor a mayor
            </label>
          </div>
          <div className="w-[204px] h-10">
          <Radio
                checked={!priceOrderAsc}
                className="h-2 w-2"
                color="blue"
                onChange={() => {
                  updatePriceOrderAsc(false);
                  setVisible(false)
                }}
              />
            <label className="text-sm">
              
              Precio de mayor a menor
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderFilter;
