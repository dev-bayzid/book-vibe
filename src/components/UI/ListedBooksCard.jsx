import { MapPin, StickyNote, Users } from "lucide-react";

const ListedBooksCard = ({ book }) => {
  const {
    bookName,
    author,

    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row bg-base-100 shadow-sm rounded-3xl">
        <figure className="p-10">
          <img src={image} alt={bookName} className="h-[200px]" />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="font-bold text-3xl">{bookName}</h2>
          <p className="text-xl">
            By: <span className="font-bold">{author}</span>
          </p>

          <div className="flex">
            <div className="flex justify-start items-center gap-2 text-xl">
              <span className="font-extrabold text-xl">Tag</span>
              {tags.map((tag, ind) => (
                <div
                  key={ind}
                  className="badge bg-green-100 text-green-500 border-green-100 font-bold"
                >
                  #{tag}
                </div>
              ))}
            </div>
            <div className="flex gap-1 items-center ml-2">
              <MapPin className="w-4 h-4"></MapPin> Year of Publishing : {yearOfPublishing}
            </div>
          </div>

          <div className="flex justify-start gap-10 text-xl border-b border-gray-300 pb-4">
            <div className="flex justify-start items-center gap-1">
              {" "}
              <Users className="w-4 h-4"></Users> Publisher : {publisher}
            </div>
            <div className="flex justify-start items-center gap-1">
              <StickyNote className="w-4 h-4"></StickyNote> Pages : {totalPages}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="badge bg-blue-100 text-blue-500 border border-blue-100 p-4 rounded-full">
              Category:{category}
            </div>
            <div className="badge bg-[#ffad332d] text-[#FF9A00] border-[#ffad3300] p-4 rounded-full">
              Rating:{rating}
            </div>
            <div className="badge bg-green-500 text-white border border-green-500 p-4 rounded-full font-bold">
              View Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
