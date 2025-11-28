import React from "react";

const COUNT = 6;
const SIZE = 30; // vh
const SPEED = 5; // s
const COLOR = "#CBACF9";

const Circles: React.FC = () => {
  const circles = Array.from({ length: COUNT });

  const STEP = SIZE / COUNT;

  return (
    <div
      style={{
        position: "fixed" as React.CSSProperties["position"],
        top: 0,
        left: 0,
        zIndex: 99,
        margin: 0,
        padding: 0,
        width: "99.9vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000319",
        overflow: "hidden",
        boxSizing: "border-box" as React.CSSProperties["boxSizing"],
      }}
    >
      <div
        style={{
          position: "relative" as React.CSSProperties["position"],
          width: `${SIZE}vh`,
          height: `${SIZE}vh`,
          transformStyle: "preserve-3d" as React.CSSProperties["transformStyle"],
          transform: "perspective(1000px) rotateY(45deg) rotateX(45deg)",
        }}
      >
        {circles.map((_, n) => {
          const localSize = SIZE - STEP * n;
          const offset = (STEP * n) / 2;
          const isEven = n % 2 === 1;

          return (
            <div
              key={n}
              data-index={n}
              style={{
                position: "absolute" as React.CSSProperties["position"],
                top: `${offset}vh`,
                left: `${offset}vh`,
                width: `${localSize}vh`,
                height: `${localSize}vh`,
                borderRadius: "50%",
                border: isEven
                  ? `2px dashed rgba(255,255,255,0.5)`
                  : `2px solid ${COLOR}`,
                background: "transparent",
                animation: `spin ${SPEED / (n || 1)}s linear infinite`,
                display: n === COUNT - 1 ? "none" : "block",
              }}
            ></div>
          );
        })}
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotateX(0deg); }
            100% { transform: rotateX(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Circles;
