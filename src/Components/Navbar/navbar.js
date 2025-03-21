import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg sticky">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left side - Navigation links */}
        <div className="flex space-x-6">
          <Link
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-600 transition duration-300"
            to={'/'}
          >
            Home
          </Link>
          <Link
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-600 transition duration-300"
            to={'/about'}
          >
            About
          </Link>
          <Link
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-600 transition duration-300"
            to={'/contactUs'}
          >
            Contact Us
          </Link>
        </div>

        {/* Right side - Auth links */}
        <div className="flex space-x-4">
          <Link
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition duration-300"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition duration-300"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
