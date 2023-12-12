import { useNavigate } from "react-router-dom";
import noImage from "../assets/noimage.png";

const ItemCard = ({ id, name, brand, model, price, discount, images }) => {
  const navigate = useNavigate();
  const promo = Math.ceil(price * (1 - discount));

  const goToDetail = (id) => {
    console.log(id);
    navigate(`item/${id}`);
  };

  return (
    <div
      className="w-[227px] h-[385px] px-2 flex flex-col gap-2 place-content-center border transition-all border-gray-100 rounded-xl bg-white cursor-pointer hover:shadow-lg"
      onClick={() => goToDetail(id)}
    >
      <div className="overflow-hidden place-content-center flex items-center">
        <img
          src={images?.length > 0 ? images[0] : noImage}
          className="object-scale-down h-[190px] w-[211px]"
          alt="productImage"
        />
      </div>
      <div className="h-[73px] w-[211px]">
        <h2 className="font-bold">{brand}</h2>
        <h3 className="text-justify">{name}</h3>
        <h4 className="truncate">{model}</h4>
      </div>

      <div
        className={
          discount != 0 ? "text-left  text-gray-800 font-bold" : "hidden"
        }
      >
        <div>{`$ ` + new Intl.NumberFormat().format(promo)}</div>
        <div>Precio Oferta</div>
      </div>

      <div className=" text-left mb-2 text-gray-800">
        <div>{`$ ` + new Intl.NumberFormat().format(price)}</div>
        <div>Precio Normal</div>
      </div>
    </div>
  );
};

export default ItemCard;
