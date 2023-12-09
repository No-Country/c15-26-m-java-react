import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { categories } from "../config";

const CategoriesFilter = () => {
  const { selectedCategories, updateselectedCategories, brands, selectedBrands, updateSelectedBrands } =
    useContext(MyContext);

  const [subcategories, setSubcategories] = useState([]);

  const handleCategoryChange = (e) => {
    const newCategory = parseInt(e.target.value);
    if (e.target.checked) {
      addCategory(newCategory);
    } else {
      removeCategory(newCategory);
    }
  };

  const addCategory = (newCategory) => {
    let copia = selectedCategories;
    copia.push(newCategory);
    if (newCategory < 10) {
      copia = copia.filter(
        (category) =>
          !(category > newCategory * 10 && category < (newCategory + 1) * 10)
      );
      if (categories[newCategory].subcategories.length > 0) {
        setSubcategories(categories[newCategory].subcategories);
      }
    } else {
      copia = copia.filter(
        (category) => category != Math.trunc(newCategory / 10)
      );
    }
    updateselectedCategories(copia);
  };

  const removeCategory = (category) => {
   updateselectedCategories( selectedCategories.filter(cat => cat!= category))
  };

  const isSelected = (category) => selectedCategories.includes(category);

  const handleBrandChange = (e) => {
    if(e.target.checked){
      addBrand(e.target.value)
    }else{
      removeBrand(e.target.value)
    }
  }

  const addBrand = (brand) => {
    updateSelectedBrands([...selectedBrands, brand])
  }
  const removeBrand = (brand) => {
    updateSelectedBrands( selectedBrands.filter(bra => bra!= brand))
  }

  const isChecked = (brand) => selectedBrands.includes(brand)

  
  return (
    <div className="flex flex-col place-content-center">
      <div className="w-[190px] p-1 flex flex-col place-content-center flex-wrap">
        <label>Categoría:</label>
        {selectedCategories.length !== 0 &&
          selectedCategories.map((filter) => (
            <div onClick={() => removeCategory(filter)} key={filter}>
              {filter < 10
                ? categories[filter].name
                : categories[Math.trunc(filter / 10)].name +
                  " > " +
                  categories[Math.trunc(filter / 10)].subcategories[
                    (filter % 10) - 1
                  ].name}
            </div>
          ))}

        {categories.map((category) => {
          if (category.id !== 0) {
            return (
              <div key={category.id}>
                <input
                  type="checkbox"
                  value={category.id}
                  checked={isSelected(category.id)}
                  onChange={handleCategoryChange}
                />
                <label htmlFor={category.name}>{category.name}</label>
              </div>
            );
          }
        })}

        {subcategories.length > 0 && (
          <>
            <label>Subcategoría:</label>
            {subcategories.map((subcategory) => (
              <div key={subcategory.id}>
                <input
                  type="checkbox"
                  value={subcategory.id}
                  checked={isSelected(subcategory.id)}
                  onChange={handleCategoryChange}
                />
                <label htmlFor={subcategory.name}>{subcategory.name}</label>
              </div>
            ))}
          </>
        )}
      
      <h2>Marcas</h2>
         {brands?.map((brand) => (
              <div key={brand}>
                <input
                  type="checkbox"
                  value={brand}
                  checked={isChecked(brand)}
                  onChange={handleBrandChange}
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
      
      </div>
      
    </div>
  );
};

export default CategoriesFilter;
