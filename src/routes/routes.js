import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Order from "../components/Order/Order";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Profile from "../components/Profile/Profile";
import Shop from "../components/Shop/Shop";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "shop",
        loader: () => fetch("http://localhost:5000/products"),
        element: (
          <PrivateRoutes>
            <Shop></Shop>
          </PrivateRoutes>
        ),
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
