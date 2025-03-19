import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-500 w-full h-20 flex items-center justify-between px-4">
      <div className="">
        <Link className="p-2 ml-3 text-xl bg-slate-400 rounded-full  hover:bg-slate-600 hover:text-white" to="/">Home</Link>
        <Link className="p-2 ml-3 text-xl bg-slate-400 rounded-full  hover:bg-slate-600 hover:text-white" to="/about">About</Link>
        <Link className="p-2 ml-3 text-xl bg-slate-400 rounded-full  hover:bg-slate-600 hover:text-white" to="/contact">Contact Us</Link>
      </div>
      <div className="">
        <Link className="p-2 mr-3 text-xl bg-slate-400 rounded-full  hover:bg-slate-600 hover:text-white" to="/login">Login</Link>
        <Link className="p-2 mr-3 text-xl bg-slate-400 rounded-full  hover:bg-slate-600 hover:text-white" to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};
export default Navbar;
