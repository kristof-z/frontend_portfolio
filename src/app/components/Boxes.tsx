"use client"; 
import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { KeyFrame } from './types';



const Boxes: React.FC = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const count = 55; 
  const sep = 3.3; 
  const scroll = useScroll();

  const keyFrames: KeyFrame[] = useMemo(() => [
    {
      offset: 0,
      position: new THREE.Vector3(0, 0, -10),
      rotation: new THREE.Euler(0, 0, 0),
      color: new THREE.Color('yellow'),
    },
    {
      offset: 0.4,
      position: new THREE.Vector3(0, 0, -5),
      rotation: new THREE.Euler(0, 0, 0.0),
      color: new THREE.Color('white'),
    },
    {
      offset: 0.6,
      position: new THREE.Vector3(0, 0, -2),
      rotation: new THREE.Euler(0, 0, 0.0),
      color: new THREE.Color('yellow'),
    },
    {
      offset: 1,
      position: new THREE.Vector3(0, 10, 15),
      rotation: new THREE.Euler(0, 0, 0.0),
      color: new THREE.Color('white'),
    },
  ], []);

  const boxGeometry = useMemo(() => new THREE.BoxGeometry(1.5, 1.5, 1.5), []);

  const boxMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 'grey',
        metalness: 0.5,
        roughness: 0.5,
      }),
    []
  );

  useMemo(() => {
    if (meshRef.current) {
      const dummy = new THREE.Object3D();
      for (let xi = 0; xi < count; xi++) {
        for (let zi = 0; zi < count; zi++) {
          const x = sep * (xi - count / 2);
          const z = sep * (zi - count / 2);
          dummy.position.set(x, 0, z);
          dummy.updateMatrix();
          const index = xi * count + zi;
          meshRef.current!.setMatrixAt(index, dummy.matrix);
        }
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [count, sep]);

  const materialPositions = useMemo(() => {
    const temp: { x: number; z: number }[] = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        temp.push({ x, z });
      }
    }
    return temp;
  }, [count, sep]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() * 2;
      const dummy = new THREE.Object3D();

      materialPositions.forEach((pos, index) => {
        const { x, z } = pos;
        const distanceSquared = x * x + z * z;
        const y = Math.sin(0.002 * distanceSquared + t) * 1.3;

        dummy.position.set(x, y, z);
        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(index, dummy.matrix);
      });

      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  const lightRefs = useRef<THREE.PointLight[]>([]);
  lightRefs.current = [];

  const addToLightRefs = (el: THREE.PointLight) => {
    if (el && !lightRefs.current.includes(el)) {
      lightRefs.current.push(el);
    }
  };

  const getInterpolatedState = (offset: number): { position: THREE.Vector3; rotation: THREE.Euler; color: THREE.Color } => {
    const clampedOffset = Math.min(Math.max(offset, 0), 1);

    let lowerFrame = keyFrames[0];
    let upperFrame = keyFrames[keyFrames.length - 1];

    for (let i = 0; i < keyFrames.length - 1; i++) {
      if (clampedOffset >= keyFrames[i].offset && clampedOffset <= keyFrames[i + 1].offset) {
        lowerFrame = keyFrames[i];
        upperFrame = keyFrames[i + 1];
        break;
      }
    }

    const range = upperFrame.offset - lowerFrame.offset;
    const factor = range === 0 ? 0 : (clampedOffset - lowerFrame.offset) / range;

    const position = new THREE.Vector3().lerpVectors(lowerFrame.position, upperFrame.position, factor);

    const rotation = new THREE.Euler(
      THREE.MathUtils.lerp(lowerFrame.rotation.x, upperFrame.rotation.x, factor),
      THREE.MathUtils.lerp(lowerFrame.rotation.y, upperFrame.rotation.y, factor),
      THREE.MathUtils.lerp(lowerFrame.rotation.z, upperFrame.rotation.z, factor)
    );

    const color = lowerFrame.color.clone().lerp(upperFrame.color, factor);

    return { position, rotation, color };
  };

  useFrame(() => {
    if (groupRef.current) {
      const { position, rotation, color } = getInterpolatedState(scroll.offset);

      groupRef.current.position.lerp(position, 0.1);
      groupRef.current.rotation.x = rotation.x;
      groupRef.current.rotation.y = rotation.y;
      groupRef.current.rotation.z = rotation.z;
      lightRefs.current.forEach((light) => {
        light.color.lerp(color, 0.1);
      });
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh
        name="target"
        ref={meshRef}
        args={[boxGeometry, boxMaterial, count * count]}
        position={keyFrames[0].position}
        rotation={keyFrames[0].rotation}
      />

      <pointLight ref={addToLightRefs} intensity={80} position={[-20, -5, -30]} color={"yellow"} />
      <pointLight ref={addToLightRefs} intensity={60} position={[20, 10, -20]} color="yellow" />
      <pointLight ref={addToLightRefs} intensity={80} position={[20, 8, 20]} color={"yellow"} />
      <pointLight ref={addToLightRefs} intensity={30} position={[15, 0, -40]} color={"yellow"} />
      <pointLight ref={addToLightRefs} intensity={300} position={[8, 5, -40]} color={"yellow"} />
      <pointLight ref={addToLightRefs} intensity={50} position={[0, 5, -40]} color={"yellow"} />
      <pointLight ref={addToLightRefs} intensity={100} position={[20, -5, 30]} color={"white"} />

    </group>
  );
};

export default Boxes;
