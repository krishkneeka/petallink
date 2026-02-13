"use client";

import { useRef, useEffect, useCallback } from "react";
import FLOWER_COMPONENTS from "./flowers";
import { FLOWER_TYPES } from "@/lib/constants";

export default function DraggableFlower({ flower, index, canvasRef, onMove, interactive = true }) {
  const flowerDef = FLOWER_TYPES.find((f) => f.id === flower.type);
  const Component = FLOWER_COMPONENTS[flower.type];
  const ref = useRef(null);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleStart = useCallback(
    (clientX, clientY) => {
      if (!interactive) return;
      dragging.current = true;
      const rect = ref.current.getBoundingClientRect();
      offset.current = { x: clientX - rect.left, y: clientY - rect.top };
    },
    [interactive]
  );

  const handleMove = useCallback(
    (clientX, clientY) => {
      if (!dragging.current || !canvasRef.current) return;
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const x = clientX - canvasRect.left - offset.current.x;
      const y = clientY - canvasRect.top - offset.current.y;
      onMove(index, x, y);
    },
    [index, onMove, canvasRef]
  );

  const handleEnd = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    const moveHandler = (e) => {
      if (e.touches) handleMove(e.touches[0].clientX, e.touches[0].clientY);
      else handleMove(e.clientX, e.clientY);
    };
    const endHandler = () => handleEnd();

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", endHandler);
    window.addEventListener("touchmove", moveHandler, { passive: false });
    window.addEventListener("touchend", endHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", endHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", endHandler);
    };
  }, [handleMove, handleEnd]);

  if (!flowerDef || !Component) return null;

  const rotation = flower.rotation || 0;

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: flower.x,
        top: flower.y,
        zIndex: 10 + index,
        cursor: interactive ? "grab" : "default",
        touchAction: "none",
        userSelect: "none",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "50% 100%",
        transition: interactive ? "none" : "transform 0.5s ease, left 0.5s ease, top 0.5s ease",
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        handleStart(e.clientX, e.clientY);
      }}
      onTouchStart={(e) => {
        handleStart(e.touches[0].clientX, e.touches[0].clientY);
      }}
    >
      <Component size={flowerDef.size} />
    </div>
  );
}