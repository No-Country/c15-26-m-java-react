import { useState, useEffect, useContext } from "react";
import { MyContext } from "../MyContext";
import ItemCard from "./ItemCard";
import Filters from "./Filters";
import axios from "axios";
import { API_URL } from "../config";
import { Spinner } from "@material-tailwind/react";
import OrderFilter from "./OrderFilter";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const {
    selectedCategories,
    priceOrderAsc,
    search,
    updateSearch,
    updateBrands,
    selectedBrands,
    lastFilterType,
  } = useContext(MyContext);

  const productFiltered = [
    ...items.filter((item) => selectedBrands.includes(item.brand)),
  ];

  const finalPrice = (item) => item.price * (1 - item.discount);

  useEffect(() => {
    if (JSON.stringify(selectedCategories) !== JSON.stringify([0])) {
      selectedCategories.map((category) => {
        if (category == 0) {
          setItems([]);
        } else {
          if (selectedCategories.length === 1) {
            setItems([]);
          }
          const endPoint = API_URL + `product/category/${category}`;
          axios
            .get(endPoint)
            .then((response) => {
              const newItems = response.data;

              setItems((prev) => [...new Set(prev.concat(newItems))]);
            })
            .catch((error) => {
              alert("Hubo errores, intenta más tarde...");
              console.log(error);
            });
        }
      });
    } else {
      const endPoint = API_URL + `product`;
      axios
        .get(endPoint)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          alert("Hubo errores, intenta más tarde...");
          console.log(error);
        });
    }

    setItems((prev) => [...prev.sort((a, b) => finalPrice(a) - finalPrice(b))]);
  }, [selectedCategories]);

  useEffect(() => {
    if (search !== "") {
      const endPoint = API_URL + `product/search/${search}`;
      axios
        .get(endPoint)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          if(error.message === "Request failed with status code 404")
          alert(`No se encontraron productos con el término de búsqueda: ${search}`);
          console.log(error);
        });
    }
  }, [search]);

  useEffect(() => {
    if (priceOrderAsc) {
      setItems((prev) => [
        ...prev.sort((a, b) => finalPrice(a) - finalPrice(b)),
      ]);
    } else {
      setItems((prev) => [
        ...prev.sort((a, b) => finalPrice(b) - finalPrice(a)),
      ]);
    }
  }, [priceOrderAsc]);

  useEffect(() => {
    if (search !== "") updateSearch("");
    if (lastFilterType === "category") {
      let brandList = [];
      items.map((item) => {
        if (!brandList.includes(item.brand)) {
          brandList.push(item.brand);
        }
      });
      updateBrands([...brandList]);
    }
  }, [items]);

  return (
    <main className="flex place-content-center gap-2 min-h-screen">
      <div className=" sm:w-[227px] sm:h-[1018px] sm:mt-16">
        <Filters />
      </div>
      <div className="w-[250px]  flex flex-col md:w-[495px] lg:w-[740px] xl:w-[994px] ">
        <div className="flex justify-end">
          <OrderFilter />
        </div>
        <section className=" bg-transparent place-content-center items-center">
          <div className="p-2.5 flex flex-wrap gap-4 place-content-center">
            {lastFilterType === "category" &&
              items?.map((i) => {
                return (
                  <ItemCard
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    brand={i.brand}
                    model={i.model}
                    price={i.price}
                    discount={i.discount}
                    images={i.images}
                  />
                );
              })}
            {lastFilterType === "brand" &&
              productFiltered?.map((i) => {
                return (
                  <ItemCard
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    brand={i.brand}
                    model={i.model}
                    price={i.price}
                    discount={i.discount}
                    images={i.images}
                  />
                );
              })}
            {items.length === 0 && productFiltered.length === 0 && (
              <div className="flex place-content-center items-center min-h-screen">
                <Spinner className="h-60 w-60 text-blue-600" />
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ItemList;
