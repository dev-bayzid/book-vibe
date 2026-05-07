import { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
} from "../Utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
  const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

  const handleMarkAsRead = (currentBook) => {
   

    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("This book already exists");
    } else {
       addReadListToLocalDB(currentBook);
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }
  };
  const handleWishList = (currentBook) => {
    

    const isExistToReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistToReadList) {
      toast.error(`${currentBook.bookName} is already in read list`);
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("This book already exists");
    } else {
      addWishListToLocalDB(currentBook);
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to Wish list`);
    }
  };

  const data = {
    setReadList,
    readList,
    handleMarkAsRead,
    handleWishList,
    setWishList,
    wishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
