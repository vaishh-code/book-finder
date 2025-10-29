import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Book Finder | Built by Vaishnavi Jadhav
      </div>
    </footer>
  );
};

export default Footer;
