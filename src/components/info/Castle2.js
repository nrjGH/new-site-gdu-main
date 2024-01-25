import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("assets/low_poly_castle.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.main_tower__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 119.4, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[138.79, 138.79, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.walls__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 100, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[138.79, 138.79, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 100, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[138.79, 138.79, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.drawbridge__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 271.32, 364.16]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[138.79, 138.79, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.torch__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0.36, 114.4, 264.16]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.torch002__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[-7.35, -37.43, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.torch001__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 287.44, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.land__0.geometry}
            material={materials["Scene_-_Root"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={453.05}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.flag__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[26.68, 606.78, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.hinge__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0.36, 140.48, 264.16]}
            rotation={[Math.PI / 2, -1.57, 0]}
            scale={36.58}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stones__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 32.97, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[138.79, 138.79, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stones002__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 119.4, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[138.79, 138.79, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stones001__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 100, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[138.79, 138.79, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stones003__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 100, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[138.79, 138.79, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chain__0.geometry}
            material={materials["Scene_-_Root"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/low_poly_castle.glb");