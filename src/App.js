import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Oggetto3d } from "./public/Abstract_design"
import { Sparkles, AccumulativeShadows, RandomizedLight, PerformanceMonitor, Environment, Lightformer, PresentationControls, ScrollControls, Scroll, CameraShake } from '@react-three/drei'
import './App.css'
import { Html } from "@react-three/drei"
import Stars from './components/Stars'

export default function App() {
  return (
    
    <Canvas>
      <Suspense fallback={null}>
        <Stars />
        <ambientLight />
      </Suspense>
            <ScrollControls pages={5} damping={0.2}>
          <Scroll html>

{/* Logo */}
<div className="logo" href="homepage">
<img src={require("./logo.png")} alt="logo" width='500vw' height='auto'/>
</div>
<div className='text'>
<div className="container-fluid">
<div className="content-container">
    <div className="text-line">EeveeStudio</div>
    <div className="text-line">EeveeStudio</div>
    <div className="text-line">EeveeStudio</div>
    <div className="text-line">EeveeStudio</div>
  </div>
</div>

            </div>
          </Scroll>
      <Oggetto3d scale={0.8}/>
      <Sparkles count={999} size ={1} speed={1} noise={1000} color={'#ffffff'} scale={[10,80,10]}/>
      </ScrollControls>
    </Canvas>

    
  )
}
