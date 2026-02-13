"use client";

import { useRef } from "react";
import DraggableFlower from "./DraggableFlower";
import Ribbon from "./Ribbon";

export default function BouquetCanvas({
  flowers,
  backgroundColor,
  interactive = false,
  onMoveFlower,
  showRibbon = false,
  width = 320,
  height = 568,
}) {
  const canvasRef = useRef(null);

  return (
    <div
      ref={canvasRef}
      className="relative overflow-hidden flex-shrink-0"
      style={{
        width,
        height,
        backgroundColor,
        borderRadius: 16,
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        isolation: "isolate",
      }}
    >
      {/* Subtle light overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: 16,
          background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.25) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* Flowers */}
      {flowers.map((f, i) => (
        <DraggableFlower
          key={i}
          flower={f}
          index={i}
          canvasRef={canvasRef}
          onMove={onMoveFlower || (() => {})}
          interactive={interactive}
        />
      ))}

      {/* Ribbon renders on top of stems but inside the canvas */}
      {showRibbon && flowers.length > 0 && <Ribbon />}
    </div>
  );
}