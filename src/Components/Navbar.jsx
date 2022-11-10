import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 py-4 bg-slate-500 bg-opacity-25 backdrop-blur-md w-full border-b border-b-slate-500 z-40 flex justify-center">
      <div className="flex justify-between items-center max-w-screen-2xl grow lg:mx-24 md:mx-16 sm:mx-10 mx-10">
        <Link
          to="/"
          className="text-xl font-bold hover:text-blue-400 transition-all "
        >
          CSNHS
        </Link>

        <ul className="flex sm:gap-6 gap-4">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-all ">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/club_info"
              className="hover:text-blue-400 transition-all "
            >
              Club Information
            </Link>
          </li>
          <li>
            <Link to="/forms" className="hover:text-blue-400 transition-all ">
              Forms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
