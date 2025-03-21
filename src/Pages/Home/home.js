import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import { Link } from "react-router-dom";

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

      {/* Centered Content - Adjusted to Move Up */}
      <div className="relative flex justify-center h-full">
        <h2 className="text-9xl font-bold tracking-wider text-white text-center">
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
      </div>
    </div>
  );
};

export default Home;
