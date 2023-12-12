import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";

const CartIcon = () => {
  const {  qtyCart } = useContext(MyContext);
  
  return (
    <>
      <div className="w-12 flex gap-2 mr-3">
        <div>🛒</div>
        
        <div className="h-6 w-6 rounded-lg text-white font-bold text-center bg-red-600">
          <Link to={"/cart"}>{`${qtyCart}`}</Link>
        </div>
      </div>
    </>
  );
};

export default CartIcon;
