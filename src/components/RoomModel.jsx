import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export default function RoomModel({ roomType, marbleTexturePath, wallColor }) {
  // Load the selected marble texture
  const colorMap = useLoader(THREE.TextureLoader, marbleTexturePath);
  
  // Configure texture tiling
  useMemo(() => {
    if (colorMap) {
      colorMap.wrapS = THREE.RepeatWrapping;
      colorMap.wrapT = THREE.RepeatWrapping;
      colorMap.repeat.set(5, 5); // Increase tiling for realism
      colorMap.colorSpace = THREE.SRGBColorSpace;
    }
  }, [colorMap]);

  // Dimensions based on room type
  const dimensions = useMemo(() => {
    switch (roomType) {
      case 'hall': return { w: 12, d: 10, h: 4.5 };
      case 'kitchen': return { w: 10, d: 10, h: 4 }; // Increased size
      case 'bathroom': return { w: 5, d: 6, h: 3.5 };
      case 'bedroom': return { w: 9, d: 8, h: 4 };
      default: return { w: 10, d: 10, h: 4 };
    }
  }, [roomType]);

  const { w, d, h } = dimensions;
  const wallThickness = 0.4;
  const baseboardHeight = 0.15;
  const baseboardThickness = 0.05;

  // Materials
  const wallMaterial = new THREE.MeshStandardMaterial({ 
    color: wallColor || '#f8fafc', // Apply custom color or fallback
    roughness: 0.8,
    metalness: 0.05,
  });

  const baseboardMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.4,
    metalness: 0.1,
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Floor with dynamic marble texture */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[w, d]} />
        <meshStandardMaterial 
          map={colorMap} 
          roughness={0.05} // Highly polished marble
          metalness={0.1}
          envMapIntensity={1.5} // Enhance reflections
        />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, h, 0]} receiveShadow>
        <planeGeometry args={[w, d]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </mesh>

      {/* Back Wall with Window Cutout (Simulated with multiple blocks) */}
      <group position={[0, 0, -d/2]}>
        {/* Left segment */}
        <mesh position={[-w/4 - 1, h/2, 0]} castShadow receiveShadow>
          <boxGeometry args={[w/2 - 2, h, wallThickness]} />
          <primitive object={wallMaterial} attach="material" />
        </mesh>
        {/* Right segment */}
        <mesh position={[w/4 + 1, h/2, 0]} castShadow receiveShadow>
          <boxGeometry args={[w/2 - 2, h, wallThickness]} />
          <primitive object={wallMaterial} attach="material" />
        </mesh>
        {/* Top segment (above window) */}
        <mesh position={[0, h - 0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[4, 1, wallThickness]} />
          <primitive object={wallMaterial} attach="material" />
        </mesh>
        {/* Bottom segment (below window) */}
        <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[4, 1, wallThickness]} />
          <primitive object={wallMaterial} attach="material" />
        </mesh>
        
        {/* Baseboard Back */}
        <mesh position={[0, baseboardHeight/2, wallThickness/2 + baseboardThickness/2]} castShadow receiveShadow>
          <boxGeometry args={[w, baseboardHeight, baseboardThickness]} />
          <primitive object={baseboardMaterial} attach="material" />
        </mesh>
      </group>

      {/* Left Wall */}
      <group position={[-w/2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, h/2, 0]} castShadow receiveShadow>
          <boxGeometry args={[d, h, wallThickness]} />
          <primitive object={wallMaterial} attach="material" />
        </mesh>
        {/* Baseboard Left */}
        <mesh position={[0, baseboardHeight/2, wallThickness/2 + baseboardThickness/2]} castShadow receiveShadow>
          <boxGeometry args={[d, baseboardHeight, baseboardThickness]} />
          <primitive object={baseboardMaterial} attach="material" />
        </mesh>
      </group>

      {/* Right Wall */}
      <group position={[w/2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, h/2, 0]} castShadow receiveShadow>
          <boxGeometry args={[d, h, wallThickness]} />
          <primitive object={wallMaterial} attach="material" />
        </mesh>
        {/* Baseboard Right */}
        <mesh position={[0, baseboardHeight/2, wallThickness/2 + baseboardThickness/2]} castShadow receiveShadow>
          <boxGeometry args={[d, baseboardHeight, baseboardThickness]} />
          <primitive object={baseboardMaterial} attach="material" />
        </mesh>
      </group>

      {/* Stylized Furniture */}
      {roomType === 'kitchen' && (
        <group position={[0, 0, -d/2 + 2.5]}>
          {/* Kitchen Island (Larger for bigger kitchen) */}
          <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
            <boxGeometry args={[5, 0.9, 2]} />
            <meshStandardMaterial color="#1e293b" roughness={0.7} />
          </mesh>
          {/* Island Countertop */}
          <mesh position={[0, 0.95, 0]} castShadow receiveShadow>
            <boxGeometry args={[5.2, 0.1, 2.2]} />
            <meshStandardMaterial color="#ffffff" roughness={0.1} />
          </mesh>
        </group>
      )}

      {roomType === 'bedroom' && (
        <group position={[0, 0, -d/2 + 3]}>
          {/* Bed Frame */}
          <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.2, 0.4, 4.2]} />
            <meshStandardMaterial color="#334155" roughness={0.8} />
          </mesh>
          {/* Mattress */}
          <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[3, 0.4, 4]} />
            <meshStandardMaterial color="#ffffff" roughness={0.9} />
          </mesh>
          {/* Headboard */}
          <mesh position={[0, 0.8, -2]} castShadow receiveShadow>
            <boxGeometry args={[3.4, 1.6, 0.2]} />
            <meshStandardMaterial color="#334155" roughness={0.8} />
          </mesh>
        </group>
      )}
      
      {roomType === 'bathroom' && (
        <group position={[0, 0, -d/2 + 1.5]}>
           {/* Bathtub base */}
           <mesh position={[-1, 0.4, 0]} castShadow receiveShadow>
             <boxGeometry args={[2.5, 0.8, 1.5]} />
             <meshStandardMaterial color="#ffffff" roughness={0.1} />
           </mesh>
           {/* Commode / Toilet */}
           <group position={[1.5, 0, -0.2]}>
             {/* Bowl base */}
             <mesh position={[0, 0.2, 0.3]} castShadow receiveShadow>
               <cylinderGeometry args={[0.3, 0.2, 0.4, 16]} />
               <meshStandardMaterial color="#ffffff" roughness={0.2} />
             </mesh>
             {/* Tank */}
             <mesh position={[0, 0.6, -0.2]} castShadow receiveShadow>
               <boxGeometry args={[0.6, 0.6, 0.3]} />
               <meshStandardMaterial color="#ffffff" roughness={0.2} />
             </mesh>
           </group>
        </group>
      )}

    </group>
  );
}
