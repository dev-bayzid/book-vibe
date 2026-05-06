import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { bookId } = useParams();
  //   console.log("bookId", bookId);

  const books = useLoaderData();
  //   console.log(books);
  const expectedBook = books.find((book) => book.bookId === Number(bookId));
  //   console.log(expectedBook);

  const {handleMarkAsRead, handleWishList} = useContext(BookContext)
//   console.log();

 

  const {
    bookName,
    author,
    review,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="grid md:grid-cols-2  container mx-auto my-10 ">
      <figure className="w-full flex justify-center bg-base-300 rounded-3xl items-center">
        <img src={image} alt={bookName} className="h-[600px]" />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title font-bold text-5xl">{bookName}</h2>
        <p className="text-2xl">
          By: <span className="font-bold">{author}</span>
        </p>
        <div className="border-t border-gray-300 border-b font-semibold text-xl py-4">
          <p>{category}</p>
        </div>
        <div className="my-4">
          <p className="text-xl">
            <span className="font-bold ">Review :</span>{" "}
            <span className="font-light">{review}</span>
          </p>
          <div className="flex justify-start items-center gap-4">
            <span className="font-bold text-xl">Tag</span>
            {tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge bg-green-100 text-green-500 font-bold"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-300 pt-3 space-y-3 text-[15px]">
          <div className="flex justify-start items-center gap-2">
            <span>Number of Pages:</span>{" "}
            <span className="font-extrabold">{totalPages}</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span>Publisher:</span>{" "}
            <span className="font-extrabold">{publisher}</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span>Year of Publishing:</span>{" "}
            <span className="font-extrabold">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span>Rating:</span>{" "}
            <span className="font-extrabold">{rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn"
              onClick={() => {
                handleMarkAsRead(expectedBook);
              }}
            >
              Mark as Read
            </button>
            <button className="btn btn-info" onClick={() => {handleWishList(expectedBook)}}>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
