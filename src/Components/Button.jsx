import React from "react";
import { Link } from "react-router-dom";

function Button({ children, className, to, href, ...props }) {
  const baseClasses = "inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md hover:shadow-lg transform hover:-translate-y-0.5";

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
