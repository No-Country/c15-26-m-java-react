import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import trash from "../assets/Trash.svg";

const CartLine = ({
  id,
  image,
  name,
  qty,
  price,
  setTotalCart,
  calcTotalCart,
  wrap
}) => {
  const { cart, updateCart, qtyCart, updateQtyCart } = useContext(MyContext);

  const [cant, setCant] = useState(qty);

  const addUnit = () => {
    setCant((cant) => cant + 1);
    adjustItemQty(1);
  };

  const removeUnit = () => {
    setCant((cant) => cant - 1);
    adjustItemQty(-1);
  };

  const adjustItemQty = (dif) => {
    const cartItem = cart.find((item) => item.id === id);
    cartItem.qty = cartItem.qty + dif;
    updateCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    setTotalCart(calcTotalCart(cart));
  };

  const removeItem = () => {
    let newCart = cart.filter((item) => item.id !== id);
    updateCart(newCart);
    updateQtyCart(qtyCart - 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setTotalCart(calcTotalCart(newCart));
  };
  const flex = wrap ? "flex-wrap" : "flex-grow"
  return (
    <div className={`flex ${flex} `}>
      <div className="flex h-[68px] w-[372px] items-center  gap-3">
        <div className="w-[50px] h-[50px] ml-4">
          <img
            src={image}
            className="h-full w-full object-contain object-center"
            alt="image"
          />
        </div>
        <div className="w-[292px] h-[46px] flex flex-col gap-1 p-1">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-sm ">
            {`$ ` + new Intl.NumberFormat().format(price)}
          </div>
        </div>
      </div>

      <div className="flex w-[372px] h-[68px] items-center place-content-between px-2">

        <div className="w-[102px] h-10 flex place-content-center items-center border p-2 rounded-lg border-gray-200">
          <div className="w-[175px] h-[36px] flex place-content-center items-center">
            <button onClick={() => removeUnit()} disabled={cant == 1}>
              <span className="h-6 w-6 font-semibold text-blue-600">-</span>
            </button>
            <span className="w-[38px] h-4 text-center text-sm font-semibold">
              {cant}
            </span>
            <button onClick={() => addUnit()}>
              <span className="h-6 w-6 font-semibold text-blue-600">+</span>
            </button>
          </div>
        </div>

        <div
          className="w-[140px] h-7 flex items-center place-content-between cursor-pointer"
          onClick={removeItem}
        >
          <span className="text-sm text-blue-700 ">Eliminar producto</span>
          <img className="h-6 w-6" src={trash} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartLine;
