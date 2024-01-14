import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';


const Ball = ({icon}) => {
  const decal = useTexture(icon);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
          <ambientLight color="blue" intensity={0.25}/>
          <directionalLight color="skyblue" position={[0,0,0.05]}/>
          <mesh castShadow receiveShadow scale={2.75}>
            <dodecahedronGeometry args={[1,5]} />
            <meshStandardMaterial color="white" />
            <Decal position={[0, 0, 1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]}/>
          </mesh>
        </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameLoop="demand" gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas