import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBooksCard from "../UI/ListedBooksCard";

const ListedWishLists = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  console.log(wishList);

  const [filteredWishList, setFilteredWishList] = useState(wishList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setFilteredWishList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
        console.log(sortedData);
        setFilteredWishList(sortedData);
      }
    }
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh] rounded-3xl bg-base-300">
        <h2 className="font-bold text-3xl">No wish list data found</h2>
      </div>
    );
  }

  return (
    <div>
      {filteredWishList.map((book, ind) => (
        <ListedBooksCard key={ind} book={book}></ListedBooksCard>
      ))}
    </div>
  );
};

export default ListedWishLists;
