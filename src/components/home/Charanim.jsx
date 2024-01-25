import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/charanim.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(()=> {
    actions.charanim.play();
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.009}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Character">
            <skinnedMesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.character} skeleton={nodes.Plane002.skeleton} />
            <skinnedMesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials.Yellow} skeleton={nodes.Plane002_1.skeleton} />
            <skinnedMesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={materials['SVGMat.005']} skeleton={nodes.Plane002_2.skeleton} />
            <skinnedMesh name="Plane002_3" geometry={nodes.Plane002_3.geometry} material={materials.Plus} skeleton={nodes.Plane002_3.skeleton} />
            <skinnedMesh name="Plane002_4" geometry={nodes.Plane002_4.geometry} material={materials.Red} skeleton={nodes.Plane002_4.skeleton} />
            <skinnedMesh name="Plane002_5" geometry={nodes.Plane002_5.geometry} material={materials.Purple} skeleton={nodes.Plane002_5.skeleton} />
            <skinnedMesh name="Plane002_6" geometry={nodes.Plane002_6.geometry} material={materials.Blue} skeleton={nodes.Plane002_6.skeleton} />
            <skinnedMesh name="Plane002_7" geometry={nodes.Plane002_7.geometry} material={materials.Greeb} skeleton={nodes.Plane002_7.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/charanim.glb')
