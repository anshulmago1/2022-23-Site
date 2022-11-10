import React from "react";

export default function Page({ children }) {
  return (
    <div className="flex flex-col items-center mb-auto">
      <div className="z-10 max-w-screen-2xl my-40 lg:mx-24 md:mx-16 sm:mx-10 mx-10">
        <div className="w-full max-h-screen flex flex-col md:gap-10 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
