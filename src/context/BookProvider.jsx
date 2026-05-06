import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find((book) => book.id === currentBook.id);

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }
  };
  const handleWishList = (currentBook) => {
    const isExistToReadList = storedBooks.find(
      (book) => book.id === currentBook.id,
    );
    if (isExistToReadList) {
      toast.error(`${currentBook.bookName} is already in read list`);
      return;
    }

    const isExistBook = wishList.find((book) => book.id === currentBook.id);

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to Wish list`);
    }
  };

  const data = {
    setStoredBooks,
    storedBooks,
    handleMarkAsRead,
    handleWishList,
    setWishList,
    wishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
