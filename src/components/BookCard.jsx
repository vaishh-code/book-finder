import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  const workKey = book.key.split("/").pop();

  return (
    <Link to={`/book/${workKey}`} className="no-underline">
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-32 h-48 object-cover rounded-md mb-3"
        />
        <h2 className="text-lg font-semibold text-center mb-1 text-gray-900">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 text-center">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
