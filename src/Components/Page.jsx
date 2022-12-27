import React from "react";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <>
      <div className="flex flex-col items-center relative min-h-screen">
        <div className="z-10 max-w-screen-2xl flex flex-col grow justify-between py-40 mx-10">
          <div className="w-full flex flex-col grow justify-center md:gap-8 gap-4">
            {children}
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
