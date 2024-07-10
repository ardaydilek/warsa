"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

import { Button } from "./button";

import { Counties } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function Chips({}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clickStartTime, setClickStartTime] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
    setClickStartTime(Date.now());
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return; // Check if left mouse button is pressed
    if (Date.now() - clickStartTime < 50) return; // Ignore small movements

    setIsDragging(true);
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-scroll country-chips snap-x cursor-grab py-1",
        {
          "cursor-grabbing snap-none": isDragging,
        }
      )}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {Counties.map((county, index) => (
        <Button
          key={`county-${index}`}
          variant={"chips"}
          size={"chip"}
          className={cn("font-semibold snap-start scroll-ml-1", {
            "pointer-events-none select-none": isDragging,
          })}
          asChild
        >
          <Link href={`/`}>{county}</Link>
        </Button>
      ))}
    </div>
  );
}
