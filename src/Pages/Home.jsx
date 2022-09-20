import { React, useState } from "react";
import * as drei from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Vector3 } from "three";

function Home() {
  const [pillar2Hover, setPillar2Hover] = useState(false);
  const [pillar4Hover, setPillar4Hover] = useState(false);

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
          
        </div>

        <div style={{
          filter: pillar2Hover && 'drop-shadow(-5px 10px 4px #7DD3FC)',
        }} className="transition-all duration-500">
          <div style={{
            clipPath: 'polygon(0 19%, 100% 0, 100% 100%, 0 60%)',
          }} className={`bg-sky-600 h-screen ${pillar2Hover && 'hover:-translate-y-4 hover:translate-x-2'} transition-all duration-500`} onMouseOver={() => setPillar2Hover(true)} onMouseLeave={() => setPillar2Hover(false)}>
            
          </div>
        </div>

        <div className="h-96">
          
        </div>

        <div style={{
          filter: pillar4Hover && 'drop-shadow(5px 10px 4px #7DD3FC)',
        }} className="transition-all duration-500">
          <div style={{
            clipPath: 'polygon(0 11%, 100% 0, 100% 60%, 0 100%)',
          }} className={`bg-sky-600 h-screen ${pillar4Hover && 'hover:-translate-y-4 hover:-translate-x-2'} transition-all duration-500`} onMouseOver={() => setPillar4Hover(true)} onMouseLeave={() => setPillar4Hover(false)}>
            
          </div>
        </div>
      </section>

      <section id="about">
        <div className="h-80">

        </div>
      </section>
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
