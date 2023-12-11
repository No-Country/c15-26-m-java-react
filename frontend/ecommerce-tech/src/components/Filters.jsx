import CategoriesFilter from "./CategoriesFilter";
import OrderFilter from "./OrderFilter";

const Filters = () => {
  return (
    <aside className=" w-[250px] bg-transparent p-4">
      <div className="bg-white p-2 rounded-xl w-[250px]">
      <div className=" font-bold p-2 w-full ">Filtros</div>
      <CategoriesFilter />
      <OrderFilter />
      </div>
    </aside>
  );
};

export default Filters;
