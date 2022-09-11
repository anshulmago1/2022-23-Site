import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function SpinningScene({ object }) {
  return (
    <Canvas>
      {" "}
      <ambientLight intensity={0.1}></ambientLight>
      <directionalLight color={"white"} position={[3, 3, 5]}></directionalLight>
      {object}
    </Canvas>
  );
}
