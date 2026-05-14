import { SectionLabel } from "@/components/section-label"

const beforeItems = [
  "Running campaigns on gut feeling and prayer",
  "Spending money and not knowing why it's not working",
  "Writing ads about yourself instead of your customer",
  "Hoping your offer is good enough",
  "Every bad campaign is a mystery you can't solve",
  "Customers buy once and you never hear from them again",
  "Starting from scratch every single time",
  "Watching competitors win and not understanding how",
]

const afterItems = [
  "Every campaign built on a real foundation",
  "You know exactly which layer to fix when results dip",
  "Ads that make your customer feel seen and understood",
  "An offer you built to convert — not hoped would work",
  "A diagnostic framework for every campaign, forever",
  "A Keep system that brings buyers back automatically",
  "One checklist that anchors every campaign you run",
  "Results that finally make sense — and can be repeated",
]

export function Transformation() {
  return (
    <section
      id="transformation"
      className="py-20"
      aria-labelledby="transformation-heading"
    >
      <div className="container-narrow relative">
        <SectionLabel>Before &amp; After</SectionLabel>
        <h2
          id="transformation-heading"
          className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[0.04em]"
        >
          What life looks like
          <br />
          <span className="text-primary">before and after the STACK.</span>
        </h2>

        <div className="mt-11 grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Before Column */}
          <div className="border border-border bg-navy-2 p-6">
            <div className="mb-3.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground/70">
              Where you are without it
            </div>
            <ul className="flex list-none flex-col gap-3" role="list">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[0.88rem] leading-normal text-muted-foreground"
                >
                  <span
                    className="shrink-0 text-muted-foreground/70"
                    aria-hidden="true"
                  >
                    ✗
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div
            className="hidden text-center text-[1.8rem] text-primary md:block"
            aria-hidden="true"
          >
            →
          </div>

          {/* After Column */}
          <div className="border border-primary/40 bg-primary/5 p-6">
            <div className="mb-3.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-primary">
              Where you&apos;ll be with the STACK
            </div>
            <ul className="flex list-none flex-col gap-3" role="list">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[0.88rem] leading-normal text-foreground"
                >
                  <span
                    className="shrink-0 font-bold text-primary"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
