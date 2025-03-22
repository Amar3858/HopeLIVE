import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, name, target, collected }) => {
  return (
    <div className="w-80 h-100 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
      {/* Campaign Image */}
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-md" />

      {/* Campaign Details */}
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-sm text-gray-600">Target: Rs. {target}</p>
      <p className="text-sm text-green-600">Collected: Rs. {collected}</p>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-3">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
          Donate
        </button>
        <Link to="/chat" className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-gray-400">
          Chat Now
        </Link>
      </div>
    </div>
  );
};

export default Card;
