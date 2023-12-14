import { Navigate } from "react-router-dom";
import CartDetail from "./CartDetail";
import GuestActions from "./GuestActions";
import { useContext, useState } from "react";
import { MyContext } from "../MyContext";

const Cart = () => {
  const { cart, customer } = useContext(MyContext);
  const [guest, setGuest] = useState(customer.id === 0);

  return cart.length > 0 ? (
    <div className="flex flex-col">
      {guest && <GuestActions guest={guest} setGuest={setGuest} />}

      {!guest && <CartDetail />}
    </div>
  ) : (
   <Navigate to={'/'}/>
  );
};

export default Cart;
