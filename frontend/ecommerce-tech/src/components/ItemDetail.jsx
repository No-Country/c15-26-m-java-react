import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../MyContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import noImage from "../assets/noimage.png";
import { API_URL } from "../config";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const [qty, setQty] = useState(1);

  const { id } = useParams();

  const { cart, updateCart, qtyCart, updateQtyCart } = useContext(MyContext);
  const promo = Math.ceil(item.price * (1 - item.discount));
  const percent = item.discount * 100;

  const addProduct = (num) => {
    setQty(qty + num);
  };

  const addToCart = () => {
    alert(`Comprando ${qty} unidades de ${item.name}`);
    const itemToAdd = {
      id: item.id,
      name: item.name,
      qty,
      price: promo,
    };
    let newCart = cart;
    let indiceItemEnCarro = newCart.findIndex(
      (bought) => bought.id === item.id
    );
    if (indiceItemEnCarro === -1) {
      newCart.push(itemToAdd);
      updateQtyCart(qtyCart + 1);
    } else {
      newCart[indiceItemEnCarro].qty += qty;
    }
    updateCart(newCart);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    const endPoint = API_URL + `product/${id}`;
    axios
      .get(endPoint)
      .then((response) => setItem(response.data))
      .catch((error) => {
        console.log(error);
        alert("ocurrió un error");
      });
  }, [id]);

  return (
    <section className=" bg-yellow-300 w-[400px] flex flex-grow place-content-center border border-black items-center">
      <div className="w-[350px] m-4 p-4 border shadow bg-slate-100 border-gray-500 rounded">
        <div className="flex items-center">
          <div className="m-1 p-1 w-[150px]">
            <img
              src={item?.images?.length > 0 ? item?.images[0] : noImage}
              alt="productImage"
            />
          </div>
          <div className="p-2 w-[150px]">
            <h2 className="font-bold text-stone-600 text-justify">
              {item.name}
            </h2>
            <h3 className="font-bold">{item.brand}</h3>
            <h4 className="italic">{item.model}</h4>
          </div>
        </div>
        <div className="flex h-[100px] place-content-center flex-wrap p-2">
          <div className="flex gap-2 items-center mb-2">
            <span
              className={
                item.discount == 0 ? "text-lg font-bold text-blue-950" : ""
              }
            >{`$ ${item.price}`}</span>
            <span
              className={
                item.discount != 0 ? "bg-red-500 p-1 font-extrabold " : "hidden"
              }
            >{`${percent} % Off`}</span>
          </div>
          <div>
            <span
              className={item.discount != 0 ? "text-lg" : "hidden"}
            >{`Promo: $`}</span>
            <span
              className={
                item.discount != 0
                  ? "text-lg font-bold text-blue-950"
                  : "hidden"
              }
            >
              {" "}
              {`${promo}`}
            </span>
          </div>
        </div>
        <div className="p-4 text-sm">{item.description}</div>

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
          <button
            className="h-10 p-2 text-center rounded-lg bg-red-400"
            onClick={() => addToCart()}
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
