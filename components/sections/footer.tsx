export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative z-10 border-t border-border bg-navy-2 px-6 py-10 text-center"
      role="contentinfo"
    >
      <div className="mb-4">
        <span className="font-display text-3xl tracking-wider text-foreground/40">
          TCSS
        </span>
      </div>
      <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground/60">
        © {currentYear} GlobeLinkz · The Conversion Stack System · Simon Peace
      </p>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground/60">
        All rights reserved · Founding price available for 50 members only
      </p>
    </footer>
  )
}
