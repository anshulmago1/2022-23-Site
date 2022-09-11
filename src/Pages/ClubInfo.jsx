import React from "react";
import SpinningScene from "../Components/SpinningScene";
import SpinningGeometry from "../Components/SpinningGeometry";

function ClubInfo() {
  return (
    <div className="flex flex-col items-center">
      <div className="fixed w-screen aspect-square">
        <SpinningScene
          object={<SpinningGeometry></SpinningGeometry>}
        ></SpinningScene>
      </div>
      <div className="z-10">
        <div className="flex flex-col place-content-center h-96">
          <h1 className="text-9xl">Club Info</h1>
        </div>
        <h1 className="text-7xl my-20">Meetings</h1>
        <p className="py-10 w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          ut morbi tincidunt augue interdum velit euismod in. Lorem ipsum dolor
        </p>
        <h1 className="text-7xl my-20">Volunteering</h1>
        <p className="py-10 w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          ut morbi tincidunt augue interdum velit euismod in. Lorem ipsum dolor
        </p>
      </div>
    </div>
  );
}

export default ClubInfo;
