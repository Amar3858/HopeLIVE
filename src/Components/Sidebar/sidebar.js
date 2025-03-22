import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiHeart, FiLogOut, FiList, FiBell } from "react-icons/fi";
import { FaPrayingHands } from "react-icons/fa"; // Import Namaste Icon

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-5 shadow-lg">
      {/* Salutation */}
      <h2 className="text-xl font-bold mb-8">Hello, User</h2>
      
      {/* Navigation Links */}
      <nav className="space-y-4 flex-1">
        <Link 
          to="/profile" 
          className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg transition"
        >
          <FiUser />
          <span>My Profile</span>
        </Link>

        <Link 
          to="/my-campaign" 
          className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg transition"
        >
          <FiList />
          <span>My Campaign</span>
        </Link>

        <Link 
          to="/donation-history" 
          className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg transition"
        >
          <FiHeart />
          <span>Donation History</span>
        </Link>

        {/* Notifications Link with Badge */}
        <Link 
          to="/notifications" 
          className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg transition relative"
        >
          <div className="relative">
            <FiBell className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              1
            </span>
          </div>
          <span>Notifications</span>
        </Link>

        {/* Start a Campaign Option */}
        <Link 
          to="/start-campaign" 
          className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg transition text-white"
        >
          <FaPrayingHands className="text-lg" />
          <span>Start a Campaign</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <Link 
        to="/home" 
        className="flex items-center space-x-3 p-3 hover:bg-red-600 rounded-lg transition text-red-400"
      >
        <FiLogOut />
        <span>Logout</span>
      </Link>
    </div>
  );
};

export default Sidebar;
