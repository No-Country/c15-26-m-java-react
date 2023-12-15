import { Navigate } from "react-router-dom";
import CartDetail from "./CartDetail";
import { useContext } from "react";
import { MyContext } from "../MyContext";

const Cart = () => {
  const { cart } = useContext(MyContext);
  

  return cart.length > 0 ? (
    <div className="flex flex-col">
       <CartDetail />
    </div>
  ) : (
   <Navigate to={'/'}/>
  );
};

export default Cart;
