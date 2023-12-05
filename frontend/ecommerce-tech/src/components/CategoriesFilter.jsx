import { useContext } from "react";
import { MyContext } from "../MyContext";

const CategoriesFilter = () => {
  const { categories, selectedCategory, updateSelectedCategory } =
    useContext(MyContext);

  const handleSeleccionCategoria = (event) => {
    const nuevaCategoria = event.target.value;
    updateSelectedCategory(nuevaCategoria);
  };

  return (
    <div className="flex flex-col place-content-center">
      <div className="w-[190px] p-1 flex flex-col place-content-center flex-wrap">
        <label>Selecciona una categoría:</label>
        <select
          className="mt-4"
          value={selectedCategory}
          onChange={handleSeleccionCategoria}
        >
          <option value="">Todas las Categorías</option>
          {categories.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoriesFilter;
