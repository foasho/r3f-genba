import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div className="h-screen">
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
