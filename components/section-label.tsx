import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "mb-3.5 block font-mono text-[0.68rem] font-medium uppercase tracking-[0.2em] text-primary",
        className
      )}
    >
      {children}
    </span>
  )
}
