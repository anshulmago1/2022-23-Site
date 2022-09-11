import React from "react";
import { useFrame } from "@react-three/fiber";

export default function SpinningGeometry() {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime() / 3;
    myMesh.current.rotation.z = clock.getElapsedTime() / 3;
  });
  return (
    <mesh ref={myMesh}>
      <icosahedronGeometry args={[2, 1]}></icosahedronGeometry>
      <meshPhongMaterial
        args={[{ color: 0x3d4470, flatShading: true }]}
      ></meshPhongMaterial>
    </mesh>
  );
}
