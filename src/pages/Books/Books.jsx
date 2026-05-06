import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";


const Books = () => {

          const {storedBooks} = useContext(BookContext)
          console.log(storedBooks);
        

    return (
        <div>
            Books
        </div>
    );
};

export default Books;