import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { categories } from "../config";
import { Checkbox } from "@material-tailwind/react";
import downarrow from "../assets/iconamoon_arrow-down-2-thin.svg";
import uparrow from "../assets/iconamoon_arrow-up-2-thin.svg";

const CategoriesFilter = () => {
  const {
    selectedCategories,
    updateselectedCategories,
    brands,
    selectedBrands,
    updateSelectedBrands,
    updateLastFilterType,
    lastFilterType,
  } = useContext(MyContext);

  const [subcategories, setSubcategories] = useState([]);
  const [contractCat, setContractCat] = useState(false)
  const [contractSubCat, setContractSubCat] = useState(false)
  const [contractBrand, setContractBrand] = useState(false)
  

  const handleCategoryChange = (e) => {
    const newCategory = parseInt(e.target.value);
    if (e.target.checked) {
      addCategory(newCategory);
    } else {
      removeCategory(newCategory);
    }
    updateLastFilterType("category");
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
    updateselectedCategories(
      selectedCategories.filter((cat) => cat != category)
    );
  };

  const isSelected = (category) => selectedCategories.includes(category);

  const handleBrandChange = (e) => {
    if (e.target.checked) {
      addBrand(e.target.value);
    } else {
      removeBrand(e.target.value);
    }
    updateLastFilterType("brand");
  };

  const addBrand = (brand) => {
    updateSelectedBrands([...selectedBrands, brand]);
  };
  const removeBrand = (brand) => {
    updateSelectedBrands(selectedBrands.filter((bra) => bra != brand));
  };

  const isChecked = (brand) => selectedBrands.includes(brand);

  const hideOrShowCategories = () => {
    setContractCat(prev =>!prev)
  }
  const hideOrShowSubCategories = () => {
    setContractSubCat(prev =>!prev)
  }
  const hideOrShowBrands = () => {
    setContractBrand(prev =>!prev)
  }
  return (
    <div className="flex flex-col place-content-center">
      <div className="w-[190px] p-1 flex flex-col place-content-center flex-wrap">
        <label className="font-bold ml-4 mb-2 w-[190px] flex place-content-between ">
          Categorías <img onClick={hideOrShowCategories} src={contractCat ? downarrow : uparrow} alt="expande" />
        </label>
        { selectedCategories.length !== 0 && 
          selectedCategories.map(
            (filter) =>
              filter !== 0 && (
                <div
                  className="font-bold flex place-content-between px-3 ml-2 mb-1 rounded-full cursor-pointer bg-blue-200"
                  onClick={() => removeCategory(filter)}
                  key={filter}
                >
                  <span>
                    {filter < 10
                      ? categories[filter].name
                      : categories[Math.trunc(filter / 10)].name +
                        " > " +
                        categories[Math.trunc(filter / 10)].subcategories[
                          (filter % 10) - 1
                        ].name}
                  </span>
                  <span className="text-blue-900">X</span>
                </div>
              )
          )}

        {  !contractCat && categories.map((category) => {
          if (category.id !== 0) {
            return (
              <div
                key={category.id}
                className="w-[210px] h-9 px-1 flex items-center"
              >
                <Checkbox
                  className="h-7 w-7 "
                  color="blue"
                  value={category.id}
                  checked={isSelected(category.id)}
                  onChange={handleCategoryChange}
                />
                <label
                  className={
                    isSelected(category.id)
                      ? "text-sm ml-2 text-blue-600"
                      : "text-sm ml-2"
                  }
                  htmlFor={category.name}
                >
                  {category.name}
                </label>
              </div>
            );
          }
        })}

        {subcategories.length > 0 && (
          <>
            <label className="font-bold ml-4 my-2 w-[190px] flex place-content-between ">Subcategorías <img onClick={hideOrShowSubCategories} src={contractSubCat ? downarrow : uparrow} alt="expande" /></label>
            {!contractSubCat &&  subcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                className="w-[210px] h-9 px-1 flex items-center"
              >
                <Checkbox
                  className="h-7 w-7 "
                  color="blue"
                  value={subcategory.id}
                  checked={isSelected(subcategory.id)}
                  onChange={handleCategoryChange}
                />
                <label className="text-sm ml-2" htmlFor={subcategory.name}>
                  {subcategory.name}
                </label>
              </div>
            ))}
          </>
        )}

        <label className="font-bold ml-4 my-2 w-[190px] flex place-content-between ">Marcas <img onClick={hideOrShowBrands} src={contractBrand ? downarrow : uparrow} alt="expande" /></label>
        {!contractBrand &&  brands?.map((brand) => (
          <div key={brand} className="w-[210px] h-9 px-1 flex items-center">
            <Checkbox
              className="h-7 w-7 "
              color="blue"
              value={brand}
              checked={lastFilterType === "category" ? false : isChecked(brand)}
              onChange={handleBrandChange}
            />
            <label className="text-sm ml-2" htmlFor={brand}>
              {brand}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter;
