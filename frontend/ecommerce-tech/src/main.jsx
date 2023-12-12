import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { MyContextProvider } from "./MyContext";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
