"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  translateY?: number;
  translateX?: number;
  duration?: number;
  rotate?: number;
  threshold?: number; // qancha qismi ko‘ringanda animatsiya boshlansin
}

export default function OnViewAnimation({
  children,
  className,
  translateY = 0,
  translateX = 0,
  duration = 0.6,
  rotate = 0,
  threshold = 0.2,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0px, 0px) rotate(0deg)"
          : `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}
