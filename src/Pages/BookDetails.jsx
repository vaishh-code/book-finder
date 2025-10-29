import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBookDetails } from "../Services/bookApi";

const BookDetails = () => {
  const { id } = useParams(); // Get book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const data = await fetchBookDetails(id);
        setBook(data);
      } catch (err) {
        setError("Failed to load book details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getBookDetails();
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading book details...</p>;

  if (error)
    return <p className="text-center text-red-500 mt-10">{error}</p>;

  if (!book)
    return <p className="text-center text-gray-600 mt-10">Book not found.</p>;

  const coverUrl = book.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="max-w-3xl bg-white shadow-md rounded-xl p-6">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-48 h-72 object-cover mx-auto mb-4 rounded-md shadow"
        />
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-3">
          {book.title}
        </h1>
        {book.description && (
          <p className="text-gray-700 text-center mb-3">
            {typeof book.description === "string"
              ? book.description
              : book.description.value}
          </p>
        )}
        {book.subjects && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {book.subjects.slice(0, 10).map((subject, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
              >
                {subject}
              </span>
            ))}
          </div>
        )}
        <Link
          to="/"
          className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ⬅ Back to Search
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
