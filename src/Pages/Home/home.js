import React from "react";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/charity-close-diverse-people-holding-260nw-1154653396.jpg')",
      }}
    >
      {/* Overlay Effect for Better Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h2 className="text-9xl font-bold tracking-wider">
          <span
            className="relative"
            style={{
              WebkitTextStroke: "3px #2c2c2c", // Charcoal outline
              color: "white", // White text color
            }}
          >
            Hope Live
          </span>
        </h2>
        
        {/* Buttons Section */}
        <div className="mt-10 flex space-x-6">
          <Link to="/login" className="transition ease-in-out delay-120 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 transform px-7 py-3 text-white text-lg font-semibold rounded-lg shadow-lg">
            Donate
          </Link>
          <Link to="/login" className="   transition ease-in-out delay-120 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 transform px-3 py-3 text-white text-lg font-semibold rounded-lg shadow-lg">
            Fund Raising
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
