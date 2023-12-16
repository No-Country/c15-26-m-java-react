import truck from "../assets/truck.svg";

const CartCard = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let shippingCost = 0;

  const calcTotalCart = () => {
    let total = 0;
    cart.map((item) => (total += item.qty * item.price));
    return total;
  };

  return (
    <div className="w-[409px] h-[445px] p-4 flex flex-col justify-between bg-white rounded">
      <h1 className="w-[372px] h-[26px] font-semibold mt-3 mb-8 text-2xl">
        Tus productos
      </h1>
      <div className="flex flex-col gap-3">
        <div>
          {cart.map((item) => (
            <div
              className="w-[372px] h-[68px] px-3 py-2 gap-3 flex "
              key={item.id}
            >
              <div className="w-[50px] h-[50px]">
                <img
                  src={item.image}
                  className="h-full w-full object-contain object-center"
                  alt="image"
                />
              </div>
              <div className="w-[292px] h-[46px] flex flex-col gap-1 p-1">
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-sm ">
                  {`$ ` + new Intl.NumberFormat().format(item.price)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[372px] h-[68px]  px-3 py-2 flex gap-3  ">
          <div className="w-[50px] h-[50px] flex items-center place-content-center">
            <img
              src={truck}
              className="h-6 w-6 object-contain object-center "
              alt="image"
            />
          </div>
          <div className="w-[292px] h-[46px] flex flex-col gap-1 p-1">
            <div className="text-sm font-semibold">Envío</div>
            <div className="text-sm ">
              {shippingCost === 0
                ? "A calcular"
                : `$ ` + new Intl.NumberFormat().format(shippingCost)}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-lg">Total a pagar</h1>
        <div className="text-2xl font-semibold">
          {`$ ` + new Intl.NumberFormat().format(calcTotalCart())}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
