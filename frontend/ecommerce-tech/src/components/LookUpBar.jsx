import { useContext } from "react";
import { MyContext } from "../MyContext";
import lupa from "../assets/iconamoon_search-light.svg";

export const LookUpBar = () => {
  const { updateSearch } = useContext(MyContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    if (keyword.length === 0) {
      alert("Tienes que ingresar una palabra clave!");
    } else if (keyword.length < 4) {
      alert("Tienes que ingresar al menos 4 caracteres!");
    } else {
      e.target.keyword.value = "";
      updateSearch(keyword);
    }
  };

  return (
    <form
      className="flex flex-wrap place-content-center border  border-gray-500 rounded-lg h-10 w-[289px] items-center"
      onSubmit={submitHandler}
    >
      <button type="submit" className="ml-2 mr-4" >
        <img src={lupa} />
      </button>
      <input
        className="w-[237px] pl-2 h-7 text-s"
        type="text"
        name="keyword"
        placeholder="Busca los mejores productos"
        autoComplete="off"
      />
    </form>
  );
};
