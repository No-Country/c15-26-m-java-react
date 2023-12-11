const OrderLine = ({ name, brand, model, qty, price }) => {
  return (
    <tr className="p-4 h w-12">
      <td className="text-center w-[150px]">{name}</td>
      <td className="text-center w-[150px]">{brand}</td>
      <td className="text-center w-[150px]">{model}</td>
      <td className="text-center w-[150px]">{qty}</td>
      <td className="text-center w-[150px]">{price}</td>
      <td className="text-center w-[150px]">{price * qty}</td>
    </tr>
  );
};

export default OrderLine;
