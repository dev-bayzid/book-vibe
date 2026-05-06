import { Star } from "lucide-react";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="bg-base-200 p-10">
        <img src={book.image} alt={book.bookName} className="h-[300px]" />
      </figure>
      <div className="card-body">
        <div className="flex justify-start gap-4">
          {book.tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge bg-green-50 text-green-400 font-bold"
            >
              {tag}
            </div>
          ))}
        </div>

        <h2 className="card-title font-semibold text-2xl">{book.bookName}</h2>
        <p className="text-xl">
          By: <span className="font-bold">{book.author}</span>
        </p>

        <div className="card-actions border-t border-dashed border-gray-300 pt-4 flex justify-between text-xl">
          <div className="">{book.category}</div>
          <div className="flex justify-center gap-2 items-center">
            {book.rating} <Star></Star>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
