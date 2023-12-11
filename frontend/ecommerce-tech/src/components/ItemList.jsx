import { useState, useEffect, useContext } from "react";
import { MyContext } from "../MyContext";
import ItemCard from "./ItemCard";
import Filters from "./Filters";
import axios from "axios";
import { API_URL } from "../config";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const {
    selectedCategories,
    priceOrderAsc,
    search,
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
          alert("Hubo errores, intenta más tarde...");
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
    <main className="flex flex-grow min-h-screen">
      <Filters />
      <section className=" bg-orange-300 w-[400px] p-3 flex-grow place-content-center border  border-black items-center">
        {selectedCategories !== 0 && (
          <h2 className="text-sm">{`Categoría ${selectedCategories}`}</h2>
        )}

        <h2 className="text-sm">
          Ordenados por Precio:{" "}
          {priceOrderAsc ? "de menor a mayor" : "de mayor a menor"}
        </h2>
        <div className="p-2.5 flex flex-wrap gap-3 place-content-center">
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
            { items.length === 0 || productFiltered.length === 0 &&
            <div>Oops! Revise sus filtros</div>}
        </div>
      </section>
    </main>
  );
};

export default ItemList;
