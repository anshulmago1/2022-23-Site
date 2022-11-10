import React from "react";

export default function Horizontal({ children }) {
  return (
    <hr className="my-2 h-1 bg-gray-200 border-0 dark:bg-gray-700">
      {children}
    </hr>
  );
}
