import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-center items-center gap-8">
        <h1 className="text-2xl font-bold">📖 Book Finder</h1>

        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
