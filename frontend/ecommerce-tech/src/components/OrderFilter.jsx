import { useContext } from "react";
import { MyContext } from "../MyContext";

const OrderFilter = () => {
  const { priceOrderAsc, updatePriceOrderAsc } = useContext(MyContext);

  return (
    <div className="flex w-[190px] p-4 flex-col place-content-center">
      <h2 className="mb-4">Ordenar por precio</h2>
      <form>
        <div>
          <label>
            <input
              type="radio"
              checked={priceOrderAsc}
              onChange={() => {
                updatePriceOrderAsc(true);
              }}
            />
            De menor a mayor
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              checked={!priceOrderAsc}
              onChange={() => {
                updatePriceOrderAsc(false);
              }}
            />
            De mayor a menor
          </label>
        </div>
      </form>
    </div>
  );
};

export default OrderFilter;
