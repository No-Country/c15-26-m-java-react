import { useContext } from "react";
import { MyContext } from "../MyContext";

const OrderFilter = () => {
  const { priceOrderAsc, updatePriceOrderAsc } = useContext(MyContext);
  //   const [casilla2, setCasilla2] = useState(false);

  const handleCasilla1Change = () => {
    updatePriceOrderAsc(true);
    console.log("asc");
    // setCasilla2(false)
  };

  const handleCasilla2Change = () => {
    // setCasilla2(true);
    updatePriceOrderAsc(false);
    console.log("desc");
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Aquí puedes manejar la lógica cuando el formulario se envía
  //     console.log('Casilla 1:', casilla1);
  //     // console.log('Casilla 2:', casilla2);
  //   };

  return (
    <div className="flex w-[190px] p-4 flex-col place-content-center">
      <h2 className="mb-4">Ordenar por precio</h2>
      <form>
        <div>
          <label>
            <input
              type="radio"
              checked={priceOrderAsc}
              onChange={handleCasilla1Change}
            />
            De menor a mayor
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              checked={!priceOrderAsc}
              onChange={handleCasilla2Change}
            />
            De mayor a menor
          </label>
        </div>
      </form>
    </div>
  );
};

export default OrderFilter;
