import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";
import cart from '../assets/iconamoon_shopping-card.svg'

const CartIcon = () => {
  const {  qtyCart } = useContext(MyContext);
  const navigate = useNavigate();
  
  return (
    <>
      <div className=" w-9 h-9 flex flex-col border rounded cursor-pointer" onClick={()=>navigate("/cart")}>
        <div className="h-6 w-6"><img src={cart} alt="carrito" /></div>
        
        <div className="h-4 w-4 rounded-full text-white text-sm leading-4 text-center bg-red-600 relative -top-3 -right-3">
        {qtyCart}
        </div>
      </div>
    </>
  );
};

export default CartIcon;
