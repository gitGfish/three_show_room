import React from "react";
import "./App.css";

import { Canvas } from "@react-three/fiber";

import SceneObj from "./components/SceneObj";

function App() {
  return (
    <Canvas shadows shadow-mapsize-height={2048} shadow-mapsize-width={2048}>
      <SceneObj />
    </Canvas>
  );
}

export default App;
