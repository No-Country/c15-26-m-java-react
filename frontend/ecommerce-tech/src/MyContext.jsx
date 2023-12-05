import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [customer, setCustomer] = useState(
    localStorage.getItem("customer")
      ? JSON.parse(localStorage.getItem("customer")).id !== 0
        ? JSON.parse(localStorage.getItem("customer"))
        : JSON.parse('{"id": 0}')
      : JSON.parse('{"id": 0}')
  );

  const updateCustomer = (newValue) => {
    setCustomer(newValue);
  };
  const [categories, setCategories] = useState([]);

  const updateCategories = (newValue) => {
    setCategories(newValue);
  };
  const [selectedCategory, setSelectedCategory] = useState();
  const updateSelectedCategory = (newValue) => {
    setSelectedCategory(newValue);
  };
  useEffect(() => {
    // Lógica para obtener las categorías desde la API
    // Puedes realizar una llamada a la API para obtener la lista de categorías
    // Supongamos que la API devuelve un arreglo de categorías
    const categoriasDesdeAPI = ["Categoría 1", "Categoría 2", "Categoría 3"];
    setCategories(categoriasDesdeAPI);
  }, []);
  const [priceOrderAsc, setpriceOrderAsc] = useState(true);
  const updatePriceOrderAsc = (newValue) => {
    setpriceOrderAsc(newValue);
  };
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );
  const updateCart = (newValue) => {
    setCart(newValue);
  };

  const [qtyCart, setQtyCart] = useState(cart.length);
  const updateQtyCart = (newValue) => {
    setQtyCart(newValue);
  };

  return (
    <MyContext.Provider
      value={{
        customer,
        updateCustomer,
        categories,
        updateCategories,
        selectedCategory,
        updateSelectedCategory,
        priceOrderAsc,
        updatePriceOrderAsc,
        cart,
        updateCart,
        qtyCart,
        updateQtyCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
