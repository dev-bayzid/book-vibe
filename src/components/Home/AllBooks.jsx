import { use } from "react";
import BookCard from "../UI/BookCard";

const booksData = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksData);
//   console.log(books);
  return (
    <div className="mt-15">
        <h2 className="font-bold text-4xl text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto my-6">
        {books.map((book, ind) => (
          <BookCard key={ind} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
