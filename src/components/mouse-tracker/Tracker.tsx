'use client';

import { useCursor } from '@/src/context/CursorContext';
import { useSmoothCursor } from '@/src/hooks/useSmoothCursor';
import { Plus } from 'lucide-react';

export default function Tracker() {
  const { hovered } = useCursor();
  const cursor = useSmoothCursor(0.05);
  return (
    <div
      className="fixed z-51 rounded-full pointer-events-none  flex items-center justify-center border-2 border-thirtyColor/50 bg-thirtyColor/10 mix-blend-difference"
      style={{
        width: hovered ? 42 : 32,
        height: hovered ? 42 : 32,
        transform: `translate(${cursor.x}px, ${cursor.y}px)`,
        backgroundColor: hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)",
        transition: "width 0.15s ease-in, height 0.15s ease-in, background-color 0.25s ease-in",
      }}
    >
      {/* Vertical line */}
      <Plus className="size-4.5 text-thirtyColor/50" strokeWidth={2} />
    </div>
  );
}
