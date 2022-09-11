import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="fixed top-0 left-0 py-4 px-10 space-between flex  backdrop-blur-md gap-20 w-screen border-b border-b-slate-500 z-40">
        <li>
          <Link to="/" className="font-bold">
            CSNHS
          </Link>
        </li>
        <li>
          <Link to="/club_info">Club Information</Link>
        </li>
        <li>
          <Link to="/meeting_dates">Meeting Dates</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
