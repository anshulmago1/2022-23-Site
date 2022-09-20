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
      <div className="h-[50rem] w-full aspect-video">
        <Canvas>
          <Environment preset={"dawn"}></Environment>
          <HomeScene rotation={[0, 0, 0]}></HomeScene>
          <fog attach="fog" args={["#566579", 5, 40]} />
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

function HomeScene({ position, rotation, ...other }) {
  useFrame((state) => {
    state.camera.position.lerp(
      new Vector3(state.mouse.x, state.mouse.y, 10),
      0.05
    );
  });
  return (
    <group position={position} rotation={rotation}>
      <PerspectiveCamera makeDefault position={[0, 4, 4]}></PerspectiveCamera>
      <group position={[2, 0, 0]}>
        <group rotation={[-0.4, 0, 0]}>
            <drei.Float speed={8} rotationIntensity={0.5}>
              <drei.Icosahedron args={[2, 0]} position={[1.2, 0.5, 0]} rotation={[0.2, 0.2, 0.1]}>
                <meshPhysicalMaterial clearcoat={0} metalness={1} roughness={.2} color={[.5, .5, .8]}></meshPhysicalMaterial>
              </drei.Icosahedron>
            </drei.Float>
        </group>
        <gridHelper args={[100, 60]} position={[10, -1.5, 0]} rotation={[0, Math.PI/6, 0]}></gridHelper>
      </group>
      <drei.Text3D font={'./rubik_mono_one.json'} position={[-5, .6, 0]} size={.6} lineHeight={1} rotation={[0, Math.PI / 8, 0]}>
        Clements {'\n'}
        CSNHS
        <meshPhysicalMaterial clearcoat={0} metalness={1} roughness={.1}></meshPhysicalMaterial>
      </drei.Text3D>
    </group>
  );
}

export default Home;
