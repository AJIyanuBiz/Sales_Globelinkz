import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "primary-lg" | "nav"
  className?: string
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  const baseStyles =
    "inline-block font-mono font-semibold uppercase tracking-wider text-primary-foreground no-underline transition-all duration-150 bg-gradient-cta"

  const variants = {
    primary:
      "px-10 py-[18px] text-[0.78rem] tracking-[0.12em] shadow-cta hover:-translate-y-0.5 hover:shadow-cta-hover",
    "primary-lg":
      "px-14 py-[22px] text-[0.85rem] tracking-[0.12em] shadow-cta-lg hover:-translate-y-0.5 hover:shadow-cta-lg-hover",
    nav: "px-6 py-2.5 text-[0.68rem] tracking-[0.12em] hover:brightness-110",
  }

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </Link>
  )
}

interface SecondaryLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function SecondaryLink({ href, children, className }: SecondaryLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[0.9rem] text-muted-foreground no-underline hover:text-foreground transition-colors",
        className
      )}
    >
      {children}
    </Link>
  )
}
