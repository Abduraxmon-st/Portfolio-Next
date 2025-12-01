import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";


export function TechnologyCard({ item, path }: { item: string, path: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild className="hover:scale-105">
        <div className="size-12 xl:size-17 p-3 rounded-lg bg-mainEasierColor/50 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
          <img src={`/${path}.svg`} alt={path} className="rounded-[3px]" />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {item}
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
