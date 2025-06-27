import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-18 sm:w-20 cursor-pointer"
      />

      <ul className="flex gap-4 text-sm md:text-base font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-primary text-white px-3 py-1 rounded transition-all duration-300 ease-in-out"
                : "text-primary transition-all duration-300 ease-in-out"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-primary text-white px-3 py-1 rounded transition-all duration-300 ease-in-out"
                : "text-primary transition-all duration-300 ease-in-out"
            }
          >
            About
          </NavLink>
        </li>

        <li>{/* <Link to="/about">About</Link> */}</li>
      </ul>

      {/* <button onClick={() =>navigate('/admin')} 
      className="flex items-center gap-2 rounded-full 
      text-sm cursor-pointer text-white bg-primary border 
      border-primary px-10 py-2.5 hover:bg-white hover:text-primary transition-colors duration-300">
        Login
      </button> */}
    </div>
  );
}

export default Navbar;
