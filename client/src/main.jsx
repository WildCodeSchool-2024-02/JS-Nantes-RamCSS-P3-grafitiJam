import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Terms from "./pages/Terms";
import Map from "./pages/Map";
import Photo from "./pages/Photo";
import Galerie from "./pages/Galerie";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute element={<Admin />} />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/photo",
        element: <Photo />,
      },
      {
        path: "/galerie",
        element: <Galerie />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
