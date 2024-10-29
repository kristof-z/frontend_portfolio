"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { StackBarProps } from "../types";

const StackBar = ({ skills, className }: StackBarProps) => {
  const scroll = useScroll();
  const [offset, setOffset] = useState(0);

  useFrame(() => {
    if (offset !== scroll.offset) {
      setOffset(scroll.offset);
    }
  });

  return (
    <div className={className || "stackbar-container"}>
      <div className="stackbar-inner">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="stackbar-text"
              style={{ transform: `translateX(${offset * 200}px)` }}
            >
              {skills?.join(" • ")}
              {index !== 3 && " • "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default StackBar;