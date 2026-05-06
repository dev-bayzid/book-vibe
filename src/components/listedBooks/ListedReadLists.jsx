import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBooksCard from "../UI/ListedBooksCard";

const ListedReadLists = ({ sortingType }) => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks);

  const [filteredReadList, setFilteredReadList] = useState(storedBooks);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setFilteredReadList(sortedData);
      } else if (sortingType === "rating" ) {
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        console.log(sortedData);
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, storedBooks]);

  if (filteredReadList.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh] rounded-3xl bg-base-300">
        <h2 className="font-bold text-3xl">No read list data found</h2>
      </div>
    );
  }

  return (
    <div>
      {filteredReadList.map((book, ind) => (
        <ListedBooksCard key={ind} book={book}></ListedBooksCard>
      ))}
    </div>
  );
};

export default ListedReadLists;
