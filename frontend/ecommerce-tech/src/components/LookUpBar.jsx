import { useContext } from "react";
import { MyContext } from "../MyContext";

export const LookUpBar = () => {
 const {updateSearch}=useContext(MyContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();

    if (keyword.length === 0) {
      alert("Tienes que ingresar una palabra clave!");
    } else if (keyword.length < 4) {
      alert("Tienes que ingresar al menos 4 caracteres!");
    } else {
      e.target.keyword.value = "";
      updateSearch(keyword)
    }
  };

  return (
    <form
      className="flex flex-wrap p-4 place-content-around h-14 w-[530px] items-center border border-black"
      onSubmit={submitHandler}
    >
      <label className=" mx-2 border border-black">
        <input
          className="w-[370px] p-1 pl-2 text-s"
          type="text"
          placeholder="Escribe una palabra clave..."
          name="keyword"
          autoComplete="off"
        />
      </label>
      <input
        type="submit"
        className="w-[80px] bg-slate-700  text-white"
        value="Buscar"
      />
    </form>
  );
};
