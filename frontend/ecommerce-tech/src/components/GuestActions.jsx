import GuestAdvice from "./GuestAdvice";
import LoginForm from "./LoginForm";

const GuestActions = () => {
  return (
    <div className="flex flex-wrap gap-4 place-content-center">
      <LoginForm goCheckout={true}/>
      <GuestAdvice />
    </div>
  );
};

export default GuestActions;
