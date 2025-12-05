"use client";

import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  translateY?: number;
  translateX?: number;
  duration?: number;
  rotate?: number;
}

export default function PageLoadAnimation({
  children,
  translateY = 0,
  translateX = 0,
  duration = 0.6,
  rotate = 0,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div
      className={`page-animation flex flex-col`}
    >
      {React.Children.map(children, (child: any) => (
        <div
          className={`
            transition-all ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0"}
          `}
          style={{
            transform: loaded
              ? "translate(0px, 0px) rotate(0deg)"
              : `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
            transitionDuration: `${duration}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
