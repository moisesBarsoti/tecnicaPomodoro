import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PegandoInfo } from "./pages/PegandoInfo/PegandoInfo.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PegandoInfo />,
  },
  {
    path: "/temporizador",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);