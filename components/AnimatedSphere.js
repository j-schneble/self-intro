import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";


export default function AnimatedSphere() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[-1, -1, -1]}>
    <planeBufferGeometry attach="geometry" args={[50, 50,]} />
    <meshStandardMaterial attach="material"  
    color="black" 
    />
 <pointLight position={[15, 15, 15]} />
    <Sphere visible args={[1, 100, 200, 100]} scale={3}>
    <MeshDistortMaterial
      color="#8352FD"
      attach="material"
      distort={0.7}
      speed={1.5}
      roughness={0}
      metalness={0.2}
      transparent
    />
  </Sphere>
  </mesh>
    
  );
}