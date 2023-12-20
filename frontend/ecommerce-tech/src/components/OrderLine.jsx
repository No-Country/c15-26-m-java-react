const OrderLine = ({ nr, name, brand, model, qty, price }) => {
  return (
    <tr className="h-12 border text-sm">
      <td className="text-center w-[60px]">{nr}</td>
      <td className="text-center w-[170px]">{name}</td>
      <td className="text-center w-[99px]">{brand}</td>
      <td className="text-center w-[185px]">{model}</td>
      <td className="text-center w-[78px]">{qty}</td>
      <td className="text-center w-[148px]">{price}</td>
      <td className="text-center w-[157px]">{price * qty}</td>
    </tr>
  );
};

export default OrderLine;
