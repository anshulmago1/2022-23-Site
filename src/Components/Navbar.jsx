import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { to: "/club_info", label: "Club Info" },
    { to: "/forms", label: "Forms" },
    { to: "/calendar", label: "Calendar" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-md bg-opacity-80 text-white shadow-xl fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <span className="text-2xl font-extrabold tracking-tight">CSNHS</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} isActive={location.pathname === item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-blue-600 to-purple-600 backdrop-blur-md bg-opacity-90">
            {navItems.map((item) => (
              <MobileNavLink key={item.to} to={item.to} isActive={location.pathname === item.to}>
                {item.label}
              </MobileNavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ children, to, isActive }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group ${
        isActive ? 'text-white' : 'text-blue-100 hover:text-white'
      }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 ease-out ${
        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`} />
    </Link>
  );
}

function MobileNavLink({ children, to, isActive }) {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-white'
      } transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}

export default Navbar;
