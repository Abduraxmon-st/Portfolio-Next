"use client"
import { useEffect, useRef } from 'react'
import { createSwapy } from 'swapy'

const DragNavbar = () => {
  const swapy = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
          // @ts-ignore

      swapy.current = createSwapy(container.current)

      // Your event listeners
          // @ts-ignore

      swapy?.current?.onSwap((event) => {
        console.log('swap', event);
      })
    }

    return () => {
          // @ts-ignore

      // Destroy the swapy instance on component destroy
      swapy?.current?.destroy()
    }
  }, [])

  return (
    <div ref={container} className='fixed w-screen h-screen top-0 left-0 bg-white/15'>

      <div data-swapy-slot="a">
        <div data-swapy-item="a">
          <div className='bg-red-500 w-10 h-10'>A</div>
        </div>
      </div>

      <div data-swapy-slot="b">
        <div data-swapy-item="b">
          <div>B</div>
        </div>
      </div>

    </div>
  )
}

export default DragNavbar