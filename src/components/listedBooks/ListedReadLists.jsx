import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBooksCard from "../UI/ListedBooksCard";

const ListedReadLists = () => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks);

  if (storedBooks.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh] rounded-3xl bg-base-300">
        <h2 className="font-bold text-3xl">No read list data found</h2>
      </div>
    );
  }

  return (
    <div>
      {storedBooks.map((book, ind) => (
        <ListedBooksCard key={ind} book={book}></ListedBooksCard>
      ))}
    </div>
  );
};

export default ListedReadLists;
