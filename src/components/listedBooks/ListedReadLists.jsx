import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBooksCard from "../UI/ListedBooksCard";

const ListedReadLists = () => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks);

  return (
    <div>
      {storedBooks.map((book, ind) => (
        <ListedBooksCard key={ind} book={book}></ListedBooksCard>
      ))}
    </div>
  );
};

export default ListedReadLists;
