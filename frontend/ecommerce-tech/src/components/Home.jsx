import banner from "../assets/banner.svg";
import card from "../assets/card.svg";
import debit from "../assets/debit.svg";
import plus from "../assets/plus.svg";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-[487px] flex place-content-center items-center bg-blue-600">
        <img src={banner} alt="banner" />
      </div>

      <div className="h-[360px] gap-4 md:h-[280px] lg:h-[126px] flex flex-wrap  place-content-center items-center lg:gap-10">
        <div className="w-[328px] h-[90px] flex gap-3 items-center place-content-center bg-white rounded-xl">
          <div className="w-11 h-11 flex items-center place-content-center">
            <img src={card} alt="card" />
          </div>
          <div className="w-[221px] h-[50px] mt-2 text-lg font-semibold text-gray-800 leading-10">
            Hasta 12 cuotas sin interés
          </div>
        </div>

        <div className="w-[328px] h-[90px] flex gap-3 items-center place-content-center bg-white rounded-xl">
          <div className="w-11 h-11 flex items-center place-content-center">
            <img src={debit} alt="card" />
          </div>
          <div className="w-[221px] h-[50px] mt-2 text-lg font-semibold text-gray-800 leading-10">
            Tarjetas de débito
          </div>
        </div>
        <div className="w-[328px] h-[90px] flex gap-3 items-center place-content-center bg-white rounded-xl">
          <div className="w-11 h-11 flex items-center place-content-center">
            <img src={plus} alt="card" />
          </div>
          <div className="w-[221px] h-[50px] mt-2 leading-10 text-lg font-semibold text-gray-800">
            Ver más formas de pago
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
