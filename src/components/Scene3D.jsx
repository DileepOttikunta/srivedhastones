import React, { Suspense, forwardRef, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import RoomModel from './RoomModel';

// Component to handle smooth camera transitions between views without fighting user scroll
function CameraController({ isTopView }) {
  const { camera, controls } = useThree();
  const targetPos = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());
  const isTransitioning = useRef(false);

  useEffect(() => {
    // Set targets based on view
    targetPos.current.copy(isTopView ? new THREE.Vector3(0, 10, 0) : new THREE.Vector3(0, 1.8, 3.5));
    targetLook.current.copy(isTopView ? new THREE.Vector3(0, 0, -1) : new THREE.Vector3(0, 1, -1));
    isTransitioning.current = true; // Start transition
    
    if (controls) {
      if (isTopView) {
        controls.minPolarAngle = 0;
        controls.maxPolarAngle = 0.1; // Lock rotation when in top view
      } else {
        controls.minPolarAngle = Math.PI / 4;
        controls.maxPolarAngle = Math.PI / 2 - 0.05;
      }
    }
  }, [isTopView, controls]);

  useFrame(() => {
    if (!controls || !isTransitioning.current) return;
    
    // Smoothly interpolate camera position and target
    camera.position.lerp(targetPos.current, 0.05);
    controls.target.lerp(targetLook.current, 0.05);
    controls.update();

    // Stop transitioning when close, allowing user to scroll/zoom freely
    if (camera.position.distanceTo(targetPos.current) < 0.1) {
      isTransitioning.current = false;
    }
  });

  return null;
}

const Scene3D = forwardRef(({ selectedMarble, selectedRoom, isTopView, wallColor }, ref) => {
  return (
    <div className="scene-wrapper">
      <Canvas
        ref={ref}
        shadows
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        camera={{ position: [0, 1.8, 3.5], fov: 60 }} // Initial Camera
        gl={{ preserveDrawingBuffer: true, antialias: true, toneMappingExposure: 1.2 }}
      >
        <color attach="background" args={['#87CEEB']} /> 
        
        <ambientLight intensity={0.6} />
        
        <directionalLight 
          castShadow 
          position={[0, 5, -10]} 
          intensity={2} 
          color="#fdfbd3"
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
        />
        
        <pointLight position={[0, 3, 0]} intensity={0.4} color="#ffffff" />

        <Environment preset="apartment" />

        <Suspense fallback={null}>
          <RoomModel 
            roomType={selectedRoom?.id} 
            marbleTexturePath={selectedMarble?.texture}
            wallColor={wallColor}
          />
          <ContactShadows position={[0, 0.01, 0]} opacity={0.5} scale={20} blur={2.5} far={4} />
        </Suspense>

        <OrbitControls 
          makeDefault
          enableDamping={true}
        />
        
        {/* Adds smooth transitions between normal and top view */}
        <CameraController isTopView={isTopView} />
      </Canvas>
      
      <div className="scene-overlay-text">
        {isTopView ? "TOP VIEW ACTIVE - SCROLL TO ZOOM" : "360° VIEW ACTIVE - DRAG TO ROTATE"}
      </div>
    </div>
  );
});

export default Scene3D;
