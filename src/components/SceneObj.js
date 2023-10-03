import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import GltfObj from "./GltfObj.js";
import Room from "./Room.js";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function SceneObj() {
  const { gl } = useThree();
  useEffect(() => {
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.VSMShadowMap;
  });
  return (
    <>
      <OrbitControls
        target={[0, 0, 0]}
        position={[0, 0, 0]}
        maxPolarAngle={1.4}
        maxDistance={17}
        enablePan={false}
      />
      <PerspectiveCamera makeDefault fov={50} position={[10, 10, 10]} />
      <directionalLight
        color={[1, 1, 1]}
        intensity={1.5}
        position={[0, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.4} />
      <GltfObj />
      <Room />
    </>
  );
}
