import React from "react";  
import Navbar from "../../Components/Navbar/navbar";
import { Link } from "react-router-dom";
const Home = () => { 
    return(
        <div className="bg-[url('https://www.shutterstock.com/image-photo/charity-close-diverse-people-holding-260nw-1154653396.jpg')] bg-cover bg-center h-screen w-full">
            <Navbar/>
            <h2 className="m-10 p-3 text-6xl flex justify-center text-gray-500">Hope Live</h2>
        </div>
     );
};
export default Home;