import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";
import noImage from "../assets/noimage.png";

const ItemCard = ({ id, name, brand, model, price, discount, images }) => {
  const promo = Math.ceil(price * (1 - discount));
  const percent = discount * 100;
  const { cart, updateCart, qtyCart, updateQtyCart } = useContext(MyContext);
  const [qty, setQty] = useState(1);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  const addToCart = () => {
    alert(`Comprando ${qty} unidades de ${name}`);
    const itemToAdd = {
      id,
      name,
      qty,
      price: promo,
    };
    let newCart = cart;
    let indiceItemEnCarro = newCart.findIndex((bought) => bought.id === id);
    if (indiceItemEnCarro === -1) {
      newCart.push(itemToAdd);
      updateQtyCart(qtyCart + 1);
    } else {
      newCart[indiceItemEnCarro].qty += qty;
    }
    updateCart(newCart);

    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="w-[250px] p-4 border shadow border-gray-500 rounded">
      <div className="m-1 p-1 ">
        <img
          src={images?.length > 0 ? images[0] : noImage}
          alt="productImage"
        />
      </div>
      <div className="p-2">
        <h2 className="font-bold text-stone-600 text-justify">{name}</h2>
        <h3 className="font-bold">{brand}</h3>
        <h4 className="italic">{model}</h4>
        <div className="flex h-[100px] place-content-center flex-wrap p-2">
          <div className="flex gap-2 items-center mb-2">
            <span
              className={discount == 0 ? "text-lg font-bold text-blue-950" : ""}
            >{`$ ${price}`}</span>
            <span
              className={
                discount != 0 ? "bg-red-500 p-1 font-extrabold " : "hidden"
              }
            >{`${percent} % Off`}</span>
          </div>
          <div>
            <span
              className={discount != 0 ? "text-lg" : "hidden"}
            >{`Promo: $`}</span>
            <span
              className={
                discount != 0 ? "text-lg font-bold text-blue-950" : "hidden"
              }
            >
              {" "}
              {`${promo}`}
            </span>
          </div>
        </div>
      </div>

      <div className="flex place-content-center">
        <div className="w-[175px] h-[36px] border border-black flex place-content-center items-center">
          <button
            className=" h-6 bg-slate-500 border border-black text-center leading-5 font-bold w-5"
            onClick={() => addProduct(-1)}
            disabled={qty == 1}
          >
            -
          </button>
          <span className="w-[30px] text-center font-extrabold">{qty}</span>
          <button
            className=" h-6 bg-slate-500 border border-black text-center leading-5 font-bold w-5"
            onClick={() => addProduct(+1)}
          >
            +
          </button>
          <span className="w-[68px] pl-2">
            {qty > 1 ? "unidades" : "unidad"}
          </span>
        </div>
      </div>

      <div className="flex m-4 pr-2 justify-around">
        <Link to={`/item/${id}`}>
          <button className="h-10 p-2 text-center rounded-lg bg-green-400">
            Detalles
          </button>
        </Link>
        <button
          className="h-10 p-2 text-center rounded-lg bg-red-400"
          onClick={addToCart}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
