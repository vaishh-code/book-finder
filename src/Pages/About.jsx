import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
          About Book Finder
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Book Finder</strong> is a simple web application designed to help
          users quickly find books from the Open Library database. You can search by
          book title, view basic details, and explore more information about each book.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          This project was built using <strong>React.js</strong> and styled with{" "}
          <strong>Tailwind CSS</strong>. It demonstrates key web development concepts
          such as API integration, dynamic routing, responsive design, and clean UI/UX.
        </p>
      </div>
    </div>
  );
};

export default About;
