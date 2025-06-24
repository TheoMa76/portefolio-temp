import * as React from "react"
import { cn } from "@/lib/utils"

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium text-[var(--white)] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2",
        className,
      )}
      {...props}
    />
  )
})
Label.displayName = "Label"

export { Label }