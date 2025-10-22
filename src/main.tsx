import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Calcul from "./components/Calcule/Calcul";
import Error from "./components/Error/Error";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Page d'erreur pour toutes les erreurs
    children: [
      { index: true, element: <Home /> },
      { path: "imc", element: <Calcul /> },
      { path: "*", element: <Error /> }, // Catch-all pour URL inconnues
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
