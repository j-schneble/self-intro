import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";



export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 50, 2, 52, 52 ]} scale={3}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.7}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
    
  );
}