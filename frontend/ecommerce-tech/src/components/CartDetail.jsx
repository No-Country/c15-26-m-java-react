import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";
import CartLine from "./CartLine";
import { useNavigate } from "react-router-dom";
import ActionButton from "./ActionButton";
import truck from "../assets/truck.svg";

const calcTotalCart = (cart) => {
  let total = 0;
  cart.map((item) => (total += item.qty * item.price));
  return total;
};

const CartDetail = () => {
  const { cart, updateShopping } = useContext(MyContext);
  const [totalCart, setTotalCart] = useState(calcTotalCart(cart));
  const [wrap, setWrap] = useState(false)
  const navigate = useNavigate();
  let shippingCost = 0;

  const endShopping = () => {
    updateShopping(true);
    navigate("/checkout");
  };

  useEffect(() => {
    setWrap( window.innerWidth<500 ? true : false)
  })
  

  return (
    <div className="flex flex-wrap gap-5">
      <div className="flex p-6 md:w-[714px] w-[400px] h-[420px] flex-col  bg-white rounded-xl">
        <h1 className=" font-bold text-2xl my-8 ">Mi carrito</h1>
        <div className="flex flex-col gap-3">
          <div className="w-[682px]">
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
                wrap={wrap}
              />
            ))}
          </div>
          {/* <div className="w-[372px] h-[68px]  px-3 py-2 flex gap-3  ">
          <div className="w-[50px] h-[50px] flex items-center place-content-center">
            <img
              src={truck}
              className="h-6 w-6 object-contain object-center "
              alt="image"
            />
          </div>
          <div className="w-[292px] h-[46px] flex flex-col gap-1 p-1">
            <div className="text-sm font-semibold">Envío</div>
            <div className="text-sm ">
              {shippingCost === 0
                ? "A calcular"
                : `$ ` + new Intl.NumberFormat().format(shippingCost)}
            </div>
          </div>
        </div> */}
        </div>
      </div>

      <div className="w-[409px] h-[357px] p-4  bg-white rounded-xl">
        <span className="text-2xl font-semibold">Total de la compra</span>
        <div className="underline text-sm text-blue-700 mt-10">
          <a href="#">Tengo un cupón de descuento</a>
        </div>

        <div className="mt-10">
          <h1 className="text-lg">Total a pagar</h1>
          <div className="text-2xl font-semibold">
            {`$ ` + new Intl.NumberFormat().format(totalCart)}
          </div>
        </div>

        <div className="w-full flex place-content-center mt-16">
          <ActionButton text="Comprar ahora" action={endShopping} />
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
