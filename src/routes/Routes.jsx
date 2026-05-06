import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../pages/Books/Books";
import HomePage from "../pages/HomePage/HomePage";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: <HomePage></HomePage>,
      },
      {
        path: "/books",
        Component: <Books></Books>,
      },
    ],
    errorElement: <Error></Error>
  },
]);
