import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBooksCard from "../UI/ListedBooksCard";

const ListedWishLists = () => {
  const { wishList } = useContext(BookContext);
  console.log(wishList);

  return (
    <div>
      {wishList.map((book, ind) => (
        <ListedBooksCard key={ind} book={book}></ListedBooksCard>
      ))}
    </div>
  );
};

export default ListedWishLists;
