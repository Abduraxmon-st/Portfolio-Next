'use client';

import { useCursor } from '@/context/CursorContext';
import { useSmoothCursor } from '@/hooks/useSmoothCursor';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Tracker() {
  const { hovered } = useCursor();
  const cursor = useSmoothCursor(0.07);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    const mobile = toMatch.some((regex) => regex.test(navigator.userAgent));
    setIsMobile(mobile);
  }, []);

  if (isMobile === null) return null;

  if (isMobile) return null;

  return (
    <div
      className="fixed z-9999 rounded-full pointer-events-none  flex items-center justify-center bg-cyan-400/10 mix-blend-difference"
      style={{
        width: hovered ? 56 : 36,
        height: hovered ? 56 : 36,
        border: `${hovered ? 3 : 2}px solid oklch(78.9% 0.154 211.53)`,
        transform: `translate(${cursor.x}px, ${cursor.y}px)`,
        backgroundColor: hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)",
        transition: "width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease-in",
      }}
    >
      {/* Vertical line */}
      <Plus
        className={`text-cyan-400 transition-all duration-250 ${hovered ? "size-7.5" : "size-4.5"
          }`}
      // strokeWidth={2}
      />
    </div>
  );
}
