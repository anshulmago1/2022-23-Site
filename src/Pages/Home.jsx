import { React, Suspense } from "react";
import * as drei from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";

function Home() {
  const { nodes, materials } = drei.useGLTF("./CSNHS_icons.glb");

  return (
    <div className="flex flex-col">
      <header className="h-screen w-full aspect-square">
        <Suspense>
          <Canvas>
            <Environment preset={"dawn"}></Environment>
            <HomeHeaderScene rotation={[0, Math.PI, 0]}></HomeHeaderScene>
            <fog attach="fog" args={["#475569", 5, 40]} />
          </Canvas>
        </Suspense>
      </header>
    </div>
  );
}

function HomeHeaderScene({ position, ...other }) {
  useFrame((state) => {
    state.camera.position.lerp(
      new Vector3(state.mouse.x, state.mouse.y, 10),
      0.05
    );
  });
  return (
    <group other rotation={[0.1, -Math.PI / 2, 0]}>
      <PerspectiveCamera makeDefault position={[0, 4, 4]}></PerspectiveCamera>
      <group position={[2, 0, 0]}>
        <group rotation={[-0.4, 0, 0]}>
          <drei.Float speed={8} rotationIntensity={0.5}>
            <drei.Icosahedron
              args={[1.7, 0]}
              position={[1.2, 0.5, 0]}
              rotation={[0.2, 0.2, 0.1]}
            >
              <meshPhysicalMaterial
                metalness={1}
                roughness={0.2}
                clearcoat={0.4}
              ></meshPhysicalMaterial>
            </drei.Icosahedron>
          </drei.Float>
        </group>
        <gridHelper
          args={[100, 60]}
          position={[10, -1.5, 0]}
          rotation={[0, Math.PI / 6, 0]}
        ></gridHelper>
      </group>
      <drei.Text3D
        font={"./rubik_mono_one.json"}
        position={[-5, 0.6, 0]}
        size={0.6}
        lineHeight={1}
        rotation={[0, Math.PI / 8, 0]}
      >
        Clements {"\n"}
        CSNHS
        <meshPhysicalMaterial
          clearcoat={0}
          metalness={1}
          roughness={0.1}
        ></meshPhysicalMaterial>
      </drei.Text3D>
    </group>
  );
}

function DisplayObject({ position, rotation, geometry, scale }) {
  useFrame((state) => {
    state.camera.position.lerp(
      new Vector3(state.mouse.x, state.mouse.y, 6),
      0.05
    );
  });

  return (
    <mesh
      geometry={geometry}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshPhysicalMaterial
        metalness={1}
        roughness={0.2}
        clearcoat={0.4}
      ></meshPhysicalMaterial>
    </mesh>
  );
}

export default Home;
