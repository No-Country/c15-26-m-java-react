import { useContext } from "react";
import GuestActions from "./GuestActions";
import { MyContext } from "../MyContext";
import OrderForm from "./OrderForm";
import { Navigate } from "react-router-dom";
import CartCard from "./CartCard";

const CheckOut = () => {
  const { customer, cart } = useContext(MyContext);

  return (
    <>
      {cart.length === 0 && <Navigate to={"/"} />}
      {customer.id === 0 && <GuestActions />}
      {customer.id !== 0 && (
        <div className="flex flex-wrap place-content-center items-start gap-8 mt-5 mb-5">
          <CartCard />
          <OrderForm />
        </div>
      )}
    </>
  );
};

export default CheckOut;
