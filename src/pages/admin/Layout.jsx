import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

function Layout() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between items-center py-2 h-[70px] px-4  sm:px-12 border-b border-gray-200">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt=""
          className="w-18 sm:w-20 cursor-pointer rounded rounded-full"
        />
        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer text-white bg-primary border border-primary px-10 py-2.5 hover:bg-white hover:text-primary transition-colors duration-300"
        >
          Log out
        </button>
      </div>
      <div className="flex h-[calc(100vh-70-px)]">
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  );
}

export default Layout;
