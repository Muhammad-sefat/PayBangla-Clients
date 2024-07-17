import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/pay.webp";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setIsLoggedIn(false);

    toast("Logout Successfull!");
    navigate("/");
  };
  return (
    <div className="navbar bg-blue-500 -mt-7 rounded px-7">
      <div className="flex-1">
        <img className="w-[5%] rounded-xl" src={logo} alt="" />
        <a className="ml-2 text-2xl font-bold text-white">PayBangla</a>
      </div>
      <div className="flex-none">
        {isLoggedIn && (
          <div className="dropdown dropdown-end mr-4">
            <Link to={"/dashboard"} className="text-xl text-white">
              <FaBars />
            </Link>
          </div>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
