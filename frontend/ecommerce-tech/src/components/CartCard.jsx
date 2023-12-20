import { useContext, useState } from "react";
import truck from "../assets/truck.svg";
import { MyContext } from "../MyContext";
import CartLine from "./CartLine";

 

const CartCard = () => {
  const { cart } = useContext(MyContext);
  let shippingCost = 0;

  const calcTotalCart = (cart) => {
    let total = 0;
    cart.map((item) => (total += item.qty * item.price));
    return total;
  };
  
  const [totalCart, setTotalCart] = useState(calcTotalCart(cart));
  return (
    <div className="w-[409px] p-4 flex flex-col justify-between place-content-center bg-white rounded">
      <h1 className="w-[372px] h-[26px] font-semibold mt-3 mb-8 text-2xl">
        Tus productos
      </h1>
      <div className="flex flex-col gap-3">
        <div>
          {cart.map((item) => (
            <CartLine
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              qty={item.qty}
              setTotalCart={setTotalCart}
              calcTotalCart={calcTotalCart}
              wrap={true}
            />
          ))}
        </div>
        <div className="w-[372px] h-[68px]  px-3 py-2 flex gap-3  ">
          <div className="w-[50px] h-[50px] flex items-center place-content-center">
            <img
              src={truck}
              className="h-6 w-6 object-contain object-center "
              alt="image"
            />
          </div>
          <div className="w-[292px] h-[46px] flex flex-col gap-2 p-1">
            <div className="text-sm font-semibold">Envío</div>
            <div className="text-sm ">
              {shippingCost === 0
                ? "A calcular"
                : `$ ` + new Intl.NumberFormat().format(shippingCost)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-lg">Total a pagar</h1>
        <div className="text-2xl font-semibold">
          {`$ ` + new Intl.NumberFormat().format(totalCart)}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
