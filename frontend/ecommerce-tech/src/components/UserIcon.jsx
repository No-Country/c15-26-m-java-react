import { useContext } from "react";
import { MyContext } from "../MyContext";
import userButton from "../assets/Botón Usuario.svg";
import guestButton from "../assets/Botón Invitado.svg";

const UserIcon = () => {
  const { customer } = useContext(MyContext);

  return (
    <div className="flex flex-wrap pt-3 w-[300px] h-[70px] justify-end">
      <div>
        <img
          src={
            customer.id < 0 ? guestButton : customer.id !== 0 ? userButton : ""
          }
        />
      </div>
    </div>
  );
};

export default UserIcon;
