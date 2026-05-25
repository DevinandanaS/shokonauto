import React, { useRef, memo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, MeshReflectorMaterial, Float } from '@react-three/drei';

// Fallback component when WebGL is not available
const CarFallback = () => (
  <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(255, 69, 0, 0.1) 0%, rgba(10, 10, 15, 0.9) 100%)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 69, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      textAlign: 'center',
      zIndex: 2,
      padding: '2rem'
    }}>
      <div style={{
        fontSize: '4rem',
        marginBottom: '1rem',
        filter: 'drop-shadow(0 0 20px rgba(255, 69, 0, 0.5))'
      }}>
        🚗
      </div>
      <h3 style={{
        color: 'var(--text-primary)',
        fontSize: '1.5rem',
        marginBottom: '0.5rem'
      }}>
        Premium Auto Solutions
      </h3>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '1rem'
      }}>
        Experience luxury automotive upgrades
      </p>
    </div>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 50% 50%, rgba(255, 69, 0, 0.15) 0%, transparent 70%)',
      animation: 'pulse 3s ease-in-out infinite'
    }} />
  </div>
);

const CarModel = memo(() => {
  const meshRef = useRef();

  // Basic animation for the car
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Body */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[2, 0.5, 4]} />
        <meshStandardMaterial 
          color="#ff4500" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#ff4500"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[0, 0.85, -0.2]} castShadow>
        <boxGeometry args={[1.6, 0.4, 1.8]} />
        <meshStandardMaterial color="#111" metalness={1} roughness={0} />
      </mesh>

      {/* Wheels */}
      {[[-1, 0.2, 1.2], [1, 0.2, 1.2], [-1, 0.2, -1.2], [1, 0.2, -1.2]].map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
          <meshStandardMaterial color="#222" metalness={0.5} roughness={0.8} />
        </mesh>
      ))}

      {/* Headlights */}
      {[[-0.7, 0.4, 2], [0.7, 0.4, 2]].map((pos, i) => (
        <group key={i} position={pos}>
           <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
          </mesh>
          <pointLight color="#fff" intensity={1} distance={5} />
        </group>
      ))}

      {/* Tail Lights */}
      {[[-0.7, 0.4, -2.05], [0.7, 0.4, -2.05]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.4, 0.15, 0.1]} />
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
});

CarModel.displayName = 'CarModel';

const CarShowcase = memo(() => {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch (e) {
      setWebGLSupported(false);
    }
  }, []);

  // Show fallback if WebGL not supported or error occurred
  if (!webGLSupported || error) {
    return <CarFallback />;
  }

  return (
    <div style={{ width: '100%', height: '500px', cursor: 'grab' }}>
      <Canvas 
        shadows
        onCreated={(state) => {
          // Canvas created successfully
        }}
        onError={(error) => {
          console.warn('WebGL Error:', error);
          setError(true);
        }}
      >
        <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
        <OrbitControls 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2} 
          minDistance={3} 
          maxDistance={8} 
        />
        
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 5, 15]} />

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <rectAreaLight
          width={10}
          height={10}
          color="#ff6b35"
          intensity={5}
          position={[0, 5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <CarModel />
        </Float>

        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>

        <gridHelper args={[100, 100, '#ff4500', '#111']} position={[0, -0.1, 0]} opacity={0.2} transparent />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
});

CarShowcase.displayName = 'CarShowcase';

export default CarShowcase;
