import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBooksCard from "../UI/ListedBooksCard";

const ListedWishLists = () => {
  const { wishList } = useContext(BookContext);
  console.log(wishList);

  if (wishList.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh] rounded-3xl bg-base-300">
        <h2 className="font-bold text-3xl">No wish list data found</h2>
      </div>
    );
  }

  return (
    <div>
      {wishList.map((book, ind) => (
        <ListedBooksCard key={ind} book={book}></ListedBooksCard>
      ))}
    </div>
  );
};

export default ListedWishLists;
