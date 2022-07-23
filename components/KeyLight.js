import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";


export default function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={rgb(204, 75, 202)}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}