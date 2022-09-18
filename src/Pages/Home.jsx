import React from "react";
import SpinningScene from "../Components/SpinningScene";
import SpinningGeometry from "../Components/SpinningGeometry";

function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* TODO: Scale shape to screen size */}
      <div className="fixed w-screen h-screen">
        <SpinningScene
          object={<SpinningGeometry></SpinningGeometry>}
        ></SpinningScene>
      </div>
      <div className="z-10 w-full">
        <div className="flex flex-col place-content-center text-center h-screen">
          <h1 className="lg:text-9xl sm:text-8xl text-7xl">Clements</h1>
          <h1 className="lg:text-9xl sm:text-8xl text-7xl">CSNHS</h1>
        </div>

        <h1 className="text-7xl my-40 ">Education</h1>
        <p className="py-10 w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          ut morbi tincidunt augue interdum velit euismod in. Lorem ipsum dolor
        </p>
        <h1 className="text-7xl my-40 ">Service</h1>
        <p className="py-10 w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          ut morbi tincidunt augue interdum velit euismod in. Lorem ipsum dolor
        </p>
        <h1 className="text-7xl my-40 ">Community</h1>
        <p className="py-10 w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          ut morbi tincidunt augue interdum velit euismod in. Lorem ipsum dolor
        </p>
      </div>
    </div>
  );
}

export default Home;
