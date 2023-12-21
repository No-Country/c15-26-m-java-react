import { useContext } from "react";
import { MyContext } from "../MyContext";
import ActionButton from "./ActionButton";

const GuestAdvice = () => {
  const { updateCustomer } = useContext(MyContext);

  const buyAsGuest = () => {
    const guestBuyer = {
      id: -1,
    };
    updateCustomer(guestBuyer);
  };
  return (
    <div className="flex flex-col w-[412px] h-[546px]  gap-3 px-4 bg-white rounded">
      <h1 className="mt-7 mb-12 text-2xl w-[372px] h-[28px] font-semibold ">
        Haz tu compra como invitado
      </h1>
      <div>
        <p className="text-sm mb-8">
          Puedes crear una cuenta más adelante para no tener interrupciones.
        </p>
        <p className="text-sm mb-8">
          Completa los siguientes pasos para realizar tu compra.
        </p>
      </div>
      <div className="mt-[117px] flex place-content-center ">
        <ActionButton text="Comprar como invitado" action={buyAsGuest}/>
      </div>
    </div>
  );
};

export default GuestAdvice;
