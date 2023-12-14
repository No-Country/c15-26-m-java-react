import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error.jsx";
import ItemDetail from "./components/ItemDetail.jsx";
import ItemList from "./components/ItemList.jsx";
import LoginForm from "./components/LoginForm.jsx";
import OrderForm from "./components/OrderForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Root from "./routes/Root.jsx";
import OrderDetail from "./components/OrderDetail.jsx";
import OrderList from "./components/OrderList.jsx";
import CustomerProfile from "./components/CustomerProfile.jsx";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <ItemList />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "item/:id",
        element: <ItemDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <OrderForm />,
      },
      {
        path: "order/:id",
        element: <OrderDetail />,
      },
      {
        path: "orders/:customerId",
        element: <OrderList />,
      },
      {
        path: "profile",
        element: <CustomerProfile />,
      },
    ],
  },
]);

export default router;
