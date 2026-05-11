import { CTAButton } from "@/components/cta-button"

export function Navigation() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-navy/95 py-4 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-display text-2xl tracking-wider text-foreground">
              TCSS
            </span>
          </div>
          <CTAButton href="#offer" variant="nav">
            Get Instant Access
          </CTAButton>
        </div>
      </div>
    </nav>
  )
}
