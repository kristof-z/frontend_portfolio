import React from 'react';
import { Plane } from '@react-three/drei';

const Ground = () => {
  return (
    <Plane args={[10000, 10000]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <meshStandardMaterial
        color="lightblue" // Set a solid light blue color
        roughness={0.1}
        metalness={0.2}
      />
    </Plane>
  );
};

export default Ground;
