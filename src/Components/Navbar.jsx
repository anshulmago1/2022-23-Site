import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 py-4 px-10 bg-slate-500 bg-opacity-25 backdrop-blur-md w-screen border-b border-b-slate-500 z-40 ">
      <Link
        to="/"
        className="text-xl font-bold hover:text-blue-400 transition-all "
      >
        CSNHS
      </Link>
      <ul className="md:flex hidden gap-10 ">
        <li>
          <Link to="/club_info" className="hover:text-blue-400 transition-all ">
            Club Information
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-400 transition-all ">
            Projects
          </Link>
        </li>
      </ul>
      <div className="md:hidden block">small menu</div>
    </nav>
  );
}

export default Navbar;
