import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64 min-h-screen bg-[#f4f2ee]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
