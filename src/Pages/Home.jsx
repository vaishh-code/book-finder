import React, { useState } from "react";
import { FaBook, FaSearch } from "react-icons/fa";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooksByTitle = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await res.json();

      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs.slice(0, 12));
      } else {
        setError("No books found. Try another title!");
        setBooks([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 text-gray-900">
      {/* Title */}
      <div className="flex items-center mb-6 space-x-3">
        <FaBook className="text-purple-600 text-4xl" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 tracking-wide">
          Book Finder
        </h1>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-xl flex items-center space-x-2 mb-10">
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchBooksByTitle()}
          className="flex-grow border border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
        />
        <button
          onClick={fetchBooksByTitle}
          className="flex items-center bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          <FaSearch className="mr-2" /> Search
        </button>
      </div>

      {/* Loading */}
      {loading && <Loader />}

      {/* Error */}
      {error && !loading && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      {/* Books */}
      {!loading && !error && books.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      )}

      {!loading && !error && books.length === 0 && (
        <p className="text-center text-gray-600 mt-10 flex items-center space-x-2">
          <FaSearch className="text-blue-500 text-xl" />
          <span>Start by searching for a book above!</span>
        </p>
      )}
    </div>
  );
};

export default Home;
