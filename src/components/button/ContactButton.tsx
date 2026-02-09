import { useCursor } from '@/context/CursorContext'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export const ContactButton = ({ children = "Contact", className }: { children?: React.ReactNode, className?: string }) => {
  const { setHovered } = useCursor()
  return (
    <Button
      style={{ cursor: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden py-2! flex! gap-3 pl-5! xl:pl-7! pr-4! xl:pr-5! h-10 xl:h-12 xl:text-lg rounded-3xl hover:scale-105 border border-[#242f6a50] hover:border-[#292c41] active:scale-95 transition-transform duration-300 transform group ${className}`}
    >
      <span className="absolute inset-0 bg-linear-to-r from-[#06091f] to-[#161a31] transition-opacity duration-300 group-hover:opacity-0"></span>
      <span className="absolute inset-0 bg-linear-to-r from-[#06091f] via-[#161a31] to-[#161a31] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      <span className='relative z-10'>{children}</span>
      <ArrowRight className='relative size-4 xl:size-4.5 z-10 group-hover:translate-x-1 transition-all' />
    </Button>
  )
}
