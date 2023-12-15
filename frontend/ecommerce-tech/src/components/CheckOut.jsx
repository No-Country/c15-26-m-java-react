import { useContext } from "react";
import GuestActions from "./GuestActions";
import { MyContext } from "../MyContext";
import OrderForm from "./OrderForm";
import { Navigate } from "react-router-dom";

const CheckOut = () => {
  const { customer, cart } = useContext(MyContext);

  return (
    <>
      {cart.length === 0 && <Navigate to={"/"} />}
      {customer.id === 0 && <GuestActions />}
      {customer.id !== 0 && <OrderForm />}
    </>
  );
};

export default CheckOut;
