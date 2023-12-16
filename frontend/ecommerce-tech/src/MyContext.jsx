import { createContext, useState } from "react";

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


  const [selectedCategories, setselectedCategories] = useState([0]);
  const updateselectedCategories = (newValue) => {
    setselectedCategories(newValue);
  };

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

  const [search, setSearch] = useState("");
  const updateSearch = (newValue) => {
    setSearch(newValue);
  };

  const [brands, setBrands] = useState([]);
  const updateBrands = (newValue) => {
    setBrands(newValue);
  };
  
  const [selectedBrands, setSelectedBrands] = useState([]);
  const updateSelectedBrands = (newValue) => {
    setSelectedBrands(newValue);
  };

  const [lastFilterType, setLastFilterType] = useState("category")
  const updateLastFilterType = (newValue) => {
    setLastFilterType(newValue);
  };

  const [shopping, setShopping] = useState(false)
  const updateShopping = (newValue) => {
    setShopping(newValue);
  };
  return (
    <MyContext.Provider
      value={{
        customer,
        updateCustomer,
        selectedCategories,
        updateselectedCategories,
        priceOrderAsc,
        updatePriceOrderAsc,
        cart,
        updateCart,
        qtyCart,
        updateQtyCart,
        search,
        updateSearch,
        brands,
        updateBrands,
        selectedBrands,
        updateSelectedBrands,
        lastFilterType,
        updateLastFilterType,
        shopping,
        updateShopping
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
