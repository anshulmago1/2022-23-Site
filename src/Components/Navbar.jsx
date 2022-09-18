import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="md:block flex justify-end fixed top-0 left-0 py-4 px-10 bg-slate-500 bg-opacity-25 backdrop-blur-md w-screen border-b border-b-slate-500 z-40">
      <ul className="md:flex hidden gap-20">
        <li>
          <Link to="/" className="hover:font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/club_info" className="hover:font-bold">Club Information</Link>
        </li>
        <li>
          <Link to="/meeting_dates" className="hover:font-bold">Meeting Dates</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:font-bold">Projects</Link>
        </li>
      </ul>
      <div className="md:hidden block">small menu</div>
    </nav>
  );
}

export default Navbar;
