import React, { useState } from "react";
import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import Sidebar from "../Sidebar/sidebar";
import Card from "../Card/card";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-900 text-white w-64 p-5 shadow-lg`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          {/* Menu Button with Badge */}
          <button
            className="relative text-2xl text-gray-700 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FiMenu />
            {/* Notification Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              1
            </span>
          </button>

          {/* Search Bar */}
          <div className="flex bg-white shadow rounded-lg p-2 w-1/2">
            <FiSearch className="text-gray-500 text-xl mr-2" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full focus:outline-none"
            />
          </div>

          {/* Dropdown */}
          <select className="p-2 bg-white shadow rounded-lg">
            <option value="educational">Educational</option>
            <option value="medical">Medical</option>
            <option value="disaster">Disaster</option>
          </select>
        </div>

        {/* Campaign Cards */}
        <div className="flex flex-wrap gap-4 ml-64">
          <div className="grid grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-6">
          <button className="px-3.5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
            ⬅ Previous
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition ml-4">
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
