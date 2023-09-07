import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Oggetto3d } from "./public/Abstract_design"
import { Sparkles, AccumulativeShadows, RandomizedLight, PerformanceMonitor, Environment, Lightformer, PresentationControls, ScrollControls, Scroll, CameraShake } from '@react-three/drei'
import './App.css'
import { Html } from "@react-three/drei"

function ScrittaUno() {

return (
<div className="content-container">
    <div className="text-line">SavexDesign</div>
    <div className="text-line">SavexDesign</div>
    <div className="text-line">SavexDesign</div>
    <div className="text-line">SavexDesign</div>
  </div>
)
}
    export default ScrittaUno;