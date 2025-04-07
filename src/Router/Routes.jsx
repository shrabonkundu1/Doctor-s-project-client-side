import { createBrowserRouter } from "react-router-dom"; 
import Mainlayout from "./Layout/Mainlayout";
import About from "../Pages/About";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";
import AboutUs from "../Pages/About/AboutUs";

  export const router = createBrowserRouter([
    {
      path: "",
      element: <Mainlayout></Mainlayout>,
      children : [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/about",
            element:<AboutUs></AboutUs>
        },
        {
            path: "/services",
            element:<Service></Service>
        },
        {
            path: "/contact",
            element:<Contact></Contact>
        },
      ]
    },
  ]);
  