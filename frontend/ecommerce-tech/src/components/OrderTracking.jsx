import ActionButton from "./ActionButton";


const OrderTracking = () => {
  return (
    <div className="flex items-center">
      <div className="w-[412px] h-[471px] bg-white rounded-lg border flex flex-col gap-3 p-4 ">
        <div className="w-[380px] h-[42px] flex items-center px-1 py-2">
          <div className="w-[372px] h-[26px] text-gray-900 text-2xl font-semibold">
            Sigue el estado de tu compra
          </div>
        </div>
        <div className="w-[380px] h-[67px] px-1 py-2">
          <div className="text-sm text-gray-900 ">
            Tu comodidad y seguridad nos interesa. Ante cualquier duda, envíanos
            un correo desde el mail de soporte bluedragon@tecnologystore.com
          </div>
        </div>
        
      <div className="w-[376px] flex flex-col mt-10 ">
        <form >
          <div className="flex flex-col h-[76px]">
            <label className="text-sm font-semibold"htmlFor="numeroSeguimiento">Número de Seguimiento:</label>
            <input
              type="text"
              id="numeroSeguimiento"
              name="numeroSeguimiento"
              className="h-10 px-3 py-2 border border-lg"
            />
          </div>

         <div className="flex flex-col">
             <label className="text-sm font-semibold" htmlFor="empresaDespachadora">Empresa Despachadora:</label>
             <select id="empresaDespachadora" name="empresaDespachadora" className="h-10 px-3 py-2 border border-lg">
               <option value="" disabled selected>
               </option>
               <option value="empresa1">Empresa 1</option>
               <option value="empresa2">Empresa 2</option>
               <option value="empresa3">Empresa 3</option>
             </select>
         </div>

         <div className="mt-16">
             <ActionButton text="Dar seguimiento" disabled={true}/>
         </div>
        </form>
      </div>
      </div>

    </div>
  );
};

export default OrderTracking;
