import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../pages/Books/Books";
import HomePage from "../pages/Home/HomePage";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
    ],
    errorElement: <Error></Error>
  },
]);
