import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const Books = () => {
  const { storedBooks, wishlist } = useContext(BookContext);
  console.log(storedBooks, wishlist);

  return (
    <div className="container mx-auto">
    
    </div>
  );
};

export default Books;
