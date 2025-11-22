import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20"> 
        {/* pt-20 is perfect for spacing below fixed navbar */}
        <Outlet />
      </main>
    </>
  );
}

export default Root;
