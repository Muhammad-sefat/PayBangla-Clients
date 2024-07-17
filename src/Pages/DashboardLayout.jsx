import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="w-[250px]">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
