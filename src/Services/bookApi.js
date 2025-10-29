// src/api/bookApi.js

// Fetch books by title
export const fetchBooksByTitle = async (title) => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
    const data = await response.json();
    return data.docs ? data.docs.slice(0, 10) : [];
  } catch (error) {
    console.error("Error fetching books:", error);
    throw new Error("Failed to fetch books");
  }
};

// Fetch single book details by work ID
export const fetchBookDetails = async (id) => {
  try {
    const response = await fetch(`https://openlibrary.org/works/${id}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw new Error("Failed to fetch book details");
  }
};
