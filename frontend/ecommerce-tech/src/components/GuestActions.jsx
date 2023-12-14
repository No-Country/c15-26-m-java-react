import GuestAdvice from "./GuestAdvice";
import LoginForm from "./LoginForm";

const GuestActions = ({guest, setGuest}) => {
  return (
    <div className="flex flex-wrap gap-4 place-content-center">
      <LoginForm />
      <GuestAdvice guest={guest} setGuest={setGuest}/>
    </div>
  );
};

export default GuestActions;
