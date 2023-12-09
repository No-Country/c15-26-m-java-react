import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import CartLine from "./CartLine";
import { Link, useNavigate } from "react-router-dom";

const calcTotalCart = (cart) => {
  let total = 0;
  cart.map((item) => (total += item.qty * item.price));
  return total;
};

const CartDetail = () => {
  const { cart, customer } = useContext(MyContext);
  const [totalCart, setTotalCart] = useState(calcTotalCart(cart));
  const [guest] = useState(customer.id === 0);
  const [visibleWarning, setVisibleWarning] = useState(false);
  const navigate = useNavigate();

  const endShopping = () => {
    if(guest){
      setVisibleWarning(true);
    }else{
      navigate("checkout")
    }
  }

  const continueAsGuest = () => {
    setVisibleWarning(false);
    navigate("checkout")
  }

  return (
    <div className="flex p-8 place-self-center w-full flex-col place-content-center">
      <h1 className="text-center font-bold text-2xl mb-8 ">Detalle del Carrito</h1>
      <table className="border border-black w-full">
        <thead >
          <tr className="p-4 bg-slate-400 h-14">
            <th className="w-[350px]">Producto</th>
            <th className="w-[190px]">Cantidad</th>
            <th className="w-[150px]">Precio Unitario</th>
            <th className="w-[150px]">Precio Total</th>
            <th className="w-[100px]"></th>
          </tr>
        </thead>
        <tbody>
          { cart.length > 0 ?
             cart.map((item) => (
            <CartLine
              key={item.id}
              id={item.id}
              name={item.name}
              qty={item.qty}
              price={item.price}
              setTotalCart={setTotalCart}
              calcTotalCart={calcTotalCart}
            />
          )):
          <tr>
            <td className="text-center h-10 font-bold" colSpan="5">NO HAY PRODUCTOS EN SU CARRITO</td>
          </tr>
        }
        </tbody>
        <tfoot>
          <tr className="p-4 bg-blue-400 h-10">
            <td className="text-end font-bold"colSpan="3">Total</td>
            <td className="w-150px font-bold text-center">{totalCart}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <div className="w-full m-5 flex place-content-center">
        <div className={cart.length ? "opacity-100 p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200" : "opacity-0"}>
          <button onClick={endShopping} >Finalizar Compra</button>
        </div>
        
      </div>
      {visibleWarning && 
      <div>
        <div className="flex flex-col">
          <p className="bg-red-300 text-center h-8 font-bold leading-7">Está comprando como invitado!!!</p>
          <p className="font-serif text-justify p-3 italic">
            Puede comprar como invitado pero no se registrará su historial de
            pedidos, para un correcto seguimiento de sus pedidos se le aconseja
            iniciar sesión y volver al carrito para finalizar la compra...
          </p>
          <div className="flex w-full place-content-center m-4 gap-2">
            <div className="p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200" >
              <Link to={`/login`}>Iniciar sesión</Link>
            </div>
            <div className="p-2 bg-slate-300 hover:bg-blue-950 hover:text-yellow-200" >
              <button onClick={continueAsGuest}>
                Continuar como invitado
              </button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default CartDetail;
