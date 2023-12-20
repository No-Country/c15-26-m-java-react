import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Alert from "./Alert";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  useEffect(() => {
    Alert(
      "Error 404: No se encuentra",
      "Comprueba que los datos sean correctos. Ante cualquier duda, envía un mail a soporte@bluedragonstore.com",
      "",
      "warning",
      "Volver a intentar"
    );
    navigate("/");
  });

  return <div></div>;
};

export default Error;
