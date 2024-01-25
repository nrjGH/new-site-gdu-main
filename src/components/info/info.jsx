import { Canvas } from "@react-three/fiber";
import Layout from "./Layout"; 
import {ScrollControls } from "@react-three/drei";
import './info.css'
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { useGLTF} from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import {useLoader } from '@react-three/fiber'
// camera={{position:[0,0,0],rotation:[0,0,0]}} 
export default function info(){
    return(
        <div className="info">
            <Canvas >
                <Suspense fallback={null}>
                <Environment files="assets/anime_art_style_minecraft_style_daylight_standing_-min-min.hdr" background  />
                    <ambientLight intensity={1.5}/>
                    {/* <OrbitControls enableZoom={false}/> */}
                    <ScrollControls pages={3} damping={0.25}>
                        {/* <Castle2  position={[0,-0.45,-5]} rotation={[0,Math.PI,0]}/>
                        <Castle1 position={[20,-0.45,-5]} rotation={[0,Math.PI,0]}/> 
                        <Ground position={[-1,-0.5,-15]} scale={2}/> */}
                        <Layout/>
                    </ScrollControls>
                </Suspense>
        </Canvas>
       </div>
    );
}

useGLTF.preload("assets/Home.glb");