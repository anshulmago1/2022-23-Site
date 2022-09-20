import React from "react";
import * as drei from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Vector3 } from "three";
import FacebookIcon from "../assets/facebook_icon.svg";
import RemindIcon from "../assets/remind_icon.svg";

function Home() {
  return (
    <body className="flex flex-col">
      <header className="h-screen w-full aspect-square">
        <Canvas>
          <Environment preset={"city"}></Environment>
          <HomeHeaderScene rotation={[0, Math.PI, 0]}></HomeHeaderScene>
          <fog attach="fog" args={["#475569", 5, 40]} />
        </Canvas>
      </header>

      <section id="pillars" className="mb-40">
        <div className="h-96">
          Scholarship
        </div>
        <div style={{clipPath: 'polygon(0 19%, 100% 0, 100% 100%, 0 60%)'}} className="bg-blue-500 h-screen">
          Service
        </div>
        <div className="h-96">
          Leadership
        </div>
        <div style={{clipPath: 'polygon(0 11%, 100% 0, 100% 60%, 0 100%)'}} className="bg-blue-500 h-screen">
          Character
        </div>
      </section>

      <section id="about">
        <div className="h-80">

        </div>
      </section>

      <footer className="p-6">
        <div className="flex items-center mb-2">
          <div className="mr-8">
            <a href="#">Join Our Club</a>
          </div>
          <a href="https://www.facebook.com/groups/chscsnhs" className="flex items-center mr-8">
            <img src={FacebookIcon} alt="Facebook" className="w-7 mr-2" />
            <span>Clements CSNHS</span>
          </a>
          <a href="https://www.remind.com/join/chscsnhs" className="flex items-center">
            <img src={RemindIcon} alt="Remind" className="w-9 mr-1" />
            <span>@chscsnhs</span>
          </a>
        </div>
        <div className="border-b border-white"></div>
        <div className="mt-2">
          Copyright &copy;2022 Clements Computer Science National Honor Society. All rights reserved.
        </div>
      </footer>
    </body>
  );
}

function HomeHeaderScene({ position, ...other }) {
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
              <drei.Icosahedron args={[2, 0]} position={[1.2, 0.5, 0]} rotation={[0.2, 0.2, 0.1]}>
                <meshPhysicalMaterial></meshPhysicalMaterial>
              </drei.Icosahedron>
            </drei.Float>
        </group>
        <gridHelper args={[100, 60]} position={[10, -1.5, 0]} rotation={[0, Math.PI/6, 0]}></gridHelper>
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
