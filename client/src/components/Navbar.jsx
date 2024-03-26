import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/PixelPerfectByMR-Logo.png";
function Navbar({ role }) {
  return (
    <div className=" py-0 shadow-md  flex gap-2 justify-between items-center w-screen bg-[#000011]">
      <div className="logo px-3 ">
        <Link to={"/"} className=" block bg-white">
          <img src={logo} className="w-[200px] shadow-md" alt="" />
        </Link>
      </div>

      <div className="links px-5  text-green-600 flex gap-5 items-center ">
        {role === "admin" && (
          <>
            <Link to={"/register"} className="hover:underline">
              Add student
            </Link>
            <Link to={"/dashboard"} className="hover:underline">
              Dashboard
            </Link>
            <Link to={"/add"} className="hover:underline">
              Add book
            </Link>
          </>
        )}
        {role === "" ? (
          <>
            <Link to={"/books"} className="hover:underline">
              Books
            </Link>
            <Link to={"/login"} className="hover:underline">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link to={"/books"} className="hover:underline">
              Books
            </Link>
            <Link to={"/logout"} className="hover:underline">
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
