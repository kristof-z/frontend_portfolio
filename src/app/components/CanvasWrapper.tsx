import React, { Suspense } from 'react';
import LoadingAnimation from './LoadingAnimation';
import CanvasScene from './CanvasScene';

export default function CanvasWrapper() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <CanvasScene />
    </Suspense>
  );
}
