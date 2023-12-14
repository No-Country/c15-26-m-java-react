import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../MyContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import noImage from "../assets/noimage.png";
import addProductIcon from "../assets/Shopping Card Add.svg";
import { API_URL } from "../config";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const [qty, setQty] = useState(1);

  const { id } = useParams();

  const { cart, updateCart, qtyCart, updateQtyCart } = useContext(MyContext);
  const navigate = useNavigate();

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

  const buyNow = () => {
    addToCart();
    navigate("/cart");
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
    <section className="flex flex-grow place-content-center">
      <div className=" w-[1200px] flex flex-wrap items-center gap-4">
        <div className=" w-[774px] h-[531px] bg-white rounded-xl">
          <img
            src={item?.images?.length > 0 ? item?.images[0] : noImage}
            alt="productImage"
            className="h-full w-full object-contain object-center"
          />
        </div>

        <div className=" w-[409px] h-[531px] bg-white flex flex-col items-center rounded-xl px-6">
          <div className="h-[400px]">
            <div className="font-semibold text-gray-800 w-[365px] h-[18px] text-xl mt-8 mb-4">
              {item.name}
            </div>
            <div className="font-bold text-4xl text-gray-800 mb-8 w-[365px] h-[18px]">
              {item.brand}
            </div>
            <div className="mb-4 w-[365px] h-[18px] text-xs">{item.model}</div>
            <div className="mb-4 w-[365px] h-[18px] text-xs">
              {item.description}
            </div>
          </div>

          {/* <div className="flex h-[100px] place-content-center flex-wrap p-2">
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
        </div> */}

          <div className=" h-[110px] w-[380px]">
            <div
              className="h-[42px] w-[360px] p-1 m-2 flex  place-content-center rounded-lg border border-blue-600 text-xl font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={() => addToCart()}
            >
              <img
                className="h-6 w-6 mr-2 "
                src={addProductIcon}
                alt="agregar"
              />
              <div className="w-[248px] h-[21px]">
                Agregar unidad al carrito
              </div>
            </div>

            <div
              className="h-[42px] w-[360px] p-1 m-2 flex  place-content-center rounded-lg border border-blue-600 text-xl font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={() => buyNow()}
            >
              Comprar ahora
            </div>
          </div>
        </div>

        <div className="w-[774px] h-[1200px] bg-white rounded-xl"></div>
      </div>
    </section>
  );
};

export default ItemDetail;
