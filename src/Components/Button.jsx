import React from "react";

function Button({ children }) {
  return (
    <button className="bg-blue-600 w-fit px-4 py-2 sm:text-xl rounded-lg hover:bg-blue-500 transition-all">
      {children}
    </button>
  );
}

export default Button;
