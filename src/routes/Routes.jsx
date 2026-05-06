import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../pages/Books/Books";
import HomePage from "../pages/Home/HomePage";
import Error from "../pages/Error/Error";
import BookDetails from "../pages/BookDetails/BookDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement: <Error></Error>
  },
]);
