import CategoriesFilter from "./CategoriesFilter";

const Filters = () => {
  return (
    <aside className=" bg-transparent bg-white p-2 rounded-xl">
      <div className=" font-bold p-2 w-full ">Filtros</div>
      <CategoriesFilter />
    </aside>
  );
};

export default Filters;
