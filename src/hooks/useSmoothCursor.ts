import { useEffect, useRef, useState } from "react";

export function useSmoothCursor(speed = 0.1) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const follow = () => {
      setCursor((prev) => {
        const x = prev.x + (position.current.x - prev.x) * speed + (-0.8);
        const y = prev.y + (position.current.y - prev.y) * speed + (-0.8);
        return { x, y };
      });
      raf.current = requestAnimationFrame(follow);
    };

    follow(); // start once

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [speed]);

  return cursor;
}
