import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../MyContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import noImage from "../assets/noimage.png";
import addProductIcon from "../assets/Shopping Card Add.svg";
import { API_URL } from "../config";
import { Spinner } from "@material-tailwind/react";
import Swal from 'sweetalert2'

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [qty] = useState(1);

  const { id } = useParams();

  const { cart, updateCart, qtyCart, updateQtyCart, updateShopping } =
    useContext(MyContext);
  const navigate = useNavigate();

  const promo = Math.ceil(item.price * (1 - item.discount));

  const addToCart = () => {
    Swal.fire({
      position: "top-end",
      title: "¡producto agregado!",
      showConfirmButton: false,
      animation: false,
      toast: true,
      timer: 1500
    });
    const itemToAdd = {
      id: item.id,
      name: item.name,
      qty,
      price: promo,
      image: item.images[0]
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
    updateShopping(true);
    navigate("/checkout");
  };

  useEffect(() => {
    const endPoint = API_URL + `product/${id}`;
    axios
      .get(endPoint)
      .then((response) => {
        setItem(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("ocurrió un error");
      });
  }, [id]);

  return (
    <section className="flex flex-grow place-content-center">
      <div className=" w-[1200px] flex flex-wrap items-center gap-4">
        <div className=" w-[774px] h-[531px] bg-white rounded-xl">
          {isLoading ? (
            <div className="flex place-content-center items-center h-full">
              <Spinner className="h-72 w-72 text-blue-600" />
            </div>
          ) : (
            <img
              src={item?.images?.length > 0 ? item?.images[0] : noImage}
              alt="productImage"
              className="h-full w-full object-contain object-center"
            />
          )}
        </div>

        <div className=" w-[409px] h-[531px] bg-white flex flex-col items-center rounded-xl px-6">
          
            {isLoading ? (
              <div className="p-0 h-[400px] w-[400px] flex place-content-center items-center m-0">
              <Spinner className="h-40 w-40 text-blue-600" />
              </div>
            ) : (
              <>
                <div className="h-[250px] mb-5  ">
                  <div className="font-semibold text-gray-800 w-[365px] h-[18px] text-xl mt-8 mb-4">
                    {item.name}
                  </div>
                  <div className="font-bold text-4xl text-gray-800 mb-8 w-[365px] h-[18px]">
                    {item.brand}
                  </div>
                  <div className="mb-4 w-[365px] h-[18px] text-xs">
                    {item.model}
                  </div>
                  <div className="mb-4 w-[365px] h-[18px] text-xs">
                    {item.description}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-2">
                  <div className=" flex flex-col  text-left text-lg text-gray-800 w-[365px] h-[48px] ">
                    <div>
                      {`$ ` + new Intl.NumberFormat().format(item.price)}
                    </div>
                    <div>Precio Normal</div>
                  </div>

                  <div
                    className={
                      item.discount != 0
                        ? "flex flex-col  text-left text-lg  text-blue-600 w-[365px] h-[55px]"
                        : "hidden"
                    }
                  >
                    <div className=" font-semibold text-2xl">
                      {`$ ` + new Intl.NumberFormat().format(promo)}
                    </div>
                    <div className="text">Precio Oferta</div>
                  </div>
                </div>
              </>
            )}
          

          <div className=" h-[130px] w-[380px] flex flex-col mt-3">
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
