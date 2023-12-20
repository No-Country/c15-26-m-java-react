import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Navigate } from "react-router-dom";

const CustomerProfile = () => {
  const { customer } = useContext(MyContext);

  return customer.id === 0 ? (
    <Navigate to={"/"} />
  ) : (
   <div className="flex items-center">
        EN CONSTRUCCIÓN
   </div>
  );
};

export default CustomerProfile;
