import CategoriesFilter from "./CategoriesFilter";
import OrderFilter from "./OrderFilter";

const Filters = () => {
  return (
    <aside className=" w-[230px] bg-green-500 p-4">
      <div className="text-center font-bold p-2 w-full bg-yellow-200">Filtros</div>
      <CategoriesFilter />
      <OrderFilter />
    </aside>
  );
};

export default Filters;
