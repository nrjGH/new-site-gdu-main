import React from "react";
import { useGLTF} from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import {useLoader } from '@react-three/fiber'
import Charanim from './Charanim'

export default function Model(props) {
  const { nodes} = useGLTF("assets/Home.glb");
  const ground = useLoader(TextureLoader, 'assets/Ground.jpg')
  const grass = useLoader(TextureLoader, 'assets/Grass.jpg')
  const portalblock = useLoader(TextureLoader, 'assets/Portal_Block.jpg')
  const dirtblock = useLoader(TextureLoader, 'assets/DirtBlock.jpg')
  const portalplane = useLoader(TextureLoader, 'assets/Portal_plane.jpg') 

  return (
    <group {...props} dispose={null}>
      {/* <group
        position={[-1.1, -0.06, -0.71]}
        rotation={[Math.PI, -0.79, Math.PI]}
      >
        <primitive object={nodes.spine} />
        <primitive object={nodes.neutral_bone} />
        <skinnedMesh
          geometry={nodes.Character.geometry}
          material={nodes.Character.material}
          skeleton={nodes.Character.skeleton} 
            >
            <meshStandardMaterial map={character} map-flipY={false} skinning />
          </skinnedMesh>
      </group> */}

      <group position={[-1.1,-.06,-.71]} rotation={[Math.PI,-0.79,Math.PI]}>
        <Charanim/>
      </group>


      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PortalPlane.geometry}
        material={nodes.PortalPlane.material}
        position={[-0.6, 1.81, 5.98]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshBasicMaterial map={portalplane} map-flipY={false}/>   
        </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground.geometry}
        material={nodes.Ground.material}
        position={[4.36, 0, 5.01]}>
            <meshBasicMaterial map={ground} map-flipY={false} />
            {/* <primitive object={props.model} /> */}
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PortalBlocks.geometry}
        material={nodes.PortalBlocks.material}
        position={[-1.8, 0.91, 5.98]}
        rotation={[0, 0, -Math.PI / 2]}>
            <meshBasicMaterial map={portalblock} map-flipY={false}/>
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DirtBlocks.geometry}
        material={nodes.DirtBlocks.material}
        position={[1.4, 0.31, 5.98]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}>
            <meshBasicMaterial map={dirtblock} map-flipY={false}/>
        </mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GrassBlocks.geometry}
        material={nodes.GrassBlocks.material}
        position={[1.41, 1.84, 5.98]}>
            <meshBasicMaterial map={grass} map-flipY={false} />
        </mesh>
    </group>
  );
}

useGLTF.preload("assets/Home.glb");
