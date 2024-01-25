import { Canvas, useFrame } from "@react-three/fiber";
import Castle1 from './Castle1'
import Castle2 from './Castle2'
import Ground from './Ground'
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import './info.css'
import { Suspense, useState } from "react";
import { Environment } from "@react-three/drei";
import gsap from "gsap"
import { useRef } from "react";
import { useLayoutEffect } from "react";


export default function Layout(){
    const scroll_len=5;
    const count=5;

    const ref=useRef();
    const tl=useRef();
    const scroll=useScroll();

    const [active,setActive]=useState(true);


    useFrame(()=>{
        tl.current.seek(scroll.offset*tl.current.duration())
    })

    useLayoutEffect(()=>{
        tl.current=gsap.timeline();
        tl.current.to(
            ref.current.position,
            {
                duration:2,
                x:-scroll_len*(count-1),
            },
            0
        );    
    }, []);

    return(
        <group ref={ref}>
            <Castle1  position={[0,-0.45,-5]} rotation={[0,Math.PI,0]} onClick={()=> setActive(!active)}/>
            <Castle2 position={[20,-0.45,-5]} rotation={[0,Math.PI,0]}/> 
            <Ground position={[-1,-0.5,-15]} scale={2}/>
        </group>
    )
}