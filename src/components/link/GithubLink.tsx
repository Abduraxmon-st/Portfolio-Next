"use client"
import { useState, useRef } from "react";
import "spoilerjs/spoiler-span";

const GithubLink = ({
  setHovered,
}: {
  setHovered: (value: boolean) => void;
}) => {
  const [opened, setOpened] = useState(false);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!opened) {
      e.preventDefault();
      setOpened(true);

      const span = linkRef.current?.closest("spoiler-span") as HTMLElement;
      span?.classList.add("spoiler--visible");
      return;
    }
  };

  return (
    // @ts-ignore
    <spoiler-span scale="1.1" reveal-duration="100" fps="45" style={{ color: "oklch(78.9% 0.154 211.53)" }}>
      <a
        ref={linkRef}
        style={{ cursor: "none" }}
        href="https://github.com/Abduraxmon-st"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group font-medium"
      >
        GitHub
        <div className={`absolute w-[0%] ${opened && 'group-hover:w-[95%]'} h-px left-1/2 -translate-x-[50%] -bottom-px bg-cyan-400 transition-all`} />
      </a>
      {/* @ts-ignore */}
    </spoiler-span>
  );
};
export default GithubLink