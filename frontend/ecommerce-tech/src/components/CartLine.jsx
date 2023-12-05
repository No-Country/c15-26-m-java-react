import { useContext, useState } from "react";
import { MyContext } from "../MyContext";

const CartLine = ({ id, name, qty, price, setTotalCart, calcTotalCart }) => {
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

  return (
    <tr className="p-4 w-12">
      <td className="text-center w-[350px]">{name}</td>
      <td className="w-[190px]flex place-content-center">
          <div className="w-[175px] h-[36px] flex place-content-center items-center">
            <button
              className=" h-6 bg-slate-500 border border-black text-center leading-5 font-bold w-5"
              onClick={() => removeUnit()}
              disabled={cant == 1}
            >
              -
            </button>
            <span className="w-[30px] text-center font-extrabold">{cant}</span>
            <button
              className=" h-6 bg-slate-500 border border-black text-center leading-5 font-bold w-5"
              onClick={() => addUnit()}
            >
              +
            </button>
            <span className="w-[68px] pl-2">
              {qty > 1 ? "unidades" : "unidad"}
            </span>
          </div>
      </td>
      <td className="w-[150px] text-center">{price}</td>
      <td className="w-[150px] text-center">{cant * price}</td>
      <td className="w-[100px]">
        <button className="bg-red-500 rounded-md text-white p-1 " onClick={removeItem}>x</button>
      </td>
    </tr>
  );
};

export default CartLine;
