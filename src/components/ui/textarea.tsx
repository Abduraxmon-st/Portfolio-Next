import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-borderColor placeholder:text-muted-foreground focus-visible:border-thirtyColor/40 focus-visible:ring-cyan-500/15 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-24 w-full rounded-[10px] border bg-cyan-800/5 px-4 py-3 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 resize-none overflow-y-auto max-h-24 selection:bg-thirtyColor/15 selection:text-primary-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
