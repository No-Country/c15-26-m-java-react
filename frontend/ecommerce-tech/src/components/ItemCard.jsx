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
      className="w-[250px] p-4 border transition-all shadow-xl border-gray-100 rounded-xl bg-white cursor-pointer hover:scale-105"
      onClick={() => goToDetail(id)}
    >
      <div className="m-1 p-1 h-[200px] w-[200px] items-center flex">
        <img
          src={images?.length > 0 ? images[0] : noImage}
          alt="productImage"
        />
      </div>
      <div className="p-2">
        <h2 className="font-bold">{brand}</h2>
        <h3 className="font-bold text-stone-600 text-justify">{name}</h3>
        <div className="italic h-12 mb-2">{model}</div>
        <div className="flex flex-col h-[100px] place-content-start">
          <div
            className={
              discount != 0
                ? " mb-1 text-left font-bold text-blue-600"
                : " mb-1 text-left font-bold text-transparent"
            }
          >
            <div>{`$ ` + new Intl.NumberFormat().format(promo)}</div>
            <div>Precio Oferta</div>
          </div>

          <div className=" text-left font-bold text-gray-800">
            <div>{`$ ` + new Intl.NumberFormat().format(price)}</div>
            <div>Precio Normal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
