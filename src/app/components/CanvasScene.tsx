"use client";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from '@react-three/drei';
import Boxes from "./Boxes";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import { useState, useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

export default function CanvasScene() {
  const [ref, bounds] = useMeasure();
  const [pages, setPages] = useState(4);
  const prevHeightRef = useRef(bounds.height);

  useEffect(() => {
    const contentHeight = bounds.height;
    const viewportHeight = window.innerHeight;

    if (Math.abs(contentHeight - prevHeightRef.current) > 50) {
      const calculatedPages = Math.max(1, contentHeight / viewportHeight);
      setPages(calculatedPages);
      prevHeightRef.current = contentHeight;
    }
  }, [bounds.height]);

  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [25, 30, 90], fov: 30 }}
      style={{ background: "black" }}
    >
      <ScrollControls pages={pages}>
        <Boxes />
        <ambientLight intensity={0.1} />
        <Scroll html>
          <div ref={ref} className="main">
            <Section1 />
            <Section2 />
            <Section3 />
          </div>
        </Scroll>
     
      </ScrollControls>
    </Canvas>
  );
}