import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { Radio } from "@material-tailwind/react";

const OrderFilter = () => {
  const { priceOrderAsc, updatePriceOrderAsc } = useContext(MyContext);
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div className="flex w-[190px] p-2 flex-col place-content-center">
      <h2 className="font-bold cursor-pointer text-blue-600" onClick={handleClick}>Ordenar por precio</h2>
      <form className={visible?"":"hidden"}>
        <div>
        <Radio
              checked={priceOrderAsc}
              className="h-2 w-2"
              color="blue"
              onChange={() => {
                updatePriceOrderAsc(true);
              }}
            />
          <label className="text-sm">
           
            De menor a mayor
          </label>
        </div>
        <div>
        <Radio
              checked={!priceOrderAsc}
              className="h-2 w-2"
              color="blue"
              onChange={() => {
                updatePriceOrderAsc(false);
              }}
            />
          <label className="text-sm">
            
            De mayor a menor
          </label>
        </div>
      </form>
    </div>
  );
};

export default OrderFilter;
