import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return <div>Error 404 - Página no encontrada</div>;
};

export default Error;
