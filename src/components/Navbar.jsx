import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

const Navbar = ({ searchText, setSearchText }) => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <nav className="shadow-md bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center py-6">

        {/* ---------- LEFT LOGO + MOBILE MENU ---------- */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="fruktur-regular text-2xl text-[#1D4ED8]">
            SHEBA 360 BD
          </Link>
        </div>

        {/* ---------- DESKTOP MENU ---------- */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
          <NavLink to="/" className="hover:text-blue-400 duration-300">
            HOME
          </NavLink>

          <NavLink to="/menu" className="hover:text-blue-400 duration-300">
            MENU
          </NavLink>

          <NavLink to="/about" className="hover:text-blue-400 duration-300">
            ABOUT
          </NavLink>

          <NavLink to="/contact" className="hover:text-blue-400 duration-300">
            CONTACT
          </NavLink>
        </ul>

        {/* ---------- RIGHT FEATURES ---------- */}
        <div className="flex items-center gap-4">

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative btn btn-ghost p-2 rounded-full hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m6-9l2 9m-6-5h6"
              />
            </svg>

            {/* Cart Count */}
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-950 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Sign in / up */}
          <Link
            to="/signin"
            className="hidden md:block px-4 py-2 rounded-full bg-blue-950 hover:bg-blue-700 transition text-sm font-medium"
          >
            Sign In / Sign Up
          </Link>
        </div>
      </div>

      {/* ---------- MOBILE DROPDOWN MENU ---------- */}
      {menuOpen && (
        <ul className="lg:hidden bg-black/70 backdrop-blur-md text-white w-full px-6 pb-4 animate-fadeDown flex flex-col gap-3">

          <NavLink to="/" className="py-2 border-b border-white/10">
            HOME
          </NavLink>

          <NavLink to="/menu" className="py-2 border-b border-white/10">
            MENU
          </NavLink>

          <NavLink to="/about" className="py-2 border-b border-white/10">
            ABOUT
          </NavLink>

          <NavLink to="/contact" className="py-2 border-b border-white/10">
            CONTACT
          </NavLink>

          {/* SignIn Mobile */}
          <Link
            to="/signin"
            className="mt-3 block text-center w-full py-2 bg-blue-950 rounded-full hover:bg-blue-700 transition"
          >
            Sign In / Sign Up
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
