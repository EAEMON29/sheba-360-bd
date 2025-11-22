import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ searchText, setSearchText }) {
  return (
    <nav className="shadow-md bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">

        {/* LEFT SIDE: LOGO */}
        <div>
          <Link className="btn btn-ghost text-xl text-blue-600 font-bold">
            SHEBA 360 BD
          </Link>
        </div>

        {/* MIDDLE MENU (Desktop Only) */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
          <li className="hover:text-blue-400 cursor-pointer">HOME</li>
          <li className="hover:text-blue-400 cursor-pointer">MENU</li>
          <li className="hover:text-blue-400 cursor-pointer">ABOUT</li>
          <li className="hover:text-blue-400 cursor-pointer">CONTACT</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SEARCH BAR */}
          <label className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 border border-transparent focus-within:border-blue-400 transition">
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white placeholder-white/60 w-32 md:w-40"
            />
          </label>

          {/* LOGIN BUTTON */}
          <Link
            to="/signin"
            className="hidden md:block px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
          >
            Sign In / Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}
