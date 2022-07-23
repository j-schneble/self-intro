import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";


export default function Sphere () {
  const sphereRef = useRef();
  const repeatX = 4;
  const repeatY = 2;

  const base = useLoader(THREE.TextureLoader, "images/metal1_basecolor.jpg");
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);
  useFrame(() => {
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3, 36, 36]} />
      <meshPhysicalMaterial
        map={base}
        metalnessMap={metalness}
        bumpMap={bump}
        aoMap={ao}
        normalMap={normal}
        roughnessMap={rough}
      />
    </mesh>
  );
};

