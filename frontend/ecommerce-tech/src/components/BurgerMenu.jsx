import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";
import burger_opened from '../assets/burger_opened.svg'
import burger_closed from '../assets/burger_closed.svg'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { customer, updateCustomer, updateselectedCategories } =
    useContext(MyContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goToHome = () => {
    setIsOpen(false)
    updateselectedCategories([0]);
    navigate("/");
  };

  const logout = () => {
    setIsOpen(false)
    localStorage.setItem("customer", '{"id": 0}');
    updateCustomer(JSON.parse('{"id": 0}'));
  };


  return (
    <div className="md:hidden w-10 h-10 p-2 shadow rounded-xl">
      <button
        className="focus:outline-none"
        onClick={toggleMenu}
      >
        <img className="w-6 h-6 " src={isOpen ? burger_opened : burger_closed } />
      </button>
      {isOpen && (
        <div className="fixed mt-20 ml-1 w-[375px] h-[500px]  inset-0 bg-white bg-opacity-90 z-50">
   
          <nav >
            <ul >
              <div className="flex flex-col content-start gap-2 mt-2 px-4 ">
                <li className="text-gray-800 text-semibold text-lg  transition-all hover:font-bold"
                onClick={goToHome} >
                    Productos
                </li>
                <li  className="text-gray-800 text-semibold text-lg  transition-all hover:font-bold"
                onClick={()=>{
                  setIsOpen(false)
                }}>
                  Seguimiento
                </li>
                <li  className="text-gray-800 text-semibold text-lg  transition-all hover:font-bold"
                onClick={()=>{
                  setIsOpen(false)
                  navigate('/help')
                }}>Soporte
                </li>
              </div>
              <div className="w-full h-[40px] mb-5 border-b-gray-800 border "></div>
              {customer.id > 0 ? (
                <div className="w-full h-[130px] mb-5 flex flex-col px-4 gap-2 border-b-gray-800 border">
                  <li className="text-gray-800 text-semibold text-lg  transition-all hover:font-bold "
                  onClick={()=>{
                    setIsOpen(false)
                    navigate("/profile")
                  }}>
                      Perfil
                  </li>
                  <li  className="text-gray-800 text-semibold text-lg  transition-all hover:font-bold "
                  onClick={()=>{
                    setIsOpen(false)
                    navigate(`/orders/${customer.id}`)
                  }}>
                      Historial
                  </li>
                  <li className="text-gray-800 text-semibold text-lg  transition-all hover:font-bold "
                  onClick={()=>{
                    logout()
                  }}
                    > Cerrar sesión
                  </li>
                </div>
              ) :(
                <div className="w-full h-[100px] flex flex-col px-4 mb-5 gap-2 border-b-gray-800 border">
                  <li className="text-gray-800 text-semibold text-lg  transition-all hover:font-bold " onClick={()=>{
                    setIsOpen(false)
                    navigate("/login")
                  }} >Iniciar Sesión
                  </li>
                  <li className="text-gray-800 text-semibold text-lg  transition-all hover:font-bold " onClick={()=>{
                    setIsOpen(false)
                    navigate("/register")
                  }}>
                      Regístrate aquí
                  </li>
               </div>
              )}
            </ul>
          </nav>
          
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
