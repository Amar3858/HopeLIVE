import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" ">
            <div className="">
                <Link to="/">Home</Link>

            </div>
            <div className="">
                <Link to="/about">About</Link>      
            </div>
            <div className="">
               <Link to="/contact">Contact</Link>                             
            </div>
            <div className="">
                 <Link to="/login">Login</Link>       
            </div>
            <div className="">
                <Link to="/signup">Sign Up</Link>
            </div>
           

        </div>
    );


};
export default Navbar;
