"use client"
import { useState, useEffect } from "react"

export default function useWindowDimensions() {
  const [size, setSize] = useState<{ width?: number; height?: number }>({})

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}