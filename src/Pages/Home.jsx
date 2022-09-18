import React from "react";
import * as THREE from "three";
import * as drei from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshDistortMaterial,
  PerspectiveCamera,
} from "@react-three/drei";
import { useRef } from "react";
import { Vector3 } from "three";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-screen w-full aspect-square">
        <Canvas>
          <Environment preset={"city"}></Environment>
          <HomeScene rotation={[0, Math.PI, 0]}></HomeScene>
        </Canvas>
      </div>
      <div className="z-10 w-full">
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

function HomeScene({ position, ...other }) {
  useFrame((state) => {
    state.camera.position.lerp(
      new Vector3(state.mouse.x / 3, state.mouse.y / 2, 9),
      0.05
    );
  });
  return (
    <group other rotation={[0, Math.PI, 0]}>
      <PerspectiveCamera makeDefault position={[0, 4, 4]}></PerspectiveCamera>
      <group position={[2, 0, 0]}>
        <group rotation={[-0.4, 0, 0]}>
          <drei.Float speed={8} rotationIntensity={0.5}>
            <drei.Icosahedron position={[0, 0.5, 0]} rotation={[0.2, 0.2, 0.1]}>
              <meshPhysicalMaterial></meshPhysicalMaterial>
            </drei.Icosahedron>
          </drei.Float>
        </group>
        <drei.Plane
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          args={[3, 3, 3, 3]}
        >
          <meshBasicMaterial
            wireframe
            color={[0.4, 0.4, 1]}
            wireframeLinewidth={10}
          ></meshBasicMaterial>
        </drei.Plane>
      </group>
      <drei.Text
        position={[-2, 0.4, 0]}
        font={"./Poppins-Light.ttf"}
        fontSize={1}
      >
        CSNHS
      </drei.Text>
    </group>
  );
}

export default Home;
