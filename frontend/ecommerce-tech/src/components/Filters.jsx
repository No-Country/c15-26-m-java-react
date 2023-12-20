import CategoriesFilter from "./CategoriesFilter";
import filter_icon from '../assets/filter_icon.svg'

const Filters = () => {
  return (
    <aside className="w-[200px] sm:w-[234px] bg-white p-2 rounded-xl">
      <div className="flex items-center">
        <img src={filter_icon} className="h-6 w-6" />
        <div className=" font-bold p-2 w-full ">Filtros</div>
      </div>
      <CategoriesFilter />
    </aside>
  );
};

export default Filters;
