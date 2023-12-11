import { useContext } from "react";
import { MyContext } from "../MyContext";

const OrderFilter = () => {
  const { priceOrderAsc, updatePriceOrderAsc } = useContext(MyContext);

  return (
    <div className="flex w-[190px] p-4 flex-col place-content-center">
      <h2 className="mb-4 font-bold">Ordenar por precio</h2>
      <form>
        <div>
        <input
              type="radio"
              checked={priceOrderAsc}
              onChange={() => {
                updatePriceOrderAsc(true);
              }}
            />
          <label className="text-sm ml-2">
           
            De menor a mayor
          </label>
        </div>
        <div>
        <input
              type="radio"
              checked={!priceOrderAsc}
              onChange={() => {
                updatePriceOrderAsc(false);
              }}
            />
          <label className="text-sm ml-2">
            
            De mayor a menor
          </label>
        </div>
      </form>
    </div>
  );
};

export default OrderFilter;
