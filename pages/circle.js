import { Suspense } from "react";

import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Background from "../components/Background";

import rectAreaLight from '../components/KeyLight';

import AnimatedSphere from "../components/AnimatedSphere";


export default function App() {
  return (
    <Wrapper className="App">
      <Background />
   
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={true} />
        
        <rectAreaLight
      width={3}
      height={3}
      color="black"
      intensity={4}
      position={[-1, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
        <directionalLight position={[-1, 5, 2,]} />
        <Suspense fallback={null}>
        <AnimatedSphere />
        </Suspense>
      </Canvas>
      


    
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: transparent;

  canvas {
    height: 00px;
  }
`;