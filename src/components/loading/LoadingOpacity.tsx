import { useState } from "react";

const LoadingOpacity = ({ loaded }: { loaded: boolean }) => {
  const [opacity, setOpacity] = useState(false);
  const [hidden, setHidden] = useState(false);
  if (loaded) {
    setTimeout(() => {
      setOpacity(true);
    }, 10);
  }
  if (opacity) {
    setTimeout(() => {
      setHidden(true);
    }, 250);
  }
  if (!hidden) {
    return <div
      className={opacity ? "fixed w-screen h-screen top-0 left-0 bg-mainColor opacity-0 transition-opacity duration-200 z-99 ease-in"
        : "fixed w-screen h-screen top-0 left-0 bg-mainColor opacity-100 transition-opacity duration-200 z-99 ease-in"} />
  }
}
export default LoadingOpacity