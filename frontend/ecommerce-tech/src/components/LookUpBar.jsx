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
      className="flex flex-wrap p-4 place-content-around h-14 w-[530px] rounded-xl items-center"
      onSubmit={submitHandler}
    >
      <label className=" mx-2 border rounded">
      <input
            type="submit"
            value={"🔍"}
            className="ml-2 mr-4"
          />
        <input
          className="w-[370px] pl-2 h-8 rounded text-s"
          type="text"
          placeholder="Busca los mejores productos"
          name="keyword"
          autoComplete="off"
        />
      </label>
      
    </form>
  );
};
