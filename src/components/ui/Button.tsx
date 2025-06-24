import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform xl:hover:scale-[1.02] active:scale-[0.98]",
          {
            "bg-gradient-to-r from-[var(--tertiary)] to-[var(--tertiary)]/90 text-[var(--background)] xl:hover:from-[var(--tertiary)]/90 xl:hover:to-[var(--tertiary)] focus-visible:ring-[var(--tertiary)]/50 shadow-lg":
              variant === "default",
            "bg-[var(--secondary)]/20 text-[var(--white)] xl:hover:bg-[var(--secondary)]/30 focus-visible:ring-[var(--secondary)]/50 border border-[var(--secondary)]/50":
              variant === "secondary",
            "border-2 border-[var(--primary)] text-[var(--primary)] xl:hover:bg-[var(--primary)]/10 focus-visible:ring-[var(--primary)]/50":
              variant === "outline",
            "text-[var(--white)] xl:hover:bg-[var(--primary)]/20 focus-visible:ring-[var(--primary)]/50":
              variant === "ghost",
          },
          {
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-8 px-3 py-1 text-xs": size === "sm",
            "h-12 px-6 py-3 text-base": size === "lg",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button }
