import * as React from "react"
import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border-2 border-[var(--primary)]/50 bg-[var(--secondary)]/50 px-4 py-3 text-base text-[var(--white)] placeholder:text-[var(--background)]/70 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tertiary)] focus-visible:border-[var(--tertiary)] xl:hover:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }