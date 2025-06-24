import * as React from "react"
import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-2xl border-2 border-[var(--primary)]/50 bg-[var(--secondary)]/50 px-4 py-3 text-base text-[var(--white)] placeholder:text-[var(--background)]/70 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tertiary)] focus-visible:border-[var(--tertiary)] xl:hover:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm resize-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }