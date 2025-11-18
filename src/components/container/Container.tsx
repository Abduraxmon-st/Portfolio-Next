import { cn } from "@/src/lib/utils"

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("w-full p-4 xl:p-5 2xl:p-6 mx-auto max-w-[860px] xl:max-w-[1280px] ",
      className
    )}>
      {children}
    </div>
  )
}
