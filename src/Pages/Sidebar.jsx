import React from "react";
import UserMenu from "./Common/UserMenu";
import AgentMenu from "./Common/AgentMenu";
import AdminMenu from "./Common/AdminMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="bg-blue-500 rounded h-screen flex flex-col justify-between">
      <div>
        {role === "user" && <UserMenu />}
        {role === "agent" && <AgentMenu />}
        {role === "admin" && <AdminMenu />}
      </div>
      <Link
        to={"/"}
        className="border rounded p-1 text-white font-semibold mb-8 mx-8"
      >
        Home
      </Link>
    </div>
  );
};

export default Sidebar;
