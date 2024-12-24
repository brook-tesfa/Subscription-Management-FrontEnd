import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }) {
  const particlesRef = useRef<THREE.Group>(null!);
  const particleRefs = useRef<THREE.Mesh[]>([]);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        Math.random() * 8 - 4,
        Math.random() * 8 - 4,
        Math.random() * 8 - 4
      );
      const rotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      const scale = 0.001 + Math.abs(Math.random() * 0.03);
      const speedValue = Math.random() * 0.5;
      temp.push({ position, rotation, scale, speedValue });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    particleRefs.current.forEach((particle, i) => {
      particle.rotation.x += particles[i].speedValue * 0.1;
      particle.rotation.y += particles[i].speedValue * 0.1;
      particle.rotation.z += particles[i].speedValue * 0.1;
    });
    particlesRef.current.rotation.y += 0.001;
  });

  return (
    <group ref={particlesRef}>
      {particles.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => (particleRefs.current[i] = el!)}
          position={[data.position.x, data.position.y, data.position.z]}
          rotation={[data.rotation.x, data.rotation.y, data.rotation.z]}
          scale={[data.scale, data.scale, data.scale]}
        >
          <circleGeometry args={[0.2, 5]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            side={THREE.DoubleSide}
            transparent
            opacity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function ModularObjects() {
  const groupRef = useRef<THREE.Group>(null!);
  const objectRefs = useRef<THREE.Mesh[]>([]);
  const { mouse } = useThree();

  const objects = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      const positionX = Math.random() * 4 - 2;
      const positionY = Math.random() * 4 - 2;
      const positionZ = Math.random() * 4 - 2;
      const scale = Math.random() * 0.2 + 0.1;
      const rotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      temp.push({ positionX, positionY, positionZ, scale, rotation });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime() * 0.2;
    objectRefs.current.forEach((cube, i) => {
      cube.rotation.x += 0.004;
      cube.rotation.y += 0.003;
      cube.rotation.z += 0.002;

      cube.position.x = Math.sin(time * objects[i].positionZ) * objects[i].positionY;
      cube.position.y = Math.cos(time * objects[i].positionX) * objects[i].positionZ;
      cube.position.z = Math.sin(time * objects[i].positionY) * objects[i].positionX;
    });

    groupRef.current.rotation.y -= (mouse.x * 2 + groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x -= (-mouse.y * 2 + groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {objects.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => (objectRefs.current[i] = el!)}
          scale={[data.scale, data.scale, data.scale]}
          rotation={[data.rotation.x, data.rotation.y, data.rotation.z]}
        >
          <icosahedronGeometry args={[1]} />
          <meshStandardMaterial
            color="#0066ff"
            roughness={0.3}
            metalness={0.8}
            wireframe={false}
            transparent
            opacity={0.3}
            emissive="#0044ff"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 3.5, 6.5]} />
        
        <spotLight
          position={[5, 5, 2]}
          intensity={2}
          castShadow
          penumbra={0.8}
          color="#4488ff"
        />
        <pointLight position={[0, -3, -1]} intensity={0.8} color="#0088ff" />
        <rectAreaLight
          position={[0, 0, 1]}
          intensity={50}
          width={3}
          height={3}
          color="#0044ff"
        />

        <Particles count={300} />
        <ModularObjects />
      </Canvas>
    </div>
  );
}