import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";

import OrderFormStep1 from "./OrderFormStep1";
import OrderFormStep2 from "./OrderFormStep2";
import OrderFormStep3 from "./OrderFormStep3";
import OrderFormStep4 from "./OrderFormStep4";

const OrderForm = () => {
 

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const { customer } = useContext(MyContext);

  const [orderData, setOrderData] = useState({
    order_date: formatDate(new Date()),
    pending: true,
    customer_id: customer?.id ? customer.id : 0,
    address: "",
    city: "",
    state: "",
    card_owner: "",
    owner_dni: "",
    card_type: "",
    card_number: "",
    expiration_date: "",
    cvv: "",
  });

  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col place-content-center">
      <div className=" w-[412px] h-[596px] bg-white rounded p-4  ">
        <div className="w-full">
          <div className="w-[376px] h-5">
            <img
              src={
                step === 1
                  ? step1
                  : step === 2
                  ? step2
                  : step === 3
                  ? step3
                  : step4
              }
              alt="pasos"
            />
          </div>
          {step === 1 && (
            <OrderFormStep1 setStep={setStep} setOrderData={setOrderData} />
          )}
          {step === 2 && (
            <OrderFormStep2 setStep={setStep} setOrderData={setOrderData} />
          )}
          {step === 3 && (
            <OrderFormStep3 setStep={setStep} setOrderData={setOrderData} />
          )}

          {step === 4 && (
            <OrderFormStep4
              setStep={setStep}
              orderData={orderData}
              setOrderData={setOrderData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
