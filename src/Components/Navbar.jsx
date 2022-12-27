import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 py-4 bg-slate-900 w-full border-b border-b-slate-600 z-40 flex justify-center">
      <div className="flex justify-between items-center max-w-screen-2xl grow mx-10">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-slate-400 transition-all "
        >
          CSNHS
        </Link>

        <ul className="flex sm:gap-6 gap-4">
          <li>
            <Link
              to="/club_info"
              className="hover:text-slate-400 transition-all "
            >
              Club Information
            </Link>
          </li>
          <li>
            <Link to="/forms" className="hover:text-slate-400 transition-all ">
              Forms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
