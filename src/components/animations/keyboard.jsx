import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Keyboard(props) {
  const gltf = useGLTF('/models/kb-draco.glb')
  const nodes = gltf?.nodes ?? {}
  const materials = gltf?.materials ?? {}
  const [glowIntensity, setGlowIntensity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev === 0 ? 1 : 0))
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const letterMat = materials?.['Letter Glow'] ?? null
  const glowMaterial = letterMat ? letterMat.clone() : null
  if (glowMaterial) glowMaterial.emissiveIntensity = glowIntensity
  const basicMaterial = letterMat ? letterMat.clone() : null
  if (basicMaterial) basicMaterial.emissiveIntensity = 0

  // If essential geometry is missing, render nothing (or a simple placeholder)
  if (!nodes.Plane && !nodes.Plane_2) return null

  return (
    <group {...props} dispose={null}>
      {nodes.Plane && (
        <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.Keyboard} />
      )}

      {nodes.Plane_2 && (
        <mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry} material={materials.Silver} />
      )}

      {nodes.Label_keys && (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Label_keys.geometry}
          material={glowIntensity === 0 ? basicMaterial : glowMaterial}
          position={[-2.873, 0.303, 0.742]}
          scale={0.055}
        />
      )}
      {nodes.Logitech_Logo && (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logitech_Logo.geometry}
          material={glowIntensity === 0 ? basicMaterial : glowMaterial}
          position={[2.916, 0.187, -0.918]}
          scale={0.221}
        />
      )}
    </group>
  )
}

useGLTF.preload('/models/kb-draco.glb')