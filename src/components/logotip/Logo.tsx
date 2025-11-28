import { logoBg } from "@/src/assets/images"
import Image from "next/image"
export const Logo = () => {
  return (
    <div className="flex">
      <div className="size-8 overflow-hidden translate-y-px xl:translate-y-[2px]">
        <Image loading="lazy" src={logoBg} alt="Logo" width={50} height={50} className="scale-200" />
      </div>
    </div>
  )
}
