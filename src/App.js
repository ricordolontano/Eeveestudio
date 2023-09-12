import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Oggetto3d } from "./public/Abstract_design"
import { Float, Caustics, Sparkles, AccumulativeShadows, RandomizedLight, PerformanceMonitor, Environment, Lightformer, PresentationControls, ScrollControls, Scroll, CameraShake, SpotLight } from '@react-three/drei'
import { Html } from "@react-three/drei"
import Stars from './components/Stars'
import { MathUtils } from 'three'
import { useMemo } from 'react'
import './app.scss';
import {motion, AnimatePresence} from "framer-motion";

export default function App() {

  const [open, setOpen] = useState(false);

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
  }

  //lets start animation
  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }


  return (
    
    <Canvas>
      <Suspense fallback={null}> 
        <Stars />
        <RandomizedLight castShadow amount={14} frames={100} position={[1, 0, -1]} />
        <Environment
        files="kiara_1_dawn_4k.hdr"
        blur={10}>
   </Environment>
        <ambientLight />
      </Suspense>
            <ScrollControls pages={0} damping={0.2}>
              
          <Scroll html>


          <div className="container">
      <header>
        <div className="menu" onClick={isOpen}>
          <i className="fa fa-bars"></i>
        </div>       
      </header>
      <AnimatePresence>
        {
          open &&(
            <motion.div className="menu_container"
              variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
            >
              <div className="btn_close" onClick={closeMenu}>X</div>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.8}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:1
                    }
                 }}
              >Home</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.7}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.8
                    }
                 }}
              >About</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.6}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.6
                    }
                 }}
              >Portfolio</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.5}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.4
                    }
                 }}
              >Contact</motion.a>
            </motion.div>
          )
        }    
      </AnimatePresence>  
     <div className="content_wrapper">
{/* Logo */}
<div className="logo" href="homepage">
<img src={require("./logo.png")} alt="logo" width='500vw' height='auto'/>
</div>
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
     </div>





          </Scroll>
      <Oggetto3d scale={0.8}/>
      <Sparkles count={999} size ={1} speed={1} noise={1000} color={'#ffffff'} scale={[10,80,10]}/>
 
      </ScrollControls>
    </Canvas>
    
  )
}
