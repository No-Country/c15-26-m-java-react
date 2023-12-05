import { useState, useEffect, useContext } from "react";
import { MyContext } from "../MyContext";
import ItemCard from "./ItemCard";
import Filters from "./Filters";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const { selectedCategory, priceOrderAsc } = useContext(MyContext);

  let itemsAPI = [
    {
      id: "0",
      name: "Monitor Hp X27 27 Pulgadas 165hz Fhd Ips Gaming 2v6b2aa Color Negro",
      category: "1",
      brandt: "HP",
      model: "2v6b2aa",
      price: 337706,
      discount: 0,
      description: `Pantalla Full HD de 27" para imágenes nítidas y colores vibrantes
          Frecuencia de actualización de 165 Hz y tiempo de respuesta de 1 ms para fluidez en juegos
          Tecnologías FreeSync Premium y AdaptiveSync para evitar tearing y stuttering
          Pantalla antirreflejo y reducción de luz azul para mayor comodidad visual
          Reclinable y compatible con montaje VESA para ajustar a tu comodidad
          Conexiones HDMI 2.0, DisplayPort 1.4 y Jack 3.5 mm para conectar tus dispositivos`,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_785737-MLU72854726656_112023-O.webp",
    },
    {
      id: "1",
      name: "Monitor Hp X27 27 Pulgadas 165hz Fhd Ips Gaming 2v6b2aa Color Negro",
      category: "1",
      brandt: "HP",
      model: "2v6b2aa",
      price: 337706,
      discount: 0.15,
      description: `Pantalla Full HD de 27" para imágenes nítidas y colores vibrantes
          Frecuencia de actualización de 165 Hz y tiempo de respuesta de 1 ms para fluidez en juegos
          Tecnologías FreeSync Premium y AdaptiveSync para evitar tearing y stuttering
          Pantalla antirreflejo y reducción de luz azul para mayor comodidad visual
          Reclinable y compatible con montaje VESA para ajustar a tu comodidad
          Conexiones HDMI 2.0, DisplayPort 1.4 y Jack 3.5 mm para conectar tus dispositivos`,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_785737-MLU72854726656_112023-O.webp",
    },
    {
      id: "2",
      name: "Monitor Hp X27 27 Pulgadas 165hz Fhd Ips Gaming 2v6b2aa Color Negro",
      category: "1",
      brandt: "HP",
      model: "2v6b2aa",
      price: 337706,
      discount: 0,
      description: `Pantalla Full HD de 27" para imágenes nítidas y colores vibrantes
          Frecuencia de actualización de 165 Hz y tiempo de respuesta de 1 ms para fluidez en juegos
          Tecnologías FreeSync Premium y AdaptiveSync para evitar tearing y stuttering
          Pantalla antirreflejo y reducción de luz azul para mayor comodidad visual
          Reclinable y compatible con montaje VESA para ajustar a tu comodidad
          Conexiones HDMI 2.0, DisplayPort 1.4 y Jack 3.5 mm para conectar tus dispositivos`,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_785737-MLU72854726656_112023-O.webp",
    },
    {
      id: "3",
      name: "Monitor Hp X27 27 Pulgadas 165hz Fhd Ips Gaming 2v6b2aa Color Negro",
      category: "1",
      brandt: "HP",
      model: "2v6b2aa",
      price: 337706,
      discount: 0,
      description: `Pantalla Full HD de 27" para imágenes nítidas y colores vibrantes
          Frecuencia de actualización de 165 Hz y tiempo de respuesta de 1 ms para fluidez en juegos
          Tecnologías FreeSync Premium y AdaptiveSync para evitar tearing y stuttering
          Pantalla antirreflejo y reducción de luz azul para mayor comodidad visual
          Reclinable y compatible con montaje VESA para ajustar a tu comodidad
          Conexiones HDMI 2.0, DisplayPort 1.4 y Jack 3.5 mm para conectar tus dispositivos`,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_785737-MLU72854726656_112023-O.webp",
    },
  ];

  useEffect(() => {
    setItems(itemsAPI);

    // const endPoint = "https://e-commerce-7i7l.onrender.com/api/v1/product/all";
    // axios
    //   .get(endPoint)
    //   .then((response) => {
    //     setItems(response.data);
    //     console.log(items);
    //   })
    //   .catch((error) => alert("Hubo errores, intenta más tarde..."));
  }, [selectedCategory, priceOrderAsc]);

  return (
    <main className="flex flex-grow min-h-screen">
      <Filters />
      <section className=" bg-orange-300 w-[400px] p-3 flex-grow place-content-center border  border-black items-center">
        <h2
          className={selectedCategory ? "text-sm" : "hidden"}
        >{`Categoría: ${selectedCategory}`}</h2>
        <h2 className="text-sm">
          Ordenados por Precio:{" "}
          {priceOrderAsc ? "de menor a mayor" : "de mayor a menor"}
        </h2>
        <div className="p-2.5 flex flex-wrap gap-3 place-content-center">
          {items?.map((i) => {
            return (
              <ItemCard
                key={i.id}
                id={i.id}
                name={i.name}
                brandt={i.brandt}
                model={i.model}
                price={i.price}
                discount={i.discount}
                image={i.image}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default ItemList;
